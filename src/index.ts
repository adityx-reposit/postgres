import { Client } from "pg";
import express from "express";

const app=express();
app.use(express.json())
const user = new Client(
  "postgresql://neondb_owner:npg_4mbvoq3RBQhf@ep-empty-brook-a5b1eu65-pooler.us-east-2.aws.neon.tech/neondb?sslmode=true"
);
user.connect()



app.post("/signup",async(req,res)=>{
    const username=req.body.username;
    const email=req.body.email;
    const password=req.body.password;


    const response=await user.query(`INSERT into users(username,email,password) VALUES('${username}','${email}','${password}')`)
     console.log(response);
     
   
    res.json({
        
        message:"you have successfully registered"
    })

})


app.get("/signup",(req,res)=>{
    res.json({
        message:"hello"
    })
})

app.listen(3000);