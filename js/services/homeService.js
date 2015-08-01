app.service('homeService', function($http, $q){

var createSongData = function(fromServer) {
  var result = [];
  for (var i = 0; i < fromServer.length; i++) {
    var newSong = {
      Song: fromServer[i].trackName,
      Artist: fromServer[i].artistName,
      AlbumArt: fromServer[i].artworkUrl100,
      Collection: fromServer[i].collectionName,
      Type: fromServer[i].kind,
      CollectionPrice: fromServer[i].collectionPrice,
      Id: fromServer[i].artistId
    }
    result.push(newSong);
  }
  return result;
};

this.getArtistName = function(artist) {
    var deferred = $q.defer();
    var url = 'https://itunes.apple.com/search?term=' + artist + '&callback=JSON_CALLBACK';
    $http({
      method: 'JSONP',
      url: url
    }).then(function(response) {
      var parsedResponse = response.data.results;
      deferred.resolve(createSongData(parsedResponse));
    })
    return deferred.promise;
  };

  this.getArtistAlbum = function(artistId) {
    var deferred = $q.defer();
    var url = 'https://itunes.apple.com/lookup?id=' + artistId + '&entity=album&callback=JSON_CALLBACK';
    $http({
      method: 'JSONP',
      url: url
    }).then(function(response){
      deferred.resolve(response.data.results);
    })
    return deferred.promise;
  }

});




