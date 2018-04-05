const router = require('express').Router()
const {homePage, login, register} = require('../controllers/index.controller')

router
    .get('/', homePage)
    .post('/login', login)
    .post('/register', register)

module.exports = router