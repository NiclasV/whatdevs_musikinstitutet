
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

/**************
SUBMITS TO API 
**************/


/*Function that Submits Artists from Form */

    function submitArtist() {
        let artistnNameInput = document.getElementById("artistNameInput").value;
        let artistBornInput = document.getElementById("artistBornInput").value;
        let artistGenderInput = document.getElementById("artistGenderInput").value;
        let artistGenresInput = document.getElementById("artistGenresInput").value;
        let artistSpotifyURLInput = document.getElementById("artistSpotifyURLInput").value;
        let artistCoverImageInput = document.getElementById("artistCoverImageInput").value;


        let artist = {
            name: artistnNameInput,
            born: artistBornInput,
            gender: artistGenderInput,
            genres: artistGenresInput,
            spotifyURL: artistSpotifyURLInput,
            coverImage: artistCoverImageInput
        }
        console.log(artist);

        		fetch('https://folksa.ga/api/artists?key=flat_eric',{
        			method: 'POST',
        			headers: {
        				'Accept': 'application/json',
        				'Content-Type': 'application/json'
        			},
        			body: JSON.stringify(artist)
        		  })
        		  .then((response) => response.json())
        		  .then((artist) => {
        			console.log(artist);
        		  })	
    }


/*Function that Submits Albums from Form */

    function submitArtist() {
        let albumNameInput = document.getElementById("albumNameInput").value;
        let albumArtistInput = document.getElementById("albumArtistInput").value;
        let albumReleaseDateInput = document.getElementById("albumReleaseDateInput").value;
        let albumGenresInput = document.getElementById("albumGenresInput").value;
        let albumSpotifyURLInput = document.getElementById("albumSpotifyURLInput").value;
        let albumCoverImageInput = document.getElementById("albumCoverImageInput").value;
        let album = {
            title: albumNameInput,
            artists: albumArtistInput,
            releaseDate: albumReleaseDateInput,
            genres: albumGenresInput,
            spotifyURL: albumSpotifyURLInput,
            coverImage: albumCoverImageInput
        }
        console.log(album);
        fetch('https://folksa.ga/api/albums?key=flat_eric', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(album)
            })
            .then((response) => response.json())
            .then((album) => {
                console.log(album);
            });
    }
