var app = angular.module("iTunesApp", ['ngRoute']);

app.config(function($routeProvider){

	$routeProvider

		.when('/home', {
			templateUrl: "templates/homeTmpl.html",
			controller: "homeCtrl"
		})

		.when('/data/:Id', {
			templateUrl: "templates/detailsTmpl.html",
			controller: "detailsCtrl"
		})

		.otherwise ("/home")

});



// .when('/data/:id', {
// 			templateUrl: "./app/templates/dataTmpl.html",
// 			controller: "dataCtrl"