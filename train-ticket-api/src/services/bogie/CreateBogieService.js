const mongoose = require("mongoose");
const CreateBogieService = async (req, res, BogieModel, ClassModel) => {

    // Create Transaction Session
    const session = await mongoose.startSession();


    try{
        // Begin Transaction
        await session.startTransaction();

        let classId = req.params['classId'];
        let PostBody = req.body;
        const ObjectId = mongoose.Types.ObjectId;

        //First-Database-Process
        const bogie = await BogieModel.create([PostBody], {session});
        const bogieId = bogie[0]['_id'];

        //Second-Database-Process//update-hotel
        await ClassModel.updateOne(
            {_id: new ObjectId(classId)},
            {$push: { bogies: bogieId }},
            {session}
        )

        // Transaction Success
        await session.commitTransaction();
        await session.endSession();

        res.status(200).json({status: "success", data: bogie[0]});
    }
    catch(error) {
        // Roll Back Transaction if Fail
        await session.abortTransaction();
        await session.endSession();
        res.status(500).json({status: "fail", data: error});    }
}


module.exports=CreateBogieService