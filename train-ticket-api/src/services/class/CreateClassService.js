const mongoose = require("mongoose");
const CreateClassService = async (req, res, ClassModel, TrainModel) => {

    // Create Transaction Session
    const session = await mongoose.startSession();


    try{
        // Begin Transaction
        await session.startTransaction();

        let trainId = req.params['trainId'];
        let PostBody = req.body;
        const ObjectId = mongoose.Types.ObjectId;

        //First-Database-Process
        const newClass = await ClassModel.create([PostBody], {session});
        const classId = newClass[0]['_id'];

        //Second-Database-Process//update-hotel
        await TrainModel.updateOne(
            {_id: new ObjectId(trainId)},
            {$push: { classes: classId }},
            {session}
        )

        // Transaction Success
        await session.commitTransaction();
        await session.endSession();

        res.status(200).json({status: "success", data: newClass[0]});
    }
    catch(error) {
        // Roll Back Transaction if Fail
        await session.abortTransaction();
        await session.endSession();
        res.status(500).json({status: "fail", data: error});    }
}


module.exports=CreateClassService