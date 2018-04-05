const router = require('express').Router()
const {homePage, login, register, faceAnalyze} = require('../controllers/index.controller')

router
    .get('/', homePage)
    .post('/login', login)
    .post('/register', register)
    .post('/faceAnalyze', faceAnalyze)
module.exports = router