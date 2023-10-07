import mongoose from "mongoose";
const mailing = new mongoose.Schema({
    email:{
        type:String
    },
    unsubscribeLink:{
        type:String
    }
});

export default  mongoose.model("mailing",mailing);