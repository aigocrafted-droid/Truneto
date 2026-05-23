export interface ServiceOption {
  id: string;
  name: string;
  description: string;
  basePrice: number; // base price in INR (₹)
  multiplier: number; // multiplier per room size
  included: string[];
}

export interface AddonOption {
  id: string;
  name: string;
  description: string;
  price: number; // additional price in INR (₹)
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
  tag: string; // e.g., "Full Deep Cleaning", "Kitchen Special"
}

export interface AIPlanningResult {
  analyzedConcerns: string[];
  priorityFocusPoints: {
    area: string;
    action: string;
    priority: "High" | "Medium" | "Standard";
  }[];
  recommendedAddons: {
    name: string;
    reason: string;
  }[];
  timeEstimation: string;
  chemicalProtocol: string;
  whatsappSummaryMessage: string;
}
