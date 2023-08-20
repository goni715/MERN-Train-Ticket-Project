const TrainModel = require('../../models/Train/TrainModel')
const CreateService = require("../../services/common/CreateService");
const SearchTrainService = require("../../services/train/SearchTrainService");
const GetTrainService = require("../../services/train/GetTrainService");
const GetAllService = require("../../services/common/GetAllService");
const BogieModel = require("../../models/Bogie/BogieModel");

exports.CreateTrain=async (req, res) => {
    await CreateService(req, res,TrainModel)
}

//Get Single Train
exports.GetTrain=async (req, res) => {
    await GetTrainService(req, res, TrainModel);
}


//Search Train
exports.SearchTrain=async (req, res) => {
    await SearchTrainService(req, res, TrainModel);
}


//Get All Trains
exports.GetAllTrains=async (req, res) => {
    let projection = {$project:{_id:1, name:1, fromToCity:1}};
    await GetAllService(req, res, TrainModel,projection);
}

