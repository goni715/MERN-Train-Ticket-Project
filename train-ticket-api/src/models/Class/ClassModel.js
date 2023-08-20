const mongoose = require('mongoose')


const ClassSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        desc: {
            type: String,
            required:true,
            unique:true,
        },
        bogies:[ //bogie-id
            { type: mongoose.Schema.Types.ObjectId}
        ]
    },
    { timestamps: true, versionKey:false},
);

const ClassModel = mongoose.model("classes", ClassSchema);
module.exports=ClassModel
