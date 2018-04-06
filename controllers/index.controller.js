const image = require('../models/image.model')
const mongoose = require('mongoose')

module.exports = {
    homePage: (req, res) => {
        
    },
    login: (req, res) => {
        
    },
    register: (req, res) => {
        
    },
    faceAnalyze: (req, res) => {
        const emotions = req.body.data[0].faceAttributes.emotion;
        const urlImage = req.body.data[0].urlImage;
        console.log("emotions- ", emotions)
        console.log("url- ", urlImage)

        let newImage = new image({
            emotions, urlImage
        })

        console.log("new image- ", newImage)

        newImage.save((err, result) => {
            if (!err) {
                res.status(201).send({
                    message: 'face analyze saved',
                    data: result
                })
            } else {
                res.status(400).send({
                    message: err.message
                })
            }
        })
    }
}