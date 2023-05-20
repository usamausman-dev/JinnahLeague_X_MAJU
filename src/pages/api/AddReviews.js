import connectMongo from "../../../database/conn";
import { Restaurant } from "../../../model/Schema";

export default async function handler(req, res) {
    try {
        await connectMongo();

        if (req.method === "POST") {
            const { restaurantId, userId, rating, comment } = req.body;

            if (!restaurantId || !userId || !rating || !comment) {
                return res.status(400).json({ error: "Missing required fields" });
            }

            const restaurant = await Restaurant.findById(restaurantId);

            if (!restaurant) {
                return res.status(404).json({ error: "Restaurant not found" });
            }

            restaurant.reviews.push({ user: userId, rating, comment });

            await restaurant.save();

            res.status(201).json({ status: true, message: "Review added successfully" });
        } else {
            res.status(405).json({ error: "Method Not Allowed" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
