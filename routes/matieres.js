let Matiere = require("../model/matiere");

function getMatieres(req,res) {

    Matiere.find({}, (err, matiere) => {
        if (err) {
          res.send(err);
        }
        res.json(matiere);
    });
}

function getMatiere(req, res, next) {
    let matiereId = req.params.id;
  
    Matiere.findOne({ _id: matiereId }, (err, matiere) => {
      if (err) {
        res.send(err);
      }
      res.json(matiere);
    });
  }

module.exports = {
    getMatieres,
    getMatiere,
  };