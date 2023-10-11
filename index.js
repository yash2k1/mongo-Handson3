const express=require("express");
const cors=require("cors");
const dotenv=require("dotenv");
const connectToDb=require("./db/connection");
const routerFile =require("./routes/routerFile")
const app=express();

dotenv.config();
app.use(cors({
    origin:"*"
}));
app.use(express.json())

app.use("/",routerFile)

const connectFunc=async()=>{
try{
    connectToDb();
    app.listen(process.env.PORT,()=>{
        console.log(`your server is live on ${process.env.PORT}`);
    });
}
catch(err){
    if(err)console.log(err)
}

}
connectFunc();