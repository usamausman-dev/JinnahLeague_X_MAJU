import connectMongo from "../../../database/conn";
import { Restaurant } from "../../../model/Schema";

export default async function handler(req, res) {
  try {
    await connectMongo();

    if (req.method === "POST") {
      const { name, description, address, cuisine, photo, admin, numOfTable } = req.body;

      if (!name || !description || !address || !cuisine || !photo || !admin || !numOfTable) {
        return res.status(400).json({ error: "Missing required fields" });
      }

      const restaurant = await Restaurant.create({ name, admin ,description, address, photo, numOfTable,  cuisine, reviews: [] });

      res.status(201).json({ status: true, restaurant });
    } else {
      res.status(405).json({ error: "Method Not Allowed" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
