const router = require('express').Router()
const {homePage, login, register} = require('../controllers/index.controller')
const QuotesController = require('../controllers/quotes.controller')

router
    .get('/', homePage)
    .post('/login', login)
    .post('/register', register)
    .post('/quotes/save', QuotesController.saveQuotes)
    .post('/quotes/delete/:id', QuotesController.deleteQuotes)
    .get('/quotes', QuotesController.showQuotes)

module.exports = router