const router = require('express').Router();
const geoip = require('geoip-lite');

router.get('/', (req, res) => {
    console.log(geoip.lookup(req.hostname))
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