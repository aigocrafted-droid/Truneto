import { ServiceOption, AddonOption, Review } from "./types";

export const SERVICES: ServiceOption[] = [
  {
    id: "deep",
    name: "Full Home Deep Cleaning",
    description: "Our signature heavy-duty treatment. Deep bathroom scouring, grease removal from kitchen counters, floor scrubbing with commercial single-disc machine, window tracks vacuuming, and cobweb removal.",
    basePrice: 2999,
    multiplier: 650,
    included: [
      "Floor scrubbing with single-disc scrubbing machine & eco-products",
      "Deep kitchen sanitization (chimney mesh exterior & countertops degreasing)",
      "Acid-free bathroom stain descaling (tiles, fixtures, shower glasses)",
      "Cobweb dusting & wall spot wiping",
      "Balcony high-pressure wash & window glass cleaning",
      "Cabinet interior & drawer vacuuming"
    ]
  },
  {
    id: "standard",
    name: "Regular Maids & Express Clean",
    description: "The ideal bi-weekly or monthly maintenance sweep. Focuses on dry/wet floor mopping, kitchen wiping, shelf dusting, bed making, and toilet sanitization.",
    basePrice: 1499,
    multiplier: 350,
    included: [
      "Dry vacuuming and professional wet mopping representing fresh scents",
      "Surface wiping of all tables, counters, electronic appliances",
      "Thorough kitchen platform wiping and sink washing",
      "Standard bathroom wash (commode, tiles dry-mopped, mirrors clean)",
      "Dusting of fan blades, light switch plates, and picture frames",
      "Disposal of household garbage and thrash"
    ]
  },
  {
    id: "move_out",
    name: "Move-In / Move-Out Cleaning",
    description: "Designed for vacant houses transitioning tenants. Focuses on absolute sanitation, scrubbing of closets, grease removal, deep bathroom polishing, and detail washing of fixtures.",
    basePrice: 3499,
    multiplier: 800,
    included: [
      "Detail steam-sanitized cleaning of empty wardrobes (inside/out)",
      "Intensified floor sanitizing with machine scrubbing",
      "Kitchen appliances scrub-down (fridge, oven, exhaust fan, sink)",
      "Tough stain treatment on vitrified and granite floors",
      "Detailed door frames, baseboards, switchboards scrubbing",
      "Complete dry vacuuming of ceiling corners, light vents, under sinks"
    ]
  },
  {
    id: "pest_control",
    name: "Herbal Pest Control & Bedbugs",
    description: "A specialized, government-approved herbal gel treatment for cockroaches and ants. Safe for pets, infants, and pregnant women. Comes with a 90-day warrantee.",
    basePrice: 1199,
    multiplier: 250,
    included: [
      "Odourless organic herbal gel applied in kitchen hinges and cabinets",
      "Liquid residual spray in bathrooms, balconies, and drain outlets",
      "Targeted chemical micro-spray treatment for immediate contact kill",
      "Full warranty: free 2nd visit if pests reappear within 90 days",
      "100% kid-safe and pet-safe materials only"
    ]
  }
];

export const ADDONS: AddonOption[] = [
  {
    id: "sofa",
    name: "Sofa & Cushion Shampooing (Per Seat)",
    description: "High-suction extraction of deep dirt and oil stains from fabric or leather upholstery.",
    price: 249
  },
  {
    id: "fridge",
    name: "Inside Fridge Deep Clean",
    description: "Complete defrost, sanitization, and food-grade bio-detergent wipe down.",
    price: 499
  },
  {
    id: "chimney",
    name: "Kitchen Chimney Dismantling & Degrease",
    description: "Full mechanical filter dismantle, ultrasonic chemical soak, heavy degreasing.",
    price: 849
  },
  {
    id: "balcony",
    name: "Balcony Double Wash & Floor Scrubbing",
    description: "High-pressure floor sweep and pigeon dropping stain extraction.",
    price: 399
  },
  {
    id: "bed_shampoo",
    name: "Mattress Dust-Mite Extraction & Upholstery Warm Clean",
    description: "Deep steam vacuuming for hygiene and allergy prevention.",
    price: 699
  }
];

export const REVIEWS: Review[] = [
  {
    id: "rev-1",
    name: "Voice in Wilderness - Jebin",
    rating: 5,
    date: "2 days ago",
    comment: "The best cleaning service I ever had at a convenient rate. Truneto cleaners in Bangalore did a brilliant job! Their deep floor scrubbing machine literally restored our old marble tiles to new brightness.",
    verified: true,
    tag: "Full Home Deep Cleaning"
  },
  {
    id: "rev-2",
    name: "Divya apsara25",
    rating: 5,
    date: "1 week ago",
    comment: "Affordable price and best quality of work! They arrived on time, wore standard uniforms, and didn't rush. The kitchen look shiny and the grease completely vanished.",
    verified: true,
    tag: "Kitchen & Bathroom Sparkle"
  },
  {
    id: "rev-3",
    name: "Mr Abhishek",
    rating: 5,
    date: "3 weeks ago",
    comment: "Left my house sparkling clean especially kitchen, bathroom and sofa. They are very polite and took special feedback for double cleaning our balcony. Exceptional Bangalore rating fully deserved.",
    verified: true,
    tag: "Sofa Shampooing & Bathroom"
  },
  {
    id: "rev-4",
    name: "Karan S.",
    rating: 5,
    date: "1 month ago",
    comment: "Moved into standard JP Nagar apartment and booked Move-In Clean. It was incredibly dusty but Truneto turned it around in 6 hours. Every shelf was vacuumed clean internally.",
    verified: true,
    tag: "Move-In / Move-Out Cleaning"
  }
];

export const NEIGHBORHOODS = [
  "J. P. Nagar (Phases 1-9)",
  "Sarakki",
  "Kumaraswamy Layout",
  "BTM Layout",
  "Jayanagar",
  "Banashankari",
  "Bannerghatta Road",
  "Koramangala",
  "HSR Layout",
  "Whitefield",
  "Indiranagar",
  "Electronic City",
  "Marathahalli",
  "Malleshwaram",
  "Rajajinagar"
];
