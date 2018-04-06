const ModelQuotes = require('../models/quotes.model');
const ObjectId = require('mongodb').ObjectID;


class QuotesController {


    static showQuotes(req,res) {
        ModelQuotes.find(function(err, result) {
            
            if (err) {
                res.status(400).json({
                    message: "Bad Request",
                })

            } else {
                res.status(200).json({
                    message: "Show quotes success",
                    quotes: result
                })
            }
        })
    }


    static saveQuotes(req,res) {
        const newQuote = new ModelQuotes(req.body);
        
        newQuote.save(function (err,result) {
            if (err) {
                res.status(400).json({
                    message: "Bad Request",
                })

            } else {
                res.status(200).json({
                    message: "Add quote success",
                    quotes: result
                })
            }
        })
    }

    static deleteQuotes (req,res) {
        const id = req.params.id;

        ModelQuotes.deleteOne({_id:ObjectId(id)}, function (err, result) {
            if (err) {
                res.status(400).json({
                    message: "Bad Request",
                })
            } else {
                res.status(200).json({
                    message: "Delete quotes success",
                    quotes: result
                })
            }
        })

    }



}

module.exports = QuotesController;