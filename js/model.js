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
        let playlistNameInput = document.getElementById("playlistNameInput").value;
        let playlistGenresInput = document.getElementById("playlistGenresInput").value;
        let playlistCreatorInput = document.getElementById("playlistCreatorInput").value;
//        let playlistTracksInput = document.getElementById("playlistTracksInput").value;
        let playlistCoverImageInput = document.getElementById("playlistCoverImageInput").value;

        
let playlist = {
    title: playlistNameInput,
    genres: playlistGenresInput,
    createdBy: playlistCreatorInput,
//    tracks: playlistTracksInput,
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


///*Function that Adds Clicked Songs into an Array*/
//
//
//function addClickedSongToPlaylist() {
//
//
//document.getElementById("DisplayAddedSongsHeadText").innerHTML = `
//<center>
//<h2>Playlist Songs: </h2>
//</center>
//`
//
///*Creates Text Nodes of Clicked Songs and Displays it in a List*/
//
//    var sel = document.getElementById("playlistTracksInput");
//    var text = sel.options[sel.selectedIndex].text;
//
//    var textnode = document.createTextNode(text);
//    var node = document.createElement("li");
//    node.appendChild(textnode);
//    document.getElementById("DisplayAddedSongsToPlaylist").appendChild(node);
//
///*Creates an Array of the Selected Tracks Values*/
//
//var selectedSongsValue = document.getElementById("playlistTracksInput").value;
//
//    var selected = '';
//    
//  selected += selectedSongsValue + ",";
//
//
//
//
//console.log(selected);
//
//}
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

