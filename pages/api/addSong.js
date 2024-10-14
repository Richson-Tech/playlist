import dbConnect from "../../utils/dbConnect";
import Song from "../../models/Song";

export default async function handler(req, res) {
    await dbConnect()

    if (req.method === 'POST'){
        try{
            const { title, artist, url, duration } =  req.body

            //let's add some basic validation
            if (!title || !artist || !url || !duration){
                return res.status(400).json({ success:false, message:"All fields are required!!!"})
            }

            const NewSong = new Song ({
                title,
                artist,
                url,
                duration
            })
            await NewSong.save()

            res.status(201).json({ success:true, data: NewSong})
        }catch (error){
            res.status(500).json({ success: false, message: "Server Error, Try again later..."})
        }
    } else{
        res.status(405).json({ success:false, message: "Method not allowed"})
    }
}