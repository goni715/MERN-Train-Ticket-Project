const express = require('express');
const UsersController = require("../controllers/Users/UsersController");
const AuthVerifyMiddleware = require("../middlewares/AuthVerifyMiddleware");

const router = express.Router();


//This is HomePage
router.get('/', function(req,res){
    res.end('This is HomePage')
});



//Users
router.get("/get-user/:id",AuthVerifyMiddleware,UsersController.GetUser);
router.get("/get-all-users", UsersController.GetAllUser);
router.delete("/delete-user/:id",UsersController.DeleteUser);
router.put("/update-user",AuthVerifyMiddleware, UsersController.UpdateUser);


module.exports=router;