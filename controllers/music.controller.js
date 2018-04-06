const music = require('../models/music.model')
const ObjectID = require('mongodb').ObjectID;

module.exports = {
  showAllMusic: function(req, res){
    //nanti tampilin data music sesuai id
    music.find()
         .exec()
         .then(musics => {
           res.status(200).json({
             message: "Show all Musics",
             musics
           })
         })
         .catch(err => {
           res.status(500).json({
             message: err
           })
         })
  },
  saveMusicRec: function(req, res){
    // let newMusic = new music({
    //   artistName: ,
    //   trackName:,
    //   artistViewUrl:,
    //   trackViewUrl:,
    //   previewUrl:
    // })
    // console.log(req.body.itunesRec);

    let newMusicRec = new music({
      musicRecommendation: req.body.itunesRec
    })

    // console.log(newMusicRec);

    newMusicRec.save((err, musicRec) => {
      if(err){
        res.status(500).json({
          message: err
        })
      }else{
        // console.log(musicRec);
        res.status(201).json({
          message: 'Music Recommendation has been added',
          musicRec
        })

      }
    })

  },
  deleteMusicRec: function(req, res){
    let musicId = req.params.id;
    music.remove({_id:ObjectID(musicId)})
         .then(result => {
           res.status(200).json({
             message: `Music Rec Id ${musicId} Succesfully deleted`,
             results
           })
         })
         .catch(err =>{
           res.status(500).json({
             message: err
           })
         })
  }
}
