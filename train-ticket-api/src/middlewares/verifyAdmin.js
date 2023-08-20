const jwt = require("jsonwebtoken");
const UsersModel = require("../models/Users/UsersModel");


module.exports= async (req,res,next)=>{
   const Email = req.headers.email;

    const adminUser = await UsersModel.findOne( {email: Email });
    //console.log(adminUser);

    if(adminUser.isAdmin !== true){
        res.status(200).json("You are not an Admin")
    }
    else{
        next();
    }

}

