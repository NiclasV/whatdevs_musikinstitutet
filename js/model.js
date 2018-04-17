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

    function submitArtist() {
        let artistnNameInput = document.getElementById("artistNameInput").value;
        let artistBirthYearInput = document.getElementById("artistBirthYearInput").value;
        let artistBirthplaceInput = document.getElementById("artistBirthplaceInput").value;
        let artistGenderInput = document.getElementById("artistGenderInput").value;
        let artistGenresInput = document.getElementById("artistGenresInput").value;
        let artistSpotifyURLInput = document.getElementById("artistSpotifyURLInput").value;
        let artistCoverImageInput = document.getElementById("artistCoverImageInput").value;


        let artist = {
            name: artistnNameInput,
            born: artistBirthYearInput,
            gender: artistGenderInput,
            genres: artistGenresInput,
            countryBorn: artistBirthplaceInput,
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
        		  });	

    document.getElementById("successArtistSubmited").innerHTML = "The Artist has been Submited!";


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


/*Function that Adds Clicked Songs into an Array*/


function addClickedSongToPlaylist() {


document.getElementById("DisplayAddedSongsHeadText").innerHTML = `
<center>
<h2>Playlist Songs: </h2>
</center>
`

/*Creates Text Nodes of Clicked Songs and Displays it in a List*/

    var sel = document.getElementById("playlistTracksInput");
    var text = sel.options[sel.selectedIndex].text;

    var textnode = document.createTextNode(text);
    var node = document.createElement("li");
    node.appendChild(textnode);
    document.getElementById("DisplayAddedSongsToPlaylist").appendChild(node);

/*Creates an Array of the Selected Tracks Values*/

var selectedSongsValue = document.getElementById("playlistTracksInput").value;

    var selected = '';
    
    selected += selectedSongsValue + ",";




console.log(selected);

}

