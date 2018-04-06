const router = require('express').Router()
const {getAllHistories, getOneHistory, createHistory, deleteHistory} = require('../controllers/history.controller')

router
    .get('/', getAllHistories)
    .get('/oneHistory', getOneHistory)
    .post('/', createHistory)
    .delete('/', deleteHistory)

module.exports = router
