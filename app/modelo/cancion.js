var mongoose = require('mongoose');

module.exports = mongoose.model('Cancion', {
	titulo: String,
	autor: String,
	año: String,
	calificacion:String
});
