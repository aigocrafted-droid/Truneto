import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";
import { GoogleGenAI, Type } from "@google/genai";

dotenv.config();

// Lazy-initialized Gemini AI client helper to avoid crashes if API key is missing
let aiClient: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY environment variable is not set. Please configure it in your Secrets tab.");
    }
    aiClient = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return aiClient;
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Middleware for parsing JSON requests
  app.use(express.json());

  // Health check endpoint
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok" });
  });

  // AI Planner Smart Custom Quote Generation
  app.post("/api/generate-plan", async (req, res) => {
    try {
      const { roomDescription, serviceType, bedrooms, bathrooms, zipCode } = req.body;

      if (!roomDescription) {
        return res.status(400).json({ error: "Please provide a description of your home cleaning needs." });
      }

      const ai = getGeminiClient();

      const prompt = `
  You are the Chief Cleaning strategist for "Truneto", Bangalore's leading premium home care and cleaning service company.
  A customer from Bengaluru ZIP code "${zipCode || "560078"}" has requested a tailored assessment.
  Here are the selected parameters:
  - Core Service Type: ${serviceType || "Deep Cleaning"}
  - Layout Target: ${bedrooms || 2} Bedrooms, ${bathrooms || 2} Bathrooms
  - Customer's Special Note / Areas of Concern: "${roomDescription}"

  Analyze the customer's note and generate a customized cleaning strategy plan in JSON format.
  You must adhere to this JSON schema perfectly:
  {
    "analyzedConcerns": ["Brief highlight of what they stated, e.g., pet hair on sofa, heavy exhaust kitchen grease"],
    "priorityFocusPoints": [
      {
        "area": "Kitchen / Living Room / Bathroom etc",
        "action": "Description of the targeted cleaning action we will perform",
        "priority": "High / Medium / Standard"
      }
    ],
    "recommendedAddons": [
      {
        "name": "Sofa Shampooing / Pest Control / Fabric protection etc",
        "reason": "Why this specific additional treatment fits their concerns"
      }
    ],
    "timeEstimation": "e.g., 5 to 6.5 Hours of intensive cleaning code",
    "chemicalProtocol": "Specify active eco-friendly tools we will bring, e.g., enzyme-based sanitizers for animal dander, food-safe citrus degreasers",
    "whatsappSummaryMessage": "Personalised friendly summary text for them to copy or send directly. E.g., 'Hi Truneto! I would like to book an AI-Assisted Deep Clean for my 2BHK flat. Special tasks: pet hair removal & degreasing kitchen tiles.'"
  }

  Return ONLY a valid JSON object matching this schema. Do not enclose it in markdown blocks like \`\`\`json. Just the raw string JSON.
  `;

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
        },
      });

      const jsonText = response.text ? response.text.trim() : "{}";
      const data = JSON.parse(jsonText);
      res.json(data);
    } catch (error: any) {
      console.error("Gemini API Error:", error);
      res.status(500).json({
        error: error.message || "An unexpected error occurred while analyzing your customized plan.",
        isDemoMode: !process.env.GEMINI_API_KEY,
      });
    }
  });

  // Configure Vite middleware in development or serve static build files in production
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[Truneto Express] Server running on http://localhost:${PORT}`);
  });
}

startServer();
