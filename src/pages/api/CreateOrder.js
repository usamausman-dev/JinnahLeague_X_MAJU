import connectMongo from "../../../database/conn";
import { Order } from "../../../model/Schema";


export default async function handler(req, res) {
  try {
    await connectMongo();

    if (req.method === "POST") {
      const { userId, restaurantId, items, totalPrice , status } = req.body;

      if (!userId || !restaurantId || !items || !totalPrice) {
        return res.status(400).json({ error: "Missing required fields" });
      }      
      const order = await Order.create({ userId, restaurantId, items, totalPrice , status });

      res.status(201).json({ msg: "ok" });
    } else {
      res.status(405).json({ error: "Method Not Allowed" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
