const VaraModel = require('../../models/Vara/VaraModel')
const DetailsByIDService = require("../../services/common/DetailsByIDService");
const SearchTrainService = require("../../services/train/SearchTrainService");
const CreateVaraService = require("../../services/vara/CreateVaraService");
const GetVaraByTrainIDService = require("../../services/vara/GetVaraByTrainIDService");

exports.CreateVara=async (req, res) => {
    await CreateVaraService(req, res,VaraModel)
}

//Get Vara By Train ID
exports.GetVaraByTrain=async (req, res) => {
    await GetVaraByTrainIDService(req, res, VaraModel);
}


//Search Train
exports.SearchTrain=async (req, res) => {
    await SearchTrainService(req, res, VaraModel);
}