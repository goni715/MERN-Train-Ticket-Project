const UsersModel = require("../../models/Users/UsersModel");
const GetAllUsersService = require("../../services/user/GetAllUsersService");
const GetUserDetailsByIDService = require("../../services/user/GetUserDetailsByIDService");
const DeleteUserByIDService = require("../../services/user/DeleteUserByIDService");
const UserUpdateService = require("../../services/user/UserUpdateService");
const BlockUserService = require("../../services/user/BlockUserService");
const UnblockUserService = require("../../services/user/UnblockUserService");



exports.GetAllUser=async(req,res)=>{
    let Result=await GetAllUsersService(req,UsersModel)
    res.status(200).json(Result)
}


//Get Single User
exports.GetUser=async (req, res) => {
    let Result=await GetUserDetailsByIDService(req,UsersModel);
    res.status(200).json(Result)
}

//Delete Single User
exports.DeleteUser=async (req, res) => {
    let Result=await DeleteUserByIDService(req,UsersModel)
    res.status(200).json(Result)
}


//Update a Single User
exports.UpdateUser=async (req, res) => {
    let Result=await UserUpdateService(req,UsersModel)
    res.status(200).json(Result)
}



//Block User
exports.BlockUser=async (req, res) => {
    let Result=await BlockUserService(req,UsersModel)
    res.status(200).json(Result)
}


//UnBlock User
exports.UnblockUser=async (req, res) => {
    let Result=await UnblockUserService(req,UsersModel)
    res.status(200).json(Result)
}

