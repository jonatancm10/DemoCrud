var Persona = require('./modelo/cancion');
var Controller = require ('./controller');

module.exports = function(app) {

	// devolver todas las canciones
	app.get('/api/cancion', Controller.getCancion);
	// Crear una nueva cancion
	app.post('/api/cancion', Controller.setCanciones);
	// Modificar los datos de una Persona
	app.put('/api/cancion/:cancion_id', Controller.updateCancion);
	// Borrar una Persona
	app.delete('/api/cancion/:cancion_id', Controller.removeCancion);
	// application
	app.get('*', function(req, res) {
		res.sendfile('./angular/index.html'); // Carga única de la vista
	});
};
