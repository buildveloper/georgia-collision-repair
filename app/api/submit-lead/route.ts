import { put } from "@vercel/blob";
import Airtable from "airtable";

Airtable.configure({ apiKey: process.env.AIRTABLE_API_KEY! });
const base = Airtable.base(process.env.AIRTABLE_BASE_ID!);

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    
    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const email = formData.get("email") as string;
    const zip = formData.get("zip") as string;
    const year = formData.get("year") as string;
    const make = formData.get("make") as string;
    const model = formData.get("model") as string;
    const description = formData.get("description") as string;

    const photoFiles = formData.getAll("photos") as File[];
    const photoAttachments: any[] = [];

    for (const file of photoFiles) {
      if (file.size > 0 && file.type.startsWith("image/")) {
        try {
          const blob = await put(file.name, file, { access: "public" });
          photoAttachments.push({
            url: blob.url,
            filename: file.name || `damage-${Date.now()}.jpg`,
          });
        } catch (e) {
          console.error("Photo upload failed:", e);
        }
      }
    }

    await base("Leads").create([{
      fields: {
        "Name": name,
        "Phone Number": phone,
        "Email": email,
        "Zip Code": zip,
        "Year": year ? parseInt(year) : undefined,
        "Make": make,
        "Model": model,
        "Damage Description": description,
        "Photos": photoAttachments,
        "Status": "New",
      }
    }]);

    return Response.json({ success: true });
  } catch (error: any) {
    console.error("Error:", error.message);
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
}