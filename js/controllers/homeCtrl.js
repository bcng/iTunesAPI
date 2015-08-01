app.controller('homeCtrl', function($scope, homeService){
  
  $scope.getSongData = function() {
    homeService.getArtistName($scope.artist).then(function(response){
      $scope.songData = response;
    })
  }


});

