const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
    headline: {
        type: String,
        required: true,
    },
    category: {
        type: Number,
        default: 0,
    },
    position: {
        type: String,
        default: "Full-stack deweloper"
    },
    description: {
        description1: {
            type: String,
        },
        description2: {
            type: String,
        },
        description3: {
            type: String,
        }
    },
    technologies:[{
        type : String,
    }],
    imgs:{
        imgMain: {
            type: String
        },
        img1: {
            type: String
        },
        img2:{
            type: String
        },
        img3:{
            type: String
        },
        img4:{
            type: String
        },
    }
},
{
    timestamps: true
}
);

const Project = mongoose.model("Project", ProjectSchema);

module.exports = Project;