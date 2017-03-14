var mongoose = require('mongoose');

module.exports = mongoose.model('Cancion', {
	titulo: String,
	autor: String,
	year: String,
	calificacion:String
});
