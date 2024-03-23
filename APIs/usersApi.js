const exp = require('express');
const userApp = exp.Router()
const expressAsyncHandler = require("express-async-handler")
const bcryptjs = require('bcryptjs');
const jwtToken = require('jsonwebtoken')

userApp.use(exp.json()) 

userApp.post('/login-user',expressAsyncHandler(async(request,response)=>{
    console.log("login called");
    const userCollectionObj = request.app.get("userObj")
    let userDetails = request.body;
    let userExist = await userCollectionObj.findOne({username:userDetails.username})
    if(userExist == null){
        response.send({message:"Username doesn't exist",status:"false"})
    }
    else{
        let passwaordCompare = bcryptjs.compare(userDetails.password,userExist.password)

        if(passwaordCompare == false){
            response.status.send({message:"Incorrect password",status:false})
        }
        else{
            let jwt = jwtToken.sign({username:userDetails.username},'abcdef',{expiresIn:180})
            response.status(200).send({message:"valid user",token:jwt,status:true})
        }
    }
}))

userApp.post('/register-user',expressAsyncHandler(async(request,response)=>{
    const userCollectionObj = request.app.get("userObj")
    let userDetails = request.body;
    console.log("registeration called")
    let userExist = await userCollectionObj.findOne({username:userDetails.username})
    userDetails = Object.keys(userDetails).filter(objKey =>
        objKey !== "confirmPassword").reduce((newObj, key) =>
        {
            newObj[key] = userDetails[key];
            return newObj;
        }, {}
    );
    if(userExist != null){
        console.log('User already exists!')
        return response.send({message:'User already exists!',status:false});
    }
    let hashPassword = await bcryptjs.hash(userDetails.password,5);
    userDetails.password = hashPassword;
    await userCollectionObj.insertOne(userDetails)
    console.log('user created')
    response.send({message:"User created",status:true})
}))
module.exports=userApp;


