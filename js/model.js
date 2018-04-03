
/*Fetch all Artists Trough API*/

const artistsList = document.getElementById('displayAllArtists');

    var ArtistsURL = 'https://folksa.ga/api/artists?key=flat_eric';
    fetch(ArtistsURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (artistsData) {
            displayArtists(artistsData);
        })
        .catch(function (error) {
            console.log(error);
        })


/*Fetch all Albums Trough API*/

const albumsList = document.getElementById('displayAllAlbums');

    var AlbumsURL = 'https://folksa.ga/api/albums?key=flat_eric';
    fetch(AlbumsURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (albumsData) {
            displayAlbums(albumsData);
        })
        .catch(function (error) {
            console.log(error);
        })


/*Fetch all Tracks Trough API*/

const tracksList = document.getElementById('displayAllTracks');

    var TracksURL = 'https://folksa.ga/api/tracks?key=flat_eric';
    fetch(TracksURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (tracksData) {
            displayTracks(tracksData);
        })
        .catch(function (error) {
            console.log(error);
        })


/*Fetch all Playlists Trough API*/

const playlistsList = document.getElementById('displayAllPlaylists');

    var PlaylistsURL = 'https://folksa.ga/api/playlists?key=flat_eric';
    fetch(PlaylistsURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (playlistsData) {
            displayPlaylists(playlistsData);
        })
        .catch(function (error) {
            console.log(error);
        })

