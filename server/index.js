import express from "express";
const app = express();
import mongoose from "mongoose";
import cors from 'cors';
import dotenv from "dotenv";
dotenv.config({path:"./config.env"});
import bodyParser from "body-parser";
app.use(express.json({limit: '20mb'}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
const mailing = new mongoose.Schema({
    email:{
        type:String
    },
    unsubscribeLink:{
        type:String
    }
});
const port = 8000;
const db = process.env.DB;
console.log(db)
mongoose.connect(db).then(()=>{
    console.log("success")
}).catch((err)=>{
    console.log(err)
});
app.get('/',(req,res)=>{
    res.send("hello");
})
app.listen(port,()=>{
    console.log("started")
})
app.post('/mail',async(req,res)=>{
    try{
        const nodemailer = require('nodemailer');
        const transporter = nodemailer.createTransport({
          service: 'Gmail',
          auth: {
            user: 'jamalmohideen971@gmail.com',
            pass: 'Jamalmydeen1_',
          },
        });
        const recipients = await mailing.find({});
        recipients.forEach((recipient) => {
            const mailOptions = {
              from: 'your-email@example.com',
              to: recipient.email,
              subject: 'Subject of the Email',
              text: `Hello,
          
              You are receiving this email because you have subscribed to our newsletter.
          
              To unsubscribe, click on the following link:
              ${recipient.unsubscribeLink}
          
              Regards,
              Your Company`,
            };
          
            // Send the email
            transporter.sendMail(mailOptions, (error, info) => {
              if (error) {
                console.error('Error:', error);
              } else {
                console.log('Email sent:', info.response);
              }
            });
          }); 
          return res.status(200).send("done");
     }catch(eer){
       console.log(eer);
       res.status(404).send({error:eer});
     }
})
app.post('/unsubscribe/:id',async(req,res)=>{
    try{
        const userId = req.params.id;
        const done = await mailing.deleteOne({email:userId});
        res.send("hello");
    }catch(err){
        console.log(eer);
        res.status(404).send({error:eer});
    }
})
