/**************
---- MODEL ----
/*************/

//Class & constructor for our fetches with methods for specific or general requests
class getData {
    constructor(type, limit){
        this.type = type;
        this.limit = limit;
        this.baseUrl = "https://folksa.ga/api/";
        this.key = "key=flat_eric";
    }
    General() {
        return fetch(this.baseUrl + this.type + "?limit=" + this.limit + "&" + this.key)
        .then((response) => response.json())
    }
    Specific(id) {
        return fetch(this.baseUrl + this.type + "/" + id + "?" + this.key)
        .then((response) => response.json())
    }
    Comments(id) {
        return fetch(this.baseUrl + this.type + "/" + id + "/comments?" + this.key) 
        .then((response) => response.json())
    }
    
}

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

//Classes, constructors & createNew-methods for:
//Artists, Albums, Tracks & Playlists

class artist {
    constructor(name, born, gender, genres, spotifyUrl, coverImage) {
        this.name = name;
        this.born = born;
        this.gender = gender;
        this.genres = genres;
        this.spotifyUrl = spotifyUrl;
        this.coverImage = coverImage;
    }
    createNew() {
        return fetch('https://folksa.ga/api/artists?key=flat_eric', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this)
            })
            .then((response) => response.json());

    }
    
}

class album {
    constructor(title, artists, releaseDate, genres, spotifyUrl, coverImage) {
        this.title = title;
        this.artists = artists; 
        this.releaseDate = releaseDate;
        this.genres = genres;
        this.spotifyUrl = spotifyUrl;
        this.coverImage = coverImage;
    }
    createNew() {
        return fetch('https://folksa.ga/api/albums?key=flat_eric', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this)
            })
            .then((response) => response.json())
            .then((album) => {
                
    });
    }
}

class track {
    constructor(title, artists, album, genres) {
        this.title = title;
        this.artists = artists; 
        this.album = album;
        this.genres = genres;
    }
    createNew() {
            return fetch('https://folksa.ga/api/tracks?key=flat_eric', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this)
            })
        .then((response) => response.json())
        .then((track) => {
            
        });
    }
}

class playlist {
    constructor(title, genres, createdBy, coverImage) {
        this.title = title;
        this.genres = genres;
        this.createdBy = createdBy;
        this.coverImage = coverImage;
    }
    createNew() {
        return fetch('https://folksa.ga/api/playlists?key=flat_eric',{
        method: 'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(this)
        })
        .then((response) => response.json())
        .then((playlist) => {
        
    });
    }
}

const fetchModule = {

    getArtists: function() {
        const getArtists = new getData('artists', 12);

        getArtists.General()
        .then((artists) => {
            displayModule.showArtists(artists);  
            buttonsModule.EventListeners(artists);
        })
        .catch((error) => {
            console.log(error);
        })        
    },

    getAlbums: function() {
        const getAlbums = new getData('albums', 12);
        getAlbums.General()
        .then((albums) => {
            displayModule.showAlbums(albums);
        })
        .catch((error) => {
            console.log(error);
        })
    },

    getTracks: function() {
        const getTracks = new getData('tracks', 12);
        getTracks.General()
        .then((tracks) => {
            displayModule.showTracks(tracks)
        })
        .catch((error) => {
            console.log(error);
        })        
    },

    getPlaylists: function() {
        const getPlaylists = new getData('playlists', 12);
        getPlaylists.General()
        .then((playlists) => {
            displayModule.showPlaylists(playlists)
        })
        .catch((error) => {
            console.log(error);
        })        
    },

    getSpecificArtist: function (id) {
        const getArtist = new getData('artists');

        getArtist.Specific(id)
        .then((artist) => {
            displayModule.specificArtist(artist, id)
        
        })
        .catch((error) => {
            console.log(error);
        })        
    },

    getSpecificPlaylist: function (id) {
        const getPlaylist = new getData('playlists');
        const getComments = new getData('playlists');

        getPlaylist.Specific(id)
        .then((playlist) => {
            getComments.Comments(id)
                .then((comments) => {
                    displayModule.specificPlaylist(playlist, id, comments)
                });
        })
        .catch((error) => {
            console.log(error);
        });
    },

    getSpecificAlbum: function (id) {
        const getAlbum = new getData('albums');

        getAlbum.Specific(id)
        .then((album) => {
            displayModule.specificAlbum(album, id)
        })
        .catch((error) => {
            console.log(error);
        })        
    },

    getSpecificTrack: function (id) {
        const getTrack = new getData('tracks');

        getTrack.Specific(id)
        .then((track) => {
            displayModule.specificTrack(track, id)
        
        })
        .catch((error) => {
            console.log(error);
        })       
    },

    getAllArtists: function () {
        const allArtists = new getData('artists', 1000);
    },

    getAllPlaylists: function () {
        const allPlaylists = new getData('playlists', 1000);
    },

    getAllAlbums: function () {
        const allAlbums = new getData('albums', 1000);
    },

    getAllTracks: function () {
        const allTracks = new getData('tracks', 1000);

    },

    getComments: function(id) {
        const getComments = new getData('playlists');

        getComments.Comments(id)
        .then((comments) => {
            displayModule.playlistComments(comments);
        })
        .catch((error) => {
            console.log(error);
        })        
    },

    ratePlaylist: function() {
        let rateNameInput = document.getElementById('rateNameInput').value;
        let playlistId = document.getElementById("playlistId").value;
    

        fetch('https://folksa.ga/api/playlists/' + playlistId + '/vote?key=flat_eric', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ rating: rateNameInput })
        })
        .then((response) => response.json())
        .then((playlist) => {

        });
        document.getElementById("SuccessvoteSubmitted").innerHTML = "the vote has been Submited!";
    },

    rateAlbum: function() {
        let rateNameInput = document.getElementById('rateNameInput').value;
        let albumId = document.getElementById("albumId").value;
    

        fetch('https://folksa.ga/api/albums/' + albumId + '/vote?key=flat_eric', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ rating: rateNameInput })
        })
        .then((response) => response.json())
        .then((albums) => {

        });
        document.getElementById("SuccessvoteSubmitted").innerHTML = "the vote has been Submited!";
    },
}

