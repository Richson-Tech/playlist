import dbConnect from "../../dbConnect";
import Song from "../../../Song";

export default async function handler(req, res) {
    await dbConnect();

    if (req.method === 'GET') {
        try {
            const songs = await Song.find({})
            res.status(200).json({success:true, data:songs})
        } catch (error) {
            res.status(400).json ({success:false})
        }
    } else {
        res.status(400).json({success:false})
    }
}