const express=require("express");
const cors=require("cors");
const dotenv=require("dotenv");
const productData=require('./Asset/productData');
const app=express();
const client=require("./db/connection");
const route = require("./routes/routerFile");
app.use(express.json());
async function dbConect(){
try{
await client.connect();
console.log("done")
}
catch(err){
console.log("not done",err)
}
}
dbConect();
app.use(cors({
    origin:"*",
}))
app.use("/route",route);
dotenv.config();

const PORT=process.env.PORT||3040;
app.get("/",(req,res)=>{
    res.send(productData)
});
app.listen(PORT,()=>{
    console.log(`you are live at ${PORT}`)
})