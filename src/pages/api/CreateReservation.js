import connectMongo from "../../../database/conn";
import { Reservation } from "../../../model/Schema";


export default async function handler(req, res) {
  try {
    await connectMongo();

    if (req.method === "POST") {
      const { restaurantId, userId, date, time, NumOfPeople, status, specialRequests } = req.body;

      if (!restaurantId || !userId || !date || !time || !NumOfPeople || !specialRequests || !status) {
        return res.status(400).json({ error: "Missing required fields" });
      }

      const reservation = await Reservation.create({ restaurantId, userId, date, time, NumOfPeople, status, specialRequests });

      res.status(201).json({ status: true, reservation });
    } else {
      res.status(405).json({ error: "Method Not Allowed" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
