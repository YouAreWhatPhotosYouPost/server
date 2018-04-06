const User = require('../models/user')
const FB = require('fb');

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
                        res.status(201).json({
                        message: 'success insert user',
                        data: user
                        })
                    }
                    })
                }
            })
        })
    }
}