angular.module('MainApp', [])

function mainController($scope, $http) {
	$scope.newCancion = {};
	$scope.canciones = {};
	$scope.selected = false;

	// Obtenemos todos los datos de la base de datos
	$http.get('/api/cancion').success(function(data) {
		$scope.canciones = data;
	})
	.error(function(data) {
		console.log('Error: ' + data);
	});

	// Función para registrar a una persona
	$scope.registrarCancion = function() {
		$http.post('/api/cancion', $scope.newCancion)
		.success(function(data) {
				$scope.newCancion = {}; // Borramos los datos del formulario
				$scope.canciones = data;
			})
		.error(function(data) {
			console.log('Error: ' + data);
		});
	};

	// Función para editar los datos de una persona
	$scope.modificarCancion = function(newCancion) {
		$http.put('/api/cancion/' + $scope.newCancion._id, $scope.newCancion)
		.success(function(data) {
				$scope.newCancion = {}; // Borramos los datos del formulario
				$scope.canciones = data;
				$scope.selected = false;
			})
		.error(function(data) {
			console.log('Error: ' + data);
		});
	};

	// Función que borra un objeto persona conocido su id
	$scope.borrarCancion = function(newCancion) {
		$http.delete('/api/cancion/' + $scope.newCancion._id)
		.success(function(data) {
			$scope.newCancion = {};
			$scope.canciones = data;
			$scope.selected = false;
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});
	};

	// Función para coger el objeto seleccionado en la tabla
	$scope.selectCancion = function(cancion) {
		$scope.newCancion = cancion;
		$scope.selected = true;
		console.log($scope.newCancion, $scope.selected);
	};
}
