const router = require('express').Router();


router.get('/', (req, res) => {
    res.render('index')
})

router.get('/projects', (req, res) => {
    res.render('project')
})

router.get('/about', (req, res) => {
    res.render('about')
})

router.get('/technologies', (req, res) => {
    res.render('technologies')
})

module.exports = router;    