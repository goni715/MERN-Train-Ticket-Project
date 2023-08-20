const CreateToken = require("../../utility/CreateToken");
const bcrypt = require("bcrypt");
const IsNotEmail = require("../../helper/isNotEmail");

const AdminLoginService= async (Request, res, DataModel) => {

    try {
        let usernameEmail = Request.body['usernameEmail'];
        let password = Request.body['password'];
        let isNotEmail = await IsNotEmail(usernameEmail);


        if(isNotEmail){
            let user =await DataModel.aggregate([{$match:{username:usernameEmail}}])
            if(user.length>0) {
                if(user[0].isAdmin !== true){
                    res.status(406).json({message: "fail", data:"You are not Admin"});
                }else {
                    let CheckPassword = await bcrypt.compare(password, user[0].password);
                    //if password is not matching
                    if (!CheckPassword) {
                        res.status(400).json({ message: "fail", data:"Wrong Password!"});
                    }else {
                        let TokenData = {email: user[0].email, id: user[0]._id, username: user[0].username}
                        let token = await CreateToken(TokenData);
                        res.status(200).json({message: "success", token: token, data: user});
                    }
                }
            }
            else{
                res.status(404).json({ message: "fail", data:"Wrong UserName"});
            }
        }
        else {

            let user = await DataModel.aggregate([{$match: {email: usernameEmail}}]);
            if (user.length > 0) {
                if(user[0].isAdmin !== true){
                    res.status(406).json({message: "fail", data:"You are not Admin"});
                }else {
                    let CheckPassword = await bcrypt.compare(password, user[0].password);
                    //if password is not matching
                    if (!CheckPassword) {
                        res.status(400).json({message: "fail", data: "Wrong Password!"});
                    } else {
                        let TokenData = {email: user[0].email, id: user[0]._id, username: user[0].username}
                        let token = await CreateToken(TokenData);
                        res.status(200).json({message: "success", token: token, data: user});
                    }
                }
            } else {
                res.status(403).json({message: "fail", data: "Could not Find this Email!"});
            }
        }
    }
    catch (error) {
        res.status(500).json({ message: "error", data:error.toString()});
    }
}
module.exports=AdminLoginService