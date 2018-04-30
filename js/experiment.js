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
                body: JSON.stringify(artist)
            })
            .then((response) => response.json())
            .then((artist) => {
                console.log(artist);
            });
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
                body: JSON.stringify(album)
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
                body: JSON.stringify(track)
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
        body: JSON.stringify(playlist)
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

    getComments: function() {
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

const submitsToApiModule = {

        submitArtist: function () {
        
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
         


    },
    
        submitSong: function () {
        
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
         


    },
        submitAlbum: function () {
        
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
                    console.log(album);
                });
        document.getElementById("successAlbumSubmited").innerHTML = "The Album has been Submited!";
        }

    },
        submitPlaylist: function () {
        
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
                                console.log(playlist);

                    
                  });
                        document.getElementById("successPlaylistSubmited").innerHTML = "Playlist Submited! Search for it to add songs!";
                     }

    },
        submitPlaylist: function () {
        
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
                                console.log(playlist);

                    
                  });
                        document.getElementById("successPlaylistSubmited").innerHTML = "Playlist Submited! Search for it to add songs!";
                     }

    },
        submitCommentToPlaylist: function () {
        
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


/**************
---- VIEW ----
/*************/

const displayModule = {

    showArtists: function(artists) {
        let artistsList = document.getElementById('displayAllArtists');
        let displayArtistsHTML = '';
        
        for (let artist of artists) {
    
            displayArtistsHTML = displayArtistsHTML + `
            <div class="infoCard">
                <div class="img-container">    
                 <img src="${modifierModule.handleImage(artist.coverImage)}" alt="${artist.name}" class="img-fluid"/>
                </div>
                <a id="${artist._id}" href="javascript://artistInfo" onClick="modifierModule.moreArtistInfo(this.id)"><h2>${artist.name}</h2></a>
                      
                <p>${ artist.genres }</p>
                ${modifierModule.handleSpotify(artist.spotifyURL)}
                </div>
            </div>`;
        }    
        artistsList.innerHTML = displayArtistsHTML;
    },

    showPlaylists: function(playlists) {
        let playlistsList = document.getElementById('displayAllPlaylists')
        let displayPlaylistsHTML = '';

         // sort the array by rating and displays them
        for (let playlist of playlists.sort(function(a, b) { 
                return modifierModule.checkIfRated(modifierModule.countRating(b.ratings)) - modifierModule.checkIfRated(modifierModule.countRating(a.ratings))})) 
            {
            let playlistRating = playlist.ratings
    
            displayPlaylistsHTML = displayPlaylistsHTML + `
            <div class="infoCard">
            <div class="img-container">    
            <img src="${modifierModule.handleImage(playlist.coverImage)}" alt="${playlist.title}" class="img-fluid"/>
            </div>
            <a id="${playlist._id}" href="javascript://artistInfo" onClick="modifierModule.morePlaylistInfo(this.id)"><h2>${playlist.title}</h2></a>
            <p><strong>Rating:</strong> ${modifierModule.countRating(playlistRating)}</p>
            </div>
            `;          
        }
        playlistsList.innerHTML = displayPlaylistsHTML;
    },

    showTracks: function(tracks) {
        let tracksList = document.getElementById('displayAllTracks');
        let displayTracksHTML = '';
        let i = 1;
        for (let track of tracks) {

            displayTracksHTML = displayTracksHTML + `
            <h2>${i++}. <a id="${track._id}" href="javascript://trackinfo" onClick='modifierModule.moreTrackInfo(this.id)'>${track.title}</a></h2>
            <p>${track.genres}</p>
            <p><strong>From the album: </strong>${track.album.title}</p><br>
            `;
        }
        tracksList.innerHTML = displayTracksHTML;

    },

    showAlbums: function(albums) {
        let albumsList = document.getElementById('displayAllAlbums');
        let displayAlbumsHTML = '';
    
        for (let album of albums) {
    
            displayAlbumsHTML = displayAlbumsHTML + `
                <div class="infoCard">
                    <div class="img-container">    
                        <img src="${modifierModule.handleImage(album.coverImage)}" alt="${album.title}" class="img-fluid"/>
                    </div>
                    <a id="${album._id}" href="javascript://albumInfo" onClick='modifierModule.moreAlbumInfo(this.id)'><h2>${album.title}</h2></a>
                </div>
            `;
        }
        albumsList.innerHTML = displayAlbumsHTML;
    },
    
    specificArtist: function(artist, id) {
        mainDiv = document.getElementById('main');
        var artistId = id;
        var content = ``; 

        var content =  `
        <section class="infosection">
        <div class="img-container-specific">    
            <img src= "${modifierModule.handleImage(artist.coverImage)}" alt="${artist.name}" class="img-fluid"/>    
        </div>
        <div id="info">
        <h1>${artist.name}</h1>
        <p><strong>Genre:</strong> ${artist.genres}</p>
        <p><strong>Birthplace:</strong> ${artist.countryBorn}</p>
        <p><strong>Birth year:</strong> ${artist.born}</p>
        <div class="spotifyLogoContainer-specific" >
            <a href="${ artist.spotifyURL }" target="_blank">Spotify</a>
        </div>
        <button href="javascript://delete" id="${artistId}"  onClick='deleteFrom("artists", this.id)' class="btn btn-danger">Delete Artist</button>
        </div>
        `
        console.log(artistId)
        mainDiv.innerHTML = content;
      
            
    },
    
    specificAlbum: function(album, id) {
        var mainDiv = document.getElementById('main');
        var albumId = id;
        var content = ``; 
        var albumTracks = '';
        var tracks = album.tracks;

        for(let i = 0; i < tracks.length; i++) {
            albumTracks += `<p>${i + 1}. ${tracks[i].title}</p>`
        }

        var content =  `
        <section class="infosection">
        <div class="img-container-specific">    
            <img src= "${modifierModule.handleImage(album.coverImage)}" alt="${album.title}" class="img-fluid"/>
        </div>
        <div id="info">
            <h1>${album.title}</h1>
            <p><strong>Genre:</strong> ${album.genres}</p>
            <p><strong>Releasedate:</strong> ${album.releaseDate}</p>
            <div class="spotifyLogoContainer-specific" >
            <a href="${ album.spotifyURL }" target="_blank"> Spotify </a>
        </div>
            <button href="javascript://delete" id="${albumId}"  onClick='deleteFrom("albums", this.id)' class="btn btn-danger">Delete Album</button>
        </div>
        <div id="albumtracks">
                <h2>Tracklist</h2>
                ${albumTracks}
        </div>
        <span class "form-label">Rate Albums: </span>
            <input id="rateNameInput" type="number" name="voteRating"
            min="0" max="10" step="1" value="5">
            <input type="hidden" id="albumId" value="${albumId}"></input>
            <input onclick="rateAlbums()" type="submit">
            <div id="SuccessvoteSubmitted"></div>
        `
        mainDiv.innerHTML = content;    
    },

    specificTrack: function(track, id) {
        var mainDiv = document.getElementById('main')
        var trackId = id;
        var trackAlbum = track.album;
        var content = ``; 
    
        var content =  `
        <section class="infosection">
            <div class="img-container-specific">   
                <img src="${trackAlbum.coverImage}" alt="" class="img-fluid"/>   
            </div>
            <div id="info">
            <h1>${track.title}</h1>
            <p><strong>Genre:</strong> ${track.genres}</p>
            <p><strong>From album: </strong>${trackAlbum.title}</p>
    
            <div class="spotifyLogoContainer-specific" >
                <a href=" ${track.spotifyURL}" target="_blank"> Spotify </a>
            <button href="javascript://delete" id="${trackId}" onClick='deleteFrom("tracks", this.id)' class="btn btn-danger">Delete Track</button>
        </div>  
        <span class "form-label">Rate Tracks: </span>
            <input id="rateNameInput" type="number" name="voteRating"
            min="0" max="10" step="1" value="5">
            <input type="hidden" id="trackId" value="${trackId}"></input>
            <input onclick="rateTracks()" type="submit">
            <div id="SuccessvoteSubmitted"></div>
        </div>
        `
        mainDiv.innerHTML = content;
        },

    specificPlaylist: function(playlist, id) {
        var mainDiv = document.getElementById('main');
        var playlistId = id;
        var content = ``; 

        var content =  `
        <section class="infosection">
        <div class="img-container-specific">    
            <img src= "${modifierModule.handleImage(playlist.coverImage)}" alt="${playlist.title}" class="img-fluid"/>
        </div>
        <div id="info">
            <h1>${playlist.title}</h1>
            <p><strong>Rating:</strong> ${playlist.ratings}</p>
            <p><strong>Genre: </strong>${playlist.genres}</p>
            <p><strong>Created by: </strong>${playlist.createdBy}</p>
            <br />
            <span class "form-label">Rate playlist: </span>
            <input id="rateNameInput" type="number" name="voteRating"
            min="0" max="10" step="1" value="5">
            <input type="hidden" id="playlistId" value="${playlistId}"></input>
            <input onclick="ratePlaylists()" type="submit">
            <div id="SuccessvoteSubmitted"></div>        
        </div>
        `
        mainDiv.innerHTML = content;

        getPlaylistComments(playlistId);
        displayCommentsForm(playlistId);   
 
    },
    
    playlistComments: function(comments) {
        
    console.log(comments);
    var content = '<h2>Comments</h2>';

    for (let i = 0; i < comments.length; i++) {
        content += `
        <p><strong>${comments[i].username} skrev: </strong></p>
        <p>${comments[i].body}</p>
        `;
    }
    mainDiv.insertAdjacentHTML('beforeend', content)
    },
    
    playlistCommentsForm: function(playlistId) {
        
    var commentPlaylistIdInput = playlistId;
    var content = "<h2>Write comment:</h2>";
    
    content += `
    <div class="col-md-8">
        <div class="form-group">
            <span class="form-label"> Your Name: </span>
            <br /> <input type="text" id="commentNameInput" class="form-control"> <br />
            <span class="form-label"> Comment: </span>
            <textarea class="form-control" rows="5" id="commentInput"></textarea>
            <input type="hidden" id="commentPlaylistIdInput" value="${commentPlaylistIdInput}"></input>
            <br> <br>
            <button type="submit" class="btn-block btn-success" onclick="submitCommentToPlaylist()">Submit</button>
            <br /><br />
            <div id="successCommentSubmited"></div>
        </div>
    </div>
    `
    document.getElementById('main').insertAdjacentHTML('beforeend', content)
   
    },
    

    
    
    
    displayArtistForm: function () {
        
    /*Artist Form*/
    var submitArtistForm = `
    <center>
        <h1>Enter Artist to submit: </h1>
        <div class="col-md-8">
            <span class="form-label"> Artist name: </span>
            <br /> <input type="text" id="artistNameInput" class="form-control"> <br />
            <span class="form-label">Birth year: </span> 
            <br /> <input type="date" id="artistBirthYearInput" class="form-control"> <br />
            <span class="form-label">Birthplace: </span> 
            <br /> <input type="text" id="artistBirthplaceInput" class="form-control"> <br />
            <span class="form-label">Gender: </span> <br />
            <select name="gender" id="artistGenderInput" class="form-control">
              <option value='male'>Male</option>
              <option value='female'>Female</option>
              <option value='other'>Other</option>
                
          </select><br /> 
            <span class="form-label">Genres: </span> 
            <br /> <input type="text" id="artistGenresInput" class="form-control"> <br /> 
            <span class="form-label">Spotify URL: </span> 
            <br /> <input type="text" id="artistSpotifyURLInput" class="form-control"> <br /> 
            <span class="form-label">Coverimage URL: </span> 
            <br /> <input type="text" id="artistCoverImageInput" class="form-control"> <br />
            <br> <br>
            <button class="btn-block btn-success" onclick="submitsToApiModule.submitArtist()">Submit</button>
            <br /><br />
    <div id="successArtistSubmited"></div>
        </div>
    </center>
    `;
    document.getElementById('main').innerHTML = submitArtistForm;
},
    
    displaySongForm: function (artists) {

    var artistOption = "";

    for (let i = 0; i < artists.length; i++) {
        artistOption += `
        <option value="${artists[i]._id}">${artists[i].name}</option>
        `
    }

    var submitSongForm = `   
    <center>
    <h1>Enter Song to submit: </h1>
    <div class="col-md-8">
        <span class="form-label">Song title:  </span> 
        <br /> <input type="text" id="songTitleInput" class="form-control"> <br /> 
        <span class="form-label"> Artist: </span> 
    <br /> 
    <select id="songArtistInput" class="form-control">
    ${artistOption}
    </select><br />
        <span class="form-label">Album: </span> 
        <br />  <input type="text" id="songAlbumInput" class="form-control"> <br /> 
        <span class="form-label">Genres: </span> 
        <br /> <input type="text" id="songGenresInput" class="form-control"> <br /> 
        <br> <br>
        <button class="btn-block btn-success" onclick="submitsToApiModule.submitSong()">Submit</button>
        <br /><br />
    <div id="successSongSubmited"></div>
    </div>
    </center>
    `;
  document.getElementById('main').innerHTML = submitSongForm;
},

        displayAlbumForm: function (artists) {

    var artistOption = "";

    for (let i = 0; i < artists.length; i++) {
        artistOption += `
        <option value="${artists[i]._id}">${artists[i].name}</option>
        `
    }
    /*Album Form*/

    var submitAlbumForm = `
    <center>
        <h1>Enter Album to submit: </h1>
        <div class="col-md-8">
            <span class="form-label">Album title: </span> 
            <input type="text" id="albumNameInput" class="form-control"> 
            <span class="form-label">Artist: </span> 
            
            <select id="albumArtistInput" class="form-control">
            ${artistOption}
            </select><br />
            <span class="form-label">Release Year: </span> 
            <input type="text" id="albumReleaseDateInput" class="form-control">
            <span class="form-label">Genres: </span> 
            <input type="text" id="albumGenresInput" class="form-control"> 
            <span class="form-label">Spotify URL: </span> 
            <input type="text" id="albumSpotifyURLInput" class="form-control"> 
            <span class="form-label">Coverimage URL: </span> 
            <input type="text" id="albumCoverImageInput" class="form-control"> 
            <button class="btn-block btn-success" onclick="submitsToApiModule.submitAlbum()">Submit</button>
            <div id="successAlbumSubmited"></div>
        </div>
    </center>
    `;
  document.getElementById('main').innerHTML = submitAlbumForm;
},

        displayPlaylistForm: function () {


        /*Playlist Form*/
        var submitPlaylistForm = `
    <center>
        <h1>Enter Playlist to submit: </h1>
        <div class="col-md-8">
        <span class="form-label">Playlist title: </span> 
        <br /> <input type="text" id="playlistNameInput" class="form-control"> <br /> 
        <span class="form-label">Genres: </span> 
        <br /> <input type="text" id="playlistGenresInput" class="form-control"> <br /> 
        <span class="form-label">Created By: </span>
        <br />  <input type="text" id="playlistCreatorInput" class="form-control"> <br />  
        <span class="form-label">Coverimage URL: </span> 
        <br /> <input type="text" id="playlistCoverImageInput" class="form-control"> <br />
        <br> <br>
        <button class="btn-block btn-success" onclick="submitsToApiModule.submitPlaylist()">Submit</button>
        <br /><br />
            <div id="successPlaylistSubmited"></div>
    </div>
        </center>
`;  
  document.getElementById('main').innerHTML = submitPlaylistForm;
},
    
    
    
    searchField: function() {
        const allAlbums = new getData("albums", 1000);
        const allArtists = new getData("artists", 1000);
        const allPlaylists = new getData("playlists", 1000);
        const allTracks = new getData("tracks", 1000);
        var name = nameInput.value;     
        if(name != '') { 
            allArtists.General()
            .then( artists => {
                // vi får en rad data tillbaka, så nu måste vi filtrera
                // för att bara skicka in uppgifterna om artisten vi letar efter
                artists = artists.filter( ( element ) => {
                // Begränsa arrayen till att bara innehålla den artist vi letar efter
                return new RegExp( name, 'ig' ).test( element.genres) || new RegExp( name, 'ig' ).test( element.name) });
                displayModule.showArtists(artists);
            })
            .catch(err => console.log(err)); 

        } if (name != '') { 
        allAlbums.General()
        .then( albums => {
            albums = albums.filter( ( element ) => { return new RegExp( name, 'ig' ).test( element.title) });
        displayModule.showAlbums(albums);
        })
        .catch(err => console.log(err)); 

        } if(name != '') { 
        allTracks.General()
        .then( tracks => {
            tracks = tracks.filter( ( element ) => { return new RegExp( name, 'ig' ).test( element.title) });
            displayModule.showTracks(tracks);
        })
        .catch(err => console.log(err)); 
        } if(name != '') {

        allPlaylists.General()
        .then( playlists => {
            playlists = playlists.filter( ( element ) => { return new RegExp( name, 'ig' ).test( element.title) });
            displayModule.showPlaylists(playlists);
        })
        .catch(err => console.log(err)); 
        }
    },

}


/**************
-- CONTROLLA --
/*************/

var nameInput = document.querySelector('#name');

nameInput.addEventListener('input', function (event) { 
    displayModule.searchField();
});

    //CLICK EVENTS FOR VARIOUS BUTTONS:

const buttonsModule = (function()  {
    
const btnSubmit = document.getElementById('btnSubmit');
const btnSubmitArtist = document.getElementById('btnSubmitArtist');
const btnSubmitPlaylist = document.getElementById('btnSubmitPlaylist');
const btnSubmitSong = document.getElementById('btnSubmitSong');
const btnSubmitAlbum = document.getElementById('btnSubmitAlbum');
const submitPopUp = document.getElementById('myModal');
const btnClose = document.getElementsByClassName("btnClose")[0];
const mainDiv = document.getElementById('main');
const artistDropdown = document.getElementById('artistDropdown');
const siteLogo = document.getElementById('siteLogo')
const header = document.getElementById('theHeader');
const nav = document.getElementById('nav');

return {
    
    EventListeners: function(artists){
        
btnSubmit.addEventListener('click', function (event) {
    console.log('Submit Clicked!')
    submitPopUp.style.display = "block";

}); 

siteLogo.addEventListener('click', function (event) {
    //event.preventDefault();
    //toggleHeader();
});

btnClose.addEventListener('click', function (event) {
    submitPopUp.style.display = "none";
});

btnSubmitArtist.addEventListener('click', function (event) {
    displayModule.displayArtistForm();
});

    btnSubmitSong.addEventListener('click', function (event) {
    displayModule.displaySongForm(artists);
    });

    btnSubmitAlbum.addEventListener('click', function (event) {
    displayModule.displayAlbumForm(artists);

    });

btnSubmitPlaylist.addEventListener('click', function (event) {
    displayModule.displayPlaylistForm();
});
    
    }

};

    
    
    
}());

const modifierModule = {

    moreAlbumInfo: function(id) {
        modifierModule.toggleHeader();
        fetchModule.getSpecificAlbum(id);
    },

    moreArtistInfo: function(id) {
        modifierModule.toggleHeader();
        fetchModule.getSpecificArtist(id);
    },

    morePlaylistInfo: function(id) {
        modifierModule.toggleHeader();
        fetchModule.getSpecificPlaylist(id);
    },

    moreTrackInfo: function(id) {
        modifierModule.toggleHeader();
        fetchModule.getSpecificTrack(id);
    },

    toggleHeader: function() {
        const header = document.getElementById('theHeader');
        const nav = document.getElementById('nav');
        header.classList.toggle('header-img-animate');
        nav.classList.toggle('hide');
    },

    countRating: function(rating) {
        var quantity = rating.length; 
        var ratingTotal = 0; 
        
        for (var i = 0; i < quantity; i++) {
            ratingTotal += rating[i];
        }
        theRating = ratingTotal / quantity;

        if (isNaN(theRating)) {
            return "Not Rated Yet!"
        } else {
            var theRatingRounded = Math.round( theRating * 10) / 10;
            return theRatingRounded; 
        }
    },

    checkIfRated: function(rating) {
        if(rating === "Not Rated Yet!" || rating == null ) {
            return 0;
        }
        else {
            return rating
        }
    },

    handleImage: function(theImage) {
    if (theImage == null || theImage == undefined ) {
        return "images/male.png"
        } else {
        return theImage;
      }
    },

    handleSpotify: function(spotifyLink) {
        if (spotifyLink == null || spotifyLink == undefined) {
            return ``;

        } else {
            return `we on spotify!`; 
        }
    }
}

fetchModule.getArtists();
fetchModule.getAlbums();
fetchModule.getPlaylists();
fetchModule.getTracks();

buttonsModule.EventListeners();

//fetch and console.log artists





//fetch and console.log specific artist based on id-input







