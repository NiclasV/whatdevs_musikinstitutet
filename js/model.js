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

    document.getElementById("successArtistSubmited").innerHTML = "The Artist has been Submited!";
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
                console.log(album);
    });
    document.getElementById("successAlbumSubmited").innerHTML = "The Album has been Submited!";
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
            console.log(track);
        });
    document.getElementById("successSongSubmited").innerHTML = "The Song has been Submited!";
    }
}

class playlist {
    constructor(title, genres, createdBy, tracks, ratings, coverImage, coverImageColor) {
        this.title = title;
        this.genres = genres;
        this.createdBy = createdBy;
        this.tracks = tracks;
        this.ratings = ratings;
        this.coverImage = coverImage;
        this.CoverImageColor = coverImageColor;
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
        console.log(playlist);
    });
    document.getElementById("successPlaylistSubmited").innerHTML = "Playlist Submited! Search for it to add songs!";        
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

        getPlaylist.Specific(id)
        .then((playlist) => {
            displayModule.specificPlaylist(playlist, id)
        
        })
        .catch((error) => {
            console.log(error);
        })       
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

    getComments: function(playlistId) {
        const getComments = new getData('comments');

        getComments.Specific(comments, id)
        .then((track) => {
            displayModule.playlistComments(comments, id)
        
        })
        .catch((error) => {
            console.log(error);
        })        
    }
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
            console.log(name + born + genres)     
        }

    },


        createSong: function () {
        
        let songTitleInput = document.getElementById("songTitleInput").value;
        let songArtistInput = document.getElementById("songArtistInput");
        let songAlbumInput = document.getElementById("songAlbumInput");
        let songGenresInput = document.getElementById("songGenresInput");

        if( isEmptyOrSpaces(songTitleInput) || isEmptyOrSpaces(songArtistInput.value) || isEmptyOrSpaces(songAlbumInput.value) || isEmptyOrSpaces(songGenresInput.value))
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
                  });
            
                    document.getElementById("successSongSubmited").innerHTML = "The Song has been Submited!";
                }
         


    },
        createAlbum: function () {
        
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

    },
        createPlaylist: function () {
        
        let playlistNameInput = document.getElementById("playlistNameInput");
        let playlistGenresInput = document.getElementById("playlistGenresInput");
        let playlistCreatorInput = document.getElementById("playlistCreatorInput");
        let playlistCoverImageInput = document.getElementById("playlistCoverImageInput");

        if( isEmptyOrSpaces(playlistNameInput.value) || isEmptyOrSpaces(playlistGenresInput.value) || isEmptyOrSpaces(playlistCreatorInput.value))
        {
            alert("Failed to submit data");
        }

        else {
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
	   console.log(comment);

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

