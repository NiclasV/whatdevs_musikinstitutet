const artistsList = document.getElementById('displayAllArtists');

function getDataFrom(what, many) {
    var url = 'https://folksa.ga/api/' + what + '?limit=' + many + '&key=flat_eric';
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

function getSpecific(id) {
    var url = 'https://folksa.ga/api/artists/' + id + '?key=flat_eric';
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            displaySpecific(data);
        })
        .catch(function (error) {
            console.log(error);
        })
}

getDataFrom("artists", 10);

// /*Fetch all Artists Trough API*/


//     var ArtistsURL = 'https://folksa.ga/api/artists?key=flat_eric';
//     fetch(ArtistsURL)
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (artistsData) {
//             displayArtists(artistsData);
//         })
      


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
songs(tracksData);
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

        if( isEmptyOrSpaces(artistBirthYearInput.value) || isEmptyOrSpaces(artistnNameInput.value) || isEmptyOrSpaces(artistGenresInput.value))
        {
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
        let songTitleInput = document.getElementById("songTitleInput");
        let songArtistInput = document.getElementById("songArtistInput");
        let songAlbumInput = document.getElementById("songAlbumInput");
        let songGenresInput = document.getElementById("songGenresInput");

        if( isEmptyOrSpaces(songTitleInput.value) || isEmptyOrSpaces(songArtistInput.value) || isEmptyOrSpaces(songAlbumInput.value) || isEmptyOrSpaces(songGenresInput.value))
        {
            alert("Failed to submit data");
        }
        else
        {
            let track = {
                title: songTitleInput.value,
                artists: songArtistInput.value,
                album: songAlbumInput.value,
                genres: songGenresInput.value
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
        }




/*Function that Submits Albums from Form */

    function submitAlbum() {
        let albumNameInput = document.getElementById("albumNameInput");
        let albumArtistInput = document.getElementById("albumArtistInput");
        let albumReleaseDateInput = document.getElementById("albumReleaseDateInput");
        let albumGenresInput = document.getElementById("albumGenresInput");
        let albumSpotifyURLInput = document.getElementById("albumSpotifyURLInput");
        let albumCoverImageInput = document.getElementById("albumCoverImageInput");

        if( isEmptyOrSpaces(albumNameInput.value) || isEmptyOrSpaces(albumArtistInput.value) || isEmptyOrSpaces(albumReleaseDateInput.value) || isEmptyOrSpaces(albumGenresInput.value))
        {
            alert("Failed to submit data");
        }
        else
        {
            let album = {
                title: albumNameInput.value,
                artists: albumArtistInput.value,
                releaseDate: albumReleaseDateInput.value,
                genres: albumGenresInput.value,
                spotifyURL: albumSpotifyURLInput.value,
                coverImage: albumCoverImageInput.value
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
        document.getElementById("successAlbumSubmited").innerHTML = "The Album has been Submited!";
        }
        
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
        console.log(playlist);
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
        console.log(playlist);

        
      });
            document.getElementById("successPlaylistSubmited").innerHTML = "The Playlist has been Submited!";
    }
