const router = require('express').Router()
const {homePage, login, register, faceAnalyze} = require('../controllers/index.controller')
const {saveMusicRec, showAllMusic, deleteMusicRec, findMusicById} = require('../controllers/music.controller')
const QuotesController = require('../controllers/quotes.controller')

router
    .get('/', homePage)
    .post('/login', login)
    .post('/quotes/save', QuotesController.saveQuotes)
    .post('/quotes/delete/:id', QuotesController.deleteQuotes)
    .get('/quotes', QuotesController.showQuotes)
    .post('/faceAnalyze', faceAnalyze)
    .get('/music', showAllMusic)
    .get('/getOneMusic', findMusicById)
    .post('/music/save', saveMusicRec)
    .delete('/music/:id', deleteMusicRec)

module.exports = router
