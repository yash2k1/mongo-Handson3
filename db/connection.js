const {MongoClient}=require("mongodb");
const url="mongodb+srv://yashgupta1mole:WOdokdiRbWNtSppf@cluster0.9d8fecs.mongodb.net/?retryWrites=true&w=majority"
const client=new MongoClient(url)
module.exports=client;