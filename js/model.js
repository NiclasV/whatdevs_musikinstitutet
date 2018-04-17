const artistsList = document.getElementById('displayAllArtists');
const albumsList = document.getElementById('displayAllAlbums');
const tracksList = document.getElementById('displayAllTracks');
const playlistsList = document.getElementById('displayAllPlaylists');

/*Fetch Artist Trough API, choose how many*/
function getArtistData(what, many) {
    var url = 'https://folksa.ga/api/' + what + '?limit=' + many + '&sort=desc&key=flat_eric';
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (artistsData) {
            displayArtists(artistsData);
            submitForms(artistsData);
        })
        .catch(function (error) {
            console.log(error);
        })
}

/*Fetch Album Trough API, choose how many*/
function getAlbumData(what, many){
    var url = 'https://folksa.ga/api/' + what + '?limit=' + many + '&sort=desc&key=flat_eric';
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (albumsData) {
            displayAlbums(albumsData);
        })
        .catch(function (error) {
            console.log(error);
        })
}

/*Fetch Tracks Trough API, choose how many*/
function getTracksData(what, many){
    var url = 'https://folksa.ga/api/' + what + '?limit=' + many + '&sort=desc&key=flat_eric';
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (tracksData) {
            displayTracks(tracksData);
            songs(tracksData);
        })
        .catch(function (error) {
            console.log(error);
        })
}

/*Fetch Playlists Trough API, choose how many*/
function getPlaylistData(what, many){
    var url = 'https://folksa.ga/api/' + what + '?limit=' + many + '&sort=asc&key=flat_eric';
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (playlistsData) {
            displayPlaylists(playlistsData);
        })
        .catch(function (error) {
            console.log(error);
        })
}

/* Fetch Specific Artist ID Trough API */
function getSpecificArtist(id) {
    var url = 'https://folksa.ga/api/artists/' + id + '?key=flat_eric';
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            displaySpecific(data, id);
        })
        .catch(function (error) {
            console.log(error);
        })
}

/* Fetch Specific Playlist ID Trough API */
function getSpecificPlaylist(id) {
    var url = 'https://folksa.ga/api/playlists/' + id + '?key=flat_eric';
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            displaySpecificPlaylist(data, id);
        })
        .catch(function (error) {
            console.log(error);
        })
}

/* Fetch Specific Playlist ID Trough API */

function getPlaylistComments(id) {
    let url = 'https://folksa.ga/api/playlists/' + id + '/comments';
    fetch(url)
    .then((response) => response.json())
    .then((comments) => {
        displayComments(comments);
        console.log(comments);
    });
}

getArtistData("artists", 10);
getAlbumData("albums", 10);
getTracksData("tracks", 10);
getPlaylistData("playlists", 10);


/**************
SUBMITS TO API 
**************/


/*Function that Submits Artists from Form */
function isEmptyOrSpaces(str){
    return str === null || str.match(/^ *$/) !== null;
  }

    function submitArtist() {
        let artistnNameInput = document.getElementById("artistNameInput");
        let artistBirthYearInput = document.getElementById("artistBirthYearInput");
        let artistBirthplaceInput = document.getElementById("artistBirthplaceInput");
        let artistGenderInput = document.getElementById("artistGenderInput");
        let artistGenresInput = document.getElementById("artistGenresInput");
        let artistSpotifyURLInput = document.getElementById("artistSpotifyURLInput");
        let artistCoverImageInput = document.getElementById("artistCoverImageInput");

        if( isEmptyOrSpaces(artistBirthYearInput.value) || isEmptyOrSpaces(artistnNameInput.value) || isEmptyOrSpaces(artistGenresInput.value)){
            alert("Failed to submit data");


        }

        else
        {
            let artist = {
                name: artistnNameInput.value,
                born: artistBirthYearInput.value,
                gender: artistGenderInput.value,
                genres: artistGenresInput.value,
                countryBorn: artistBirthplaceInput.value,
                spotifyURL: artistSpotifyURLInput.value,
                coverImage: artistCoverImageInput.value
            }
            console.log(artist);
    
                    fetch('https://folksa.ga/api/artists?key=flat_eric',
                    {
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
                      });	
    
                document.getElementById("successArtistSubmited").innerHTML = "The Artist has been Submited!";

         }
         


    }

/*Function that Submits Songs from Form */

    function submitSong() {
        let songTitleInput = document.getElementById("songTitleInput").value;
        let songArtistInput = document.getElementById("songArtistInput").value;
        let songAlbumInput = document.getElementById("songAlbumInput").value;
        let songGenresInput = document.getElementById("songGenresInput").value;

let track = {
    title: songTitleInput,
    artists: songArtistInput,
    album: songAlbumInput,
    genres: songGenresInput
}

        console.log(track);
	fetch('https://folksa.ga/api/tracks?key=flat_eric',{
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(track)
	  })
	  .then((response) => response.json())
	  .then((track) => {
		console.log(track);
	  });

	    document.getElementById("successSongSubmited").innerHTML = "The Song has been Submited!";
    }



/*Function that Submits Albums from Form */

    function submitAlbum() {
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

            });
    document.getElementById("successAlbumSubmited").innerHTML = "The Album has been Submited!";
    }

/*Function that Submits Playlists from Form */

    function submitPlaylist() {
        let playlistNameInput = document.getElementById("playlistNameInput").value;
        let playlistGenresInput = document.getElementById("playlistGenresInput").value;
        let playlistCreatorInput = document.getElementById("playlistCreatorInput").value;
        let playlistTracksInput = document.getElementById("playlistTracksInput").value;
        let playlistCoverImageInput = document.getElementById("playlistCoverImageInput").value;

        
let playlist = {
    title: playlistNameInput,
    genres: playlistGenresInput,
    createdBy: playlistCreatorInput,
    tracks: playlistTracksInput,
    coverImage: playlistCoverImageInput
}

    fetch('https://folksa.ga/api/playlists?key=flat_eric',{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(playlist)
      })
      .then((response) => response.json())
      .then((playlist) => {

        
      });
            document.getElementById("successPlaylistSubmited").innerHTML = "The Playlist has been Submited!";
    }


/**************
DELETE FROM API 
**************/

function deleteFrom(id){
fetch('https://folksa.ga/api/artists/' + id + '?key=flat_eric', {
    method: 'DELETE',
    headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
  .then((response) => response.json())
  .then((artist) => {
    console.log(artist);
  })
}

