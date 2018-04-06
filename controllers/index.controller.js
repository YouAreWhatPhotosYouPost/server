const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')
const FB = require('fb');
const User = require('../models/user')
const image = require('../models/image.model')

const tokenPassword = process.env.tokenPassword

module.exports = {
    homePage: (req, res) => {
        
    },
    login: (req, res) => {
        let token = req.headers.tokenfb
        FB.setAccessToken(token);
        FB.api('/me', {fields: ['email', 'first_name', 'name']}, function(response) {
            let {name, email} = response
            let newUser = new User({name, email})
            
            User.findOne({
                email: newUser.email
            }, function(err, info){
                if(!info) {
                    newUser.save((err, user) => {
                        if(err) {
                            res.status(500).json( {message: 'error database'} )
                        } else {
                            let token = jwt.sign({
                                token: user
                            }, tokenPassword)
                            console.log('masuk sini')
                            res.status(200).json({
                            message: "success login",
                            token: token
                            })
                        }
                    })
                } else {
                    let token = jwt.sign({
                        token: info
                    }, tokenPassword)
                    console.log('masuk sini')
                    res.status(200).json({
                    message: "success login",
                    token: token
                    })
                }
            })
        })
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