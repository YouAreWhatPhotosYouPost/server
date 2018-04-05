const router = require('express').Router()
const {homePage, login, register} = require('../controllers/index.controller')
const {saveMusicRec, showAllMusic, deleteMusicRec} = require('../controllers/music.controller')

router
    .get('/', homePage)
    .post('/login', login)
    .post('/register', register)
    .get('/music', showAllMusic)
    .post('/music/save', saveMusicRec)
    .delete('/music/:id', deleteMusicRec)


module.exports = router
