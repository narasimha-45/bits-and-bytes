const exp = require('express')

const app = exp()

app.listen(4000,()=>console.log("server started"))

const path = require('path')

app.use(exp.static(path.join(__dirname,'./build')))

const mongoClient = require('mongodb').MongoClient;

mongoClient.connect("mongodb://0.0.0.0:27017")
.then((dbRef)=>{
    const dbObj = dbRef.db('hackathon');
    const userObj = dbObj.collection("user_details");
    app.set("userObj",userObj)
    console.log("Data base connection is done");
})
.catch((err)=>console.log("Database Connectivity error is:",err));


const userApp = require("./APIs/usersApi")
app.use('/usersApi',userApp) 


const invalidPathHandlerMiddleWare = (request,response,next)=>{
    response.send({message:"Invalid Path"})
}




app.use("*",invalidPathHandlerMiddleWare)


const errorHandlerMiddleWare = (error,request,response,next)=>{
    response.send({message:error.message})
}
app.use(errorHandlerMiddleWare) 











