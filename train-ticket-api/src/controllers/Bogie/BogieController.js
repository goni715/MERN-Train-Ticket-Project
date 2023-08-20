const BogieModel = require("../../models/Bogie/BogieModel");
const ClassModel = require('../../models/Class/ClassModel')
const GetAllService = require("../../services/common/GetAllService");
const DetailsByIDService = require("../../services/common/DetailsByIDService");
const CreateBogieService = require("../../services/bogie/CreateBogieService");
const BookingSeatService = require("../../services/bogie/BookingSeatService");


exports.CreateBogie=async (req, res) => {
    await CreateBogieService(req,res,BogieModel, ClassModel);
}


//Get All Bogies
exports.GetAllBogies=async (req, res) => {
    let projection = {$project:{_id:1, name:1, desc:1}};
    await GetAllService(req, res,BogieModel,projection);
}

//Get Single Bogie
exports.GetBogie=async (req, res) => {
    await DetailsByIDService(req,res,BogieModel);
}


//Booking a Seat
exports.BookingSeat=async (req, res) => {
    await BookingSeatService(req,res,BogieModel)
}
