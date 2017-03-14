var Cancion = require('./modelo/cancion');

// Obtiene todos los objetos Persona de la base de datos
exports.getCancion = function (req, res){
	Cancion.find(
		function(err, cancion) {
			if (err)
				res.send(err)
					res.json(cancion); // devuelve todas las Personas en JSON
				}
			);
}

// Guarda un objeto Persona en base de datos
exports.setCanciones = function(req, res) {

		// Creo el objeto Persona
		Cancion.create(
			{titulo : req.body.titulo, autor: req.body.autor, year: req.body.year, calificacion: req.body.calificacion },
			function(err, cancion) {
				if (err)
					res.send(err);
				// Obtine y devuelve todas las personas tras crear una de ellas
				Cancion.find(function(err, cancion) {
				 	if (err)
				 		res.send(err)
				 	res.json(cancion);
				});
			});

	}

// Modificamos un objeto Persona de la base de datos
exports.updateCancion = function(req, res){
	Cancion.update( {_id : req.params.cancion_id},
					{$set:{titulo : req.body.titulo, autor: req.body.autor, year: req.body.year, calificacion: req.body.calificacion}},
					function(err, cancion) {
						if (err)
							res.send(err);
				// Obtine y devuelve todas las personas tras crear una de ellas
				Cancion.find(function(err, cancion) {
				 	if (err)
				 		res.send(err)
				 	res.json(cancion);
				});
			});
	}

// Elimino un objeto Persona de la base de Datos
exports.removeCancion = function(req, res) {
	Cancion.remove({_id : req.params.cancion_id}, function(err, cancion) {
		if (err)
			res.send(err);
			// Obtine y devuelve todas las personas tras borrar una de ellas
			Cancion.find(function(err, cancion) {
				if (err)
					res.send(err)
				res.json(cancion);
			});
		});
}
