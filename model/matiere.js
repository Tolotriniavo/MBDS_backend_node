let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let MatiereSchema = Schema({
    id: Number,
    nom: String,
    image: String,
    nomProf: String,
    imageProf:String
});

module.exports = mongoose.model('Matiere', MatiereSchema);