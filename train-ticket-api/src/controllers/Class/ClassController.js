const ClassModel = require('../../models/Class/ClassModel')
const TrainModel = require('../../models/Train/TrainModel')

const SearchTrainService = require("../../services/train/SearchTrainService");
const CreateClassService = require("../../services/class/CreateClassService");
const GetClassService = require("../../services/class/GetClassService");
const GetAllService = require("../../services/common/GetAllService");

exports.CreateClass=async (req, res) => {
    await CreateClassService(req, res, ClassModel, TrainModel)
}

//Get Single Train
exports.GetClass=async (req, res) => {
    await GetClassService(req, res, ClassModel);
}


//Search Train
exports.SearchTrain=async (req, res) => {
    await SearchTrainService(req, res, ClassModel);
}


//Get All Classes
exports.GetAllClasses=async (req, res) => {
    let projection = {$project:{_id:1, name:1, desc:1}};
    await GetAllService(req, res, ClassModel,projection);
}

