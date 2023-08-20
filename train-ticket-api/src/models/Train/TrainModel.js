const mongoose = require('mongoose')


const TrainSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true
        },
        fromToCity: [],
        classes: [
            { type: mongoose.Schema.Types.ObjectId}
        ]
    },
    { timestamps: true, versionKey:false},
);

const TrainModel = mongoose.model("trains", TrainSchema);
module.exports=TrainModel
