const history = require('../models/history.model')
const mongoose = require('mongoose');

module.exports = {
    getAllHistories (req, res) {
        history
            .find()
            .populate('images')
            .populate('quotes')
            .populate('musics')
            .exec()
            .then(response => {
                res.status(200).send({
                    message: 'query histories success',
                    data: response
                })
            })
            .catch(err => {
                res.status(400).send({
                    message: err
                })
            })
    },
    getOneHistory (req, res) {
        const {id} = req.body
        history.findById(id, (err, history) => {  
            if (!err) {
                res.status(201).send({
                    message: 'query history success',
                    history
                })
            } else {
                res.status(400).send({
                    message: 'query history failed'
                })
            }
        });
    },
    createHistory (req, res) {
        const {image, quote, music} = req.body
        let newHistory = new history({
            image, quote, music
        })

        newHistory.save((err, result) => {
            if (!err) {
                res.status(201).send({
                    message: 'create history success',
                    data: result
                })
            } else {
                res.status(400).send({
                    message: err.message
                })
            }
        })
    },
    deleteHistory (req, res) {
        const {id} = req.body
        history.findByIdAndRemove(id, (err, todo) => {
            if(!err) {
                res.status(200).send({
                    message: 'delete history success',
                    data: todo
                })
            } else {
                res.status(400).send({
                    message: 'delete history failed'
                })
            }
        })
    }
}