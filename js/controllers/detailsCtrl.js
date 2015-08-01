app.controller('detailsCtrl', function($scope, $routeParams, homeService){
	
	$scope.artistId = $routeParams.Id;

	$scope.getArtistAlbums = function() {
		console.log($scope.artistId)
		homeService.getArtistAlbum($scope.artistId).then(function(response){
			$scope.albumData = response;

		})
	}

	$scope.getArtistAlbums();

});
