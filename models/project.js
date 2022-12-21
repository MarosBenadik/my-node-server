const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);

const ProjectSchema = new mongoose.Schema({
    headline: {
        type: String,
        required: true,
    },
    category: {
        type: String,
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
    technologies:{
        type : String,
    },
    imgs:{
        imgMain: {
            type: String
        },
        descMain:{
            type: String,
            default: "None"
        },
        img1: {
            type: String
        },
        descImg1:{
            type: String,
            default: "None"
        },
        img2:{
            type: String
        },
        descImg2:{
            type: String,
            default: "None"
        },
        img3:{
            type: String
        },
        descImg3:{
            type: String,
            default: "None"
        },
        img4:{
            type: String
        },
        descImg4:{
            type: String,
            default: "None"
        },
        order: Number,
    },
    qoute:{
        type: String,
        default: "Something Smart .. "
    }
},
{
    timestamps: true
}
);

ProjectSchema.plugin(AutoIncrement, {inc_field: 'order'});

const Project = mongoose.model("Project", ProjectSchema);

module.exports = Project;