const UsersModel = require("../../models/Users/UsersModel");
const UserCreateService = require("../../services/user/UserCreateService");
const UserLoginService = require("../../services/user/UserLoginService");
const ChangePasswordService = require("../../services/user/ChangePasswordService");
const AdminLoginService = require("../../services/user/AdminLoginService");



exports.Registration=async (req, res) => {
    let Result=await UserCreateService(req,UsersModel)
    res.status(200).json(Result)
}




//SignUpUser Email Verify--Step-01//OTP-Send
exports.SignUpEmailVerify = async (req,res)=> {
    let Result=await SignUpEmailVerifyService(req,UsersModel,RegOTPModel)
    res.status(200).json(Result)
}


//SignUp//SignUpVerifyOTP--Step-02--DataInsert-
exports.SignUpVerifyOTP = async (req,res)=>{
    let Result = await SignUpVerifyOtpService(req,UsersModel,RegOTPModel)
    res.status(200).json(Result)

}




exports.Login=async(req,res)=>{
    await UserLoginService(req,res,UsersModel)
}

exports.AdminLogin=async(req,res)=>{
    let Result=await AdminLoginService(req,res,UsersModel)
    res.status(200).json(Result)
}



//ChangePassword
exports.ChangePassword = async (req,res)=>{
    let Result = await ChangePasswordService(req,UsersModel);
    res.status(200).json(Result)
}



//Step-01// Send OTP
exports.ForgotPasswordVerifyEmail=async (req,res)=>{
    let Result=await ForgotPasswordVerifyEmailService(req,UsersModel)
    res.status(200).json(Result)
}


//Step-02// Verify OTP
exports.ForgotPasswordVerifyOTP=async (req,res)=>{
    let Result=await ForgotPasswordVerifyOtpService(req,OTPSModel)
    res.status(200).json(Result)
}


//Step-03
exports.CreateNewPassword=async (req,res)=>{
    let Result=await CreateNewPasswordService(req,UsersModel,OTPSModel)
    res.status(200).json(Result)
}






//Recover Password
//Step-01//
exports.RecoverPasswordVerifyEmail=async (req,res)=>{
    let Result=await RecoverPasswordVerifyEmailService(req,UsersModel)
    res.status(200).json(Result)
}

//Step-02
exports.ResetPassword=async (req,res)=>{
    let Result=await ResetPasswordService(req,UsersModel,ResetTokenModel)
    res.status(200).json(Result)
}


