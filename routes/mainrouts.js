const router = require('express').Router();
const {getLocation} = require('../helper.js');
const Project = require('../models/project.js');
const url = require('url');

router.get('/',  async (req, res) => {
    getLocation(req.hostname)
    res.render('index')
});

router.get('/projects', async (req, res) => {
    let project

    const count = await Project.countDocuments({}).exec();
    const param = url.parse(req.url, true).query;
    if (param.project){
        project = await Project.findOne({order: param.project})
    } else {
        project = await Project.findOne({order: 1})
    }

    console.log(project)
    const techStack = await project.technologies.replace(/\s/g, '').split(",")

    res.render('project', {data: project, technologies: techStack, total: count })
});

router.get('/about', (req, res) => {
    res.render('about')
});

router.get('/technologies', (req, res) => {
    res.render('technologies')
})

router.get('/add-project', (req,res) => {
    const resMessage = "Add Project";
    res.render('add', {message: resMessage})
})

router.post('/add-project', async (req,res) => {
    try {
        const project = await Project.create({
            headline: req.body.headline,
            category: req.body.category,
            position: req.body.position,
            description: {
                description1: req.body.description1,
                description2: req.body.description2,
                description3: req.body.description3
            },
            technologies: req.body.technologies,
            imgs:{
                imgMain: req.body.imgMain,
                descMain: req.body.descMain,
                img1: req.body.img1,
                descImg1: req.body.descImg1,
                img2:req.body.img2,
                descImg2: req.body.descImg2,
                img3:req.body.img3,
                descImg3: req.body.descImg3,
                img4:req.body.img4,
                descImg4: req.body.descImg4
            },
            qoute: req.body.qoute,
        });

        project.save();

        const resMessage = "All Goood";
        res.render('add', {message: resMessage})
    } catch (error) {
        const resMessage = error.message;
        console.log(resMessage);
        res.render('add', {message: resMessage})
    }
})


module.exports = router;    