/**************
SUBMITS TO API 
**************/

function isEmptyOrSpaces(str){
    return str === null || str.match(/^ *$/) !== null;
  }

const submit = {

    createArtist: function () {
         
        let name = document.getElementById("artistNameInput").value;
        let born = document.getElementById("artistBirthYearInput").value;
        let birthPlace = document.getElementById("artistBirthplaceInput").value;
        let gender = document.getElementById("artistGenderInput").value;
        let genres = document.getElementById("artistGenresInput").value;
        let spotifyUrl = document.getElementById("artistSpotifyURLInput").value;
        let coverImage = document.getElementById("artistCoverImageInput").value;

        let addedArtist = new artist(name, born, gender, genres, spotifyUrl, coverImage);
        
        if (isEmptyOrSpaces(born) || isEmptyOrSpaces(name) || isEmptyOrSpaces(genres)) {
            alert("Failed to submit data");
        } else {
            addedArtist.createNew()

            document.getElementById("successArtistSubmited").innerHTML = "The Artist has been Submited!";
        }

    },

        createSong: function () {
        
        let title = document.getElementById("songTitleInput").value;
        let artists = document.getElementById("songArtistInput").value;
        let album = document.getElementById("songAlbumInput").value;
        let genres = document.getElementById("songGenresInput").value; 
            
        let addedTrack = new track(title, artists, album, genres);


        if( isEmptyOrSpaces(title) || isEmptyOrSpaces(artists) || isEmptyOrSpaces(album) || isEmptyOrSpaces(genres)) {
            alert("Failed to submit data");
        } else {
            addedTrack.createNew()
            document.getElementById("successSongSubmited").innerHTML = "The Song has been Submited!";

        }

    },

        createAlbum: function () {
            
        let title = document.getElementById("albumNameInput").value;
        let artists = document.getElementById("albumArtistInput").value;
        let releaseDate = document.getElementById("albumReleaseDateInput").value;
        let genres = document.getElementById("albumGenresInput").value;
        let spotifyUrl = document.getElementById("albumSpotifyURLInput").value;
        let coverImage = document.getElementById("albumCoverImageInput").value;
    
        let addedAlbum = new album(title, artists, releaseDate, genres, spotifyUrl, coverImage);

        if( isEmptyOrSpaces(title) || isEmptyOrSpaces(artists) || isEmptyOrSpaces(releaseDate) || isEmptyOrSpaces(genres))
        {
            alert("Failed to submit data");
        } else {
        addedAlbum.createNew()
        document.getElementById("successAlbumSubmited").innerHTML = "The Album has been Submited!";
        }

    },
        createPlaylist: function () {
            
        let title = document.getElementById("playlistNameInput").value;
        let genres = document.getElementById("playlistGenresInput").value;
        let createdBy = document.getElementById("playlistCreatorInput").value;
        let coverImage = document.getElementById("playlistCoverImageInput").value;
        
        let addedPlaylist = new playlist(title, genres, createdBy, coverImage);

        if( isEmptyOrSpaces(title) || isEmptyOrSpaces(genres) || isEmptyOrSpaces(createdBy))
        {
            alert("Failed to submit data");
        } else {
        addedPlaylist.createNew()
        document.getElementById("successPlaylistSubmited").innerHTML = "Playlist Submited! Search for it to add songs!";
        }

    },

        createCommentToPlaylist: function () {
        
        let commentPlaylistIdInput = document.getElementById("commentPlaylistIdInput").value;
        let commentNameInput = document.getElementById("commentNameInput").value;
        let commentInput = document.getElementById("commentInput").value;
        


        
        let comment = {
        playlist: commentPlaylistIdInput,
        body: commentInput,
        username: commentNameInput
        }
            fetch(`https://folksa.ga/api/playlists/${commentPlaylistIdInput}/comments?key=flat_eric`, {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(comment)
                })
                .then((response) => response.json())
                .then((playlist) => {});
            document.getElementById("successCommentSubmited").innerHTML = "The Comment has been Submited!";
    }

}

