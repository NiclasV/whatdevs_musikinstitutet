/**************
--- FETCHES ---
**************/

/*Fetch Artist Trough API, choose how many*/
function getArtistData(what, many) {
    var url = 'https://folksa.ga/api/' + what + '?limit=' + many + '&sort=desc&key=flat_eric';
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (artistsData) {
            displayArtists(artistsData);
            displaySongForm(artistsData); 
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
            playlistOptions(playlistsData);

        })
        .catch(function (error) {
            console.log(error);
        })
}

/**************
-- SPECIFICS --
**************/

/* Fetch Specific Artist ID Trough API */
function getSpecificAlbum(id) {
    var url = 'https://folksa.ga/api/albums/' + id + '?key=flat_eric';
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            displaySpecificAlbum(data, id);
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
            displaySpecificArtist(data, id);
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
    let url = 'https://folksa.ga/api/playlists/' + id + '/comments?key=flat_eric';
    fetch(url)
    .then((response) => response.json())
    .then((comments) => {
        displayComments(comments);
        console.log(comments);
    });
}


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

        let playlistNameInput = document.getElementById("playlistNameInput");
        let playlistGenresInput = document.getElementById("playlistGenresInput");
        let playlistCreatorInput = document.getElementById("playlistCreatorInput");
        let playlistCoverImageInput = document.getElementById("playlistCoverImageInput");

        if( isEmptyOrSpaces(playlistNameInput.value) || isEmptyOrSpaces(playlistGenresInput.value) || isEmptyOrSpaces(playlistCreatorInput.value))
        {
            alert("Failed to submit data");
        }

        else{
            let playlist = {
                title: playlistNameInput.value,
                genres: playlistGenresInput.value,
                createdBy: playlistCreatorInput.value,
                coverImage: playlistCoverImageInput.value
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
        
             }


/*Function that Submits Comments To Playlists */

    function submitCommentToPlaylist() {
        let commentPlaylistIdInput = document.getElementById("commentPlaylistIdInput").value;
        let commentNameInput = document.getElementById("commentNameInput").value;
        let commentInput = document.getElementById("commentInput").value;
        


        
let comment = {
    playlist: commentPlaylistIdInput,
    body: commentInput,
    username: commentNameInput
}
	console.log(comment);


fetch(`https://folksa.ga/api/playlists/${commentPlaylistIdInput}/comments?key=flat_eric`,{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(comment)
    })
            .then((response) => response.json())
    .then((playlist) => {
  });
            document.getElementById("successCommentSubmited").innerHTML = "The Comment has been Submited!";
    }


/**************
DELETE FROM API 
**************/

function deleteFrom(what, id){
    const confirmation = confirm("Are you sure you want to delete this?");
    if (confirmation) {
        fetch('https://folksa.ga/api/' + what + '/' + id + '?key=flat_eric', {
        method: 'DELETE',
        headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then((response) => response.json())
            .then((artist) => {
            console.log(artist);
            window.location.reload()
        })
    }
    
}


getArtistData("artists", 10);
getAlbumData("albums", 10);
getTracksData("tracks", 10);
getPlaylistData("playlists", 10);

