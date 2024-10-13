import mongoose from "mongoose";

const SongSchema = new mongoose.Schema({
    title: String,
    artiste:String,
    url:String,
    duration:Number
})

export default mongoose.model || mongoose.model('song', SongSchema)