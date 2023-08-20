const express = require('express');
const AuthController = require("../controllers/Auth/AuthController");
const router = express.Router();


//This is HomePage
router.get('/', function(req,res){
    res.end('This is HomePage')
});




//Users
router.post("/Registration",AuthController.Registration);
router.post("/Login",AuthController.Login);
router.post("/admin-login",AuthController.AdminLogin);



module.exports=router;