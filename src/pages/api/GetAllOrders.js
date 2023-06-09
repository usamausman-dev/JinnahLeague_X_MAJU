import connectMongo from "../../../database/conn"

export default async function handler(req, res) {
    connectMongo().catch(error => res.json({ error: "Connection failed" }))

    if (req.method === 'GET') {

        const checkExisting = await Order.find()
        if (checkExisting) {
            res.status(201).json({ msg:"ok" })
        }
        else {
            res.status(201).json({ status: true, data: "" })

        }
    }

    else {
        res.status(500).json({ message: "HTTP Method not valid only POST Accepted" })
    }
}