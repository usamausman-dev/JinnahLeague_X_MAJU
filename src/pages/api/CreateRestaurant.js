import connectMongo from "../../../database/conn";
import { Restaurant } from "../../../model/Schema";

export default async function handler(req, res) {
    connectMongo().catch(error => res.json({ error: "Connection failed" }))

    console.log(req.body)
    if (req.method === 'POST') {
        if (!req.body) return res.status(404).json({ error: 'Dont Have form Data' })
        const {name, description, address, cuisine } = req.body;
        console.log(name, description, address, cuisine )


        Restaurant.create({name, description, address, cuisine})
            .then((data) => {
                res.status(201).json({ status: true, Restaurant: data })
            })
            .catch((err) => {
                res.status(404).json({ err })
            })
    }

    else {
        res.status(500).json({ message: "HTTP Method not valid only POST Accepted" })
    }

}