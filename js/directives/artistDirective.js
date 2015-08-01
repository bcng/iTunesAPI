app.directive('dirArtist', function() {
      return {
        restrict: 'E',
        templateUrl: 'js/directives/dirArtist.html',
        scope: {
          currentArtist: '=',
        }
      }
    })
