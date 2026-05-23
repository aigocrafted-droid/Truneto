export function generateWhatsAppLink(
  serviceName: string,
  bedrooms: number,
  bathrooms: number,
  addons: string[],
  estimatedPrice: number,
  zipCode: string,
  customNotes?: string
): string {
  const baseText = `Hello Truneto! 🧹✨

I would like to book a professional cleaning service:
*Service Type:* ${serviceName}
*Home Configuration:* ${bedrooms} BHK (${bathrooms} Bathrooms)
*ZIP Code / Location:* ${zipCode || "Bangalore"}
*Estimated Price:* Rs. ${estimatedPrice.toLocaleString('en-IN')}
${addons.length > 0 ? `*Special Add-ons:* ${addons.join(", ")}` : ""}
${customNotes ? `*Special Request/Note:* ${customNotes}` : ""}

Please confirm availability! Thanks.`;

  return `https://wa.me/919108412345?text=${encodeURIComponent(baseText)}`;
}
