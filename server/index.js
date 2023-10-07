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
const img = "https://firebasestorage.googleapis.com/v0/b/blogs-8e84a.appspot.com/o/images%2Fcover.png?alt=media&token=9f5bb0e9-25bf-49a4-b384-7e956896a8db"
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
const port = 8000;
const db = process.env.DB;
const email = process.env.email;
const pass = process.env.password;
console.log(email)
console.log(pass)
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
            user: email,
            pass: pass,
          },
        });
        const recipients = await mailing.find({});
        recipients.forEach((recipient) => {
          console.log(recipient)
            const mailOptions = {
              from: 'jamalmohideen971@gmail.com',
              to: recipient.email,
              subject: ' new Blog , What is Blockchain ? ',
              html: `
              <img src=${img} alt="Inline Image" />
              <p>helooooooo , New Blog is Heree... ✨</p>
              <p style="font-size: 18px; font-weight:bold;">What is Blockchain ? and what are different types of servers?</p>
              <p>The link is given below</p>
              <a href="https://mindscrawls.vercel.app/blog/What-is-Blockchain-what-are-different-types-of-networks.md">https://mindscrawls.vercel.app/blog/What-is-Blockchain-what-are-different-types-of-networks.md</a>

              <p>Enjoy ,and gain Knowledge</p>
              
              <p> You can unsubscribe the notifications by entering the below Link 👇</p>
              <a href="https://connect-server-v2kq.onrender.com/unsubscribe/${recipient.email}">unsubcribe Link.</a>
            `
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
        const email = await mailing.findOne({email:id});
        if(!email){
          req.send("email removed/not exists");
        }
        const done = await mailing.deleteOne({email:userId});
        res.send("hello");
    }catch(err){
        console.log(eer);
        res.status(404).send({error:eer});
    }
})
