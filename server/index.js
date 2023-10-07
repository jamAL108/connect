import express from "express";
const app = express();
import mongoose from "mongoose";
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from "dotenv";
import mailing from './model.js';
dotenv.config({path:"./config.env"});
import bodyParser from "body-parser";
app.use(express.json({limit: '20mb'}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
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
        const body = req.body
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
          auth: {
            user: 'jamalmohideen971@gmail.com',
            pass: 'wsmn uwgu kbeq fhzq',
          },
        });
        // const recipients = await mailing.find({});
        const recipients = [
            {
            email:"jamessies123@gmail.com",
            unsubscribeLink:"ergvberbfv"
        }
    ]
        recipients.forEach((recipient) => {
            const mailOptions = {
              from: 'jamalmohideen971@gmail.com',
              to: recipient.email,
              subject: "Testing",
              text: `Hello,
          
              You are receiving this email because you have subscribed to our newsletter.
          
              To unsubscribe, click on the following link:
              ${recipient.unsubscribeLink}
          
              Regards,
              Your Company`,
            };
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
