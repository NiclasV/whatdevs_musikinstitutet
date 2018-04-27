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

/************** FETCHES ****************/

//Do fetchs with new getData class with the limit of 12 results for the startpage
const getArtists = new getData('artists', 12);
const getPlaylists = new getData('playlists', 12);
const getAlbums = new getData('albums', 12);
const getTracks = new getData('tracks', 12);

const allArtists = new getData('artists', 1000);
const allPlaylists = new getData('playlists', 1000);
const allAlbums = new getData('albums', 1000);
const allTracks = new getData('tracks', 1000);

const getAlbum = new getData('albums');
const getArtist = new getData('artists');


//fetch and console.log artists
getArtists.General()
.then((artists) => {
    //console logging the result
    console.group("This is the artists fetch");
    console.log(artists);
    console.groupEnd();
    displayModule.showArtists(artists);
})
.catch((error) => {
    console.log(error);
})

//fetch and console.log artists
getAlbums.General()
.then((albums) => {
    displayModule.showAlbums(albums);
})
.catch((error) => {
    console.log(error);
})

getPlaylists.General()
.then((playlists) => {
    displayModule.showPlaylists(playlists)
})
.catch((error) => {
    console.log(error);
})

getTracks.General()
.then((tracks) => {
    displayModule.showTracks(tracks)
})
.catch((error) => {
    console.log(error);
})

//fetch and console.log specific artist based on id-input
getAlbum.Specific(id)
.then((album) => {
    displayModule.specificAlbum(album, id)
})
.catch((error) => {
    console.log(error);
})

//fetch and console.log specific artist based on id-input
getArtist.Specific(id)
.then((artist) => {
    displayModule.specificArtist(artist, id)

})
.catch((error) => {
    console.log(error);
})

getPlaylists.Specific(id)
.then((playlist) => {
    displayModule.specificPlaylist(playlist, id)

})
.catch((error) => {
    console.log(error);
})

getTracks.Specific(id)
.then((track) => {
    displayModule.specificTrack(track, id)

})
.catch((error) => {
    console.log(error);
})

/**************
---- VIEW ----
/*************/

const modifierModule = {

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
        console.log("gaga its null!a a a" + theImage)
        return "images/male.png"
        } else {
        return theImage;
      }
    }
}


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
                <a id="${artist._id}" href="javascript://artistInfo" onClick="moreArtistInfo(this.id)"><h2>${artist.name}</h2></a>
                      
                <p>${ artist.genres }</p>
                ${artist.spotifyURL}
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
            <a id="${playlist._id}" href="javascript://artistInfo" onClick="morePlaylistInfo(this.id)"><h2>${playlist.title}</h2></a>
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
            <h2>${i++}. <a id="${track._id}" href="javascript://trackinfo" onClick='moreTrackInfo(this.id)'>${track.title}</a></h2>
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
                    <a id="${album._id}" href="javascript://albumInfo" onClick='moreAlbumInfo(this.id)'><h2>${album.title}</h2></a>
                </div>
            `;
        }
        albumsList.innerHTML = displayAlbumsHTML;

    },
    
    specificArtist: function(artist, id) {
        
    var artistId = id;
    var content = ``; 

    var content =  `
    <section class="infosection">
    <div class="img-container-specific">    
        <img src= "${handleImage(artist.coverImage)}" alt="${artist.name}" class="img-fluid"/>
        
    </div>
    <div id="info">
    <h1>${artist.name}</h1>
    <p><strong>Genre:</strong> ${artist.genres}</p>
    <p><strong>Birthplace:</strong> ${artist.countryBorn}</p>
    <p><strong>Birth year:</strong> ${artist.born}</p>
    <div class="spotifyLogoContainer-specific" >
        <a href="${ artist.spotifyURL }" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg"  version="1.1" viewBox="0 0 559 168"> 
                <path id="spotifyLogo" fill="#1ED760" d="m83.996 0.277c-46.249 0-83.743 37.493-83.743 83.742 0 46.251 37.494 83.741 83.743 83.741 
                46.254 0 83.744-37.49 83.744-83.741 0-46.246-37.49-83.738-83.745-83.738l0.001-0.004zm38.404 120.78c-1.5 2.46-4.72 
                3.24-7.18 1.73-19.662-12.01-44.414-14.73-73.564-8.07-2.809 0.64-5.609-1.12-6.249-3.93-0.643-2.81 1.11-5.61 3.926-6.25 
                31.9-7.288 59.263-4.15 81.337 9.34 2.46 1.51 3.24 4.72 1.73 7.18zm10.25-22.802c-1.89 3.072-5.91 4.042-8.98 2.152-22.51-13.836-56.823-17.843-83.448-9.761-3.453 
                1.043-7.1-0.903-8.148-4.35-1.04-3.453 0.907-7.093 4.354-8.143 30.413-9.228 68.222-4.758 94.072 11.127 3.07 1.89 4.04 5.91 2.15 
                8.976v-0.001zm0.88-23.744c-26.99-16.031-71.52-17.505-97.289-9.684-4.138 1.255-8.514-1.081-9.768-5.219-1.254-4.14 1.08-8.513 5.221-9.771 
                29.581-8.98 78.756-7.245 109.83 11.202 3.73 2.209 4.95 7.016 2.74 10.733-2.2 3.722-7.02 4.949-10.73 2.739zm94.56 3.072c-14.46-3.448-17.03-5.868-17.03-10.953 
                0-4.804 4.52-8.037 11.25-8.037 6.52 0 12.98 2.455 19.76 7.509 0.2 0.153 0.46 0.214 0.71 0.174 0.26-0.038 0.48-0.177 
                0.63-0.386l7.06-9.952c0.29-0.41 0.21-0.975-0.18-1.288-8.07-6.473-17.15-9.62-27.77-9.62-15.61 0-26.52 9.369-26.52 22.774 0 
                14.375 9.41 19.465 25.67 23.394 13.83 3.187 16.17 5.857 16.17 10.629 0 5.29-4.72 8.58-12.32 8.58-8.44 0-15.33-2.85-23.03-9.51-0.19-0.17-0.45-0.24-0.69-0.23-0.26 
                0.02-0.49 0.14-0.65 0.33l-7.92 9.42c-0.33 0.4-0.29 0.98 0.09 1.32 8.96 8 19.98 12.22 31.88 12.22 16.82 0 27.69-9.19 
                27.69-23.42 0.03-12.007-7.16-18.657-24.77-22.941l-0.03-0.013zm62.86-14.26c-7.29 0-13.27 2.872-18.21 8.757v-6.624c0-0.523-0.42-0.949-0.94-0.949h-12.95c-0.52 0-0.94 
                0.426-0.94 0.949v73.601c0 0.52 0.42 0.95 0.94 0.95h12.95c0.52 0 0.94-0.43 0.94-0.95v-23.23c4.94 5.53 10.92 8.24 18.21 8.24 13.55 0 27.27-10.43 
                27.27-30.369 0.02-19.943-13.7-30.376-27.26-30.376l-0.01 0.001zm12.21 30.375c0 10.149-6.25 17.239-15.21 17.239-8.85 0-15.53-7.41-15.53-17.239 
                0-9.83 6.68-17.238 15.53-17.238 8.81-0.001 15.21 7.247 15.21 17.237v0.001zm50.21-30.375c-17.45 0-31.12 13.436-31.12 30.592 0 16.972 13.58 30.262 
                30.91 30.262 17.51 0 31.22-13.39 31.22-30.479 0-17.031-13.62-30.373-31.01-30.373v-0.002zm0 47.714c-9.28 0-16.28-7.46-16.28-17.344 0-9.929 6.76-17.134 
                16.07-17.134 9.34 0 16.38 7.457 16.38 17.351 0 9.927-6.8 17.127-16.17 17.127zm68.27-46.53h-14.25v-14.566c0-0.522-0.42-0.948-0.94-0.948h-12.95c-0.52 0-0.95 
                0.426-0.95 0.948v14.566h-6.22c-0.52 0-0.94 0.426-0.94 0.949v11.127c0 0.522 0.42 0.949 0.94 0.949h6.22v28.795c0 11.63 5.79 17.53 17.22 17.53 4.64 0 8.49-0.96 
                12.12-3.02 0.3-0.16 0.48-0.48 0.48-0.82v-10.6c0-0.32-0.17-0.63-0.45-0.8-0.28-0.18-0.63-0.19-0.92-0.04-2.49 1.25-4.9 1.83-7.6 1.83-4.15 0-6.01-1.89-6.01-6.11v-26.76h14.25c0.52 
                0 0.94-0.426 0.94-0.949v-11.126c0.02-0.523-0.4-0.949-0.93-0.949l-0.01-0.006zm49.64 0.057v-1.789c0-5.263 2.02-7.61 6.54-7.61 2.7 0 4.87 0.536 7.3 1.346 0.3 0.094 0.61 0.047 
                0.85-0.132 0.25-0.179 0.39-0.466 0.39-0.77v-10.91c0-0.417-0.26-0.786-0.67-0.909-2.56-0.763-5.84-1.546-10.76-1.546-11.95 0-18.28 6.734-18.28 19.467v2.74h-6.22c-0.52 0-0.95 
                0.426-0.95 0.948v11.184c0 0.522 0.43 0.949 0.95 0.949h6.22v44.405c0 0.53 0.43 0.95 0.95 0.95h12.94c0.53 0 0.95-0.42 0.95-0.95v-44.402h12.09l18.52 44.402c-2.1 4.66-4.17 
                5.59-6.99 5.59-2.28 0-4.69-0.68-7.14-2.03-0.23-0.12-0.51-0.14-0.75-0.07-0.25 0.09-0.46 0.27-0.56 0.51l-4.39 9.63c-0.21 0.46-0.03 0.99 0.41 1.23 4.58 2.48 8.71 3.54 13.82 
                3.54 9.56 0 14.85-4.46 19.5-16.44l22.46-58.037c0.12-0.292 0.08-0.622-0.1-0.881-0.17-0.257-0.46-0.412-0.77-0.412h-13.48c-0.41 0-0.77 0.257-0.9 0.636l-13.81 
                39.434-15.12-39.46c-0.14-0.367-0.49-0.61-0.88-0.61h-22.12v-0.003zm-28.78-0.057h-12.95c-0.52 0-0.95 0.426-0.95 0.949v56.481c0 0.53 0.43 0.95 0.95 0.95h12.95c0.52 0 
                0.95-0.42 0.95-0.95v-56.477c0-0.523-0.42-0.949-0.95-0.949v-0.004zm-6.4-25.719c-5.13 0-9.29 4.152-9.29 9.281 0 5.132 4.16 9.289 9.29 9.289s9.28-4.157 
                9.28-9.289c0-5.128-4.16-9.281-9.28-9.281zm113.42 43.88c-5.12 0-9.11-4.115-9.11-9.112s4.04-9.159 9.16-9.159 9.11 4.114 9.11 9.107c0 4.997-4.04 9.164-9.16 
                9.164zm0.05-17.365c-4.67 0-8.2 3.71-8.2 8.253 0 4.541 3.51 8.201 8.15 8.201 4.67 0 8.2-3.707 8.2-8.253 0-4.541-3.51-8.201-8.15-8.201zm2.02 9.138l2.58 
                3.608h-2.18l-2.32-3.31h-1.99v3.31h-1.82v-9.564h4.26c2.23 0 3.69 1.137 3.69 3.051 0.01 1.568-0.9 2.526-2.21 2.905h-0.01zm-1.54-4.315h-2.37v3.025h2.37c1.18 
                0 1.89-0.579 1.89-1.514 0-0.984-0.71-1.511-1.89-1.511z"/>
            </svg>
        </a>
    </div>
    <button href="javascript://delete" id="${artistId}"  onClick='deleteFrom("artists", this.id)' class="btn btn-danger">Delete Artist</button>
    </div>
    `
    console.log(artistId)
    mainDiv.innerHTML = content;
      
            
    },
    
    specificAlbum: function(album, id) {
        
        var albumId = id;
        var content = ``; 
        var albumTracks = '';

        for(let i = 0; i < tracks.length; i++) {
            albumTracks += `<p>${i + 1}. ${tracks[i].title}</p>`
            console.log(tracks[i].title)
        }

        var content =  `
        <section class="infosection">
        <div class="img-container-specific">    
            <img src= "${handleImage(album.coverImage)}" alt="${album.title}" class="img-fluid"/>

        </div>
        <div id="info">
            <h1>${album.title}</h1>
            <p><strong>Genre:</strong> ${album.genres}</p>
            <p><strong>Releasedate:</strong> ${album.releaseDate}</p>
            <div class="spotifyLogoContainer-specific" >
            <a href="${ album.spotifyURL }" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg"  version="1.1" viewBox="0 0 559 168"> 
                    <path id="spotifyLogo" fill="#1ED760" d="m83.996 0.277c-46.249 0-83.743 37.493-83.743 83.742 0 46.251 37.494 83.741 83.743 83.741 
                    46.254 0 83.744-37.49 83.744-83.741 0-46.246-37.49-83.738-83.745-83.738l0.001-0.004zm38.404 120.78c-1.5 2.46-4.72 
                    3.24-7.18 1.73-19.662-12.01-44.414-14.73-73.564-8.07-2.809 0.64-5.609-1.12-6.249-3.93-0.643-2.81 1.11-5.61 3.926-6.25 
                    31.9-7.288 59.263-4.15 81.337 9.34 2.46 1.51 3.24 4.72 1.73 7.18zm10.25-22.802c-1.89 3.072-5.91 4.042-8.98 2.152-22.51-13.836-56.823-17.843-83.448-9.761-3.453 
                    1.043-7.1-0.903-8.148-4.35-1.04-3.453 0.907-7.093 4.354-8.143 30.413-9.228 68.222-4.758 94.072 11.127 3.07 1.89 4.04 5.91 2.15 
                    8.976v-0.001zm0.88-23.744c-26.99-16.031-71.52-17.505-97.289-9.684-4.138 1.255-8.514-1.081-9.768-5.219-1.254-4.14 1.08-8.513 5.221-9.771 
                    29.581-8.98 78.756-7.245 109.83 11.202 3.73 2.209 4.95 7.016 2.74 10.733-2.2 3.722-7.02 4.949-10.73 2.739zm94.56 3.072c-14.46-3.448-17.03-5.868-17.03-10.953 
                    0-4.804 4.52-8.037 11.25-8.037 6.52 0 12.98 2.455 19.76 7.509 0.2 0.153 0.46 0.214 0.71 0.174 0.26-0.038 0.48-0.177 
                    0.63-0.386l7.06-9.952c0.29-0.41 0.21-0.975-0.18-1.288-8.07-6.473-17.15-9.62-27.77-9.62-15.61 0-26.52 9.369-26.52 22.774 0 
                    14.375 9.41 19.465 25.67 23.394 13.83 3.187 16.17 5.857 16.17 10.629 0 5.29-4.72 8.58-12.32 8.58-8.44 0-15.33-2.85-23.03-9.51-0.19-0.17-0.45-0.24-0.69-0.23-0.26 
                    0.02-0.49 0.14-0.65 0.33l-7.92 9.42c-0.33 0.4-0.29 0.98 0.09 1.32 8.96 8 19.98 12.22 31.88 12.22 16.82 0 27.69-9.19 
                    27.69-23.42 0.03-12.007-7.16-18.657-24.77-22.941l-0.03-0.013zm62.86-14.26c-7.29 0-13.27 2.872-18.21 8.757v-6.624c0-0.523-0.42-0.949-0.94-0.949h-12.95c-0.52 0-0.94 
                    0.426-0.94 0.949v73.601c0 0.52 0.42 0.95 0.94 0.95h12.95c0.52 0 0.94-0.43 0.94-0.95v-23.23c4.94 5.53 10.92 8.24 18.21 8.24 13.55 0 27.27-10.43 
                    27.27-30.369 0.02-19.943-13.7-30.376-27.26-30.376l-0.01 0.001zm12.21 30.375c0 10.149-6.25 17.239-15.21 17.239-8.85 0-15.53-7.41-15.53-17.239 
                    0-9.83 6.68-17.238 15.53-17.238 8.81-0.001 15.21 7.247 15.21 17.237v0.001zm50.21-30.375c-17.45 0-31.12 13.436-31.12 30.592 0 16.972 13.58 30.262 
                    30.91 30.262 17.51 0 31.22-13.39 31.22-30.479 0-17.031-13.62-30.373-31.01-30.373v-0.002zm0 47.714c-9.28 0-16.28-7.46-16.28-17.344 0-9.929 6.76-17.134 
                    16.07-17.134 9.34 0 16.38 7.457 16.38 17.351 0 9.927-6.8 17.127-16.17 17.127zm68.27-46.53h-14.25v-14.566c0-0.522-0.42-0.948-0.94-0.948h-12.95c-0.52 0-0.95 
                    0.426-0.95 0.948v14.566h-6.22c-0.52 0-0.94 0.426-0.94 0.949v11.127c0 0.522 0.42 0.949 0.94 0.949h6.22v28.795c0 11.63 5.79 17.53 17.22 17.53 4.64 0 8.49-0.96 
                    12.12-3.02 0.3-0.16 0.48-0.48 0.48-0.82v-10.6c0-0.32-0.17-0.63-0.45-0.8-0.28-0.18-0.63-0.19-0.92-0.04-2.49 1.25-4.9 1.83-7.6 1.83-4.15 0-6.01-1.89-6.01-6.11v-26.76h14.25c0.52 
                    0 0.94-0.426 0.94-0.949v-11.126c0.02-0.523-0.4-0.949-0.93-0.949l-0.01-0.006zm49.64 0.057v-1.789c0-5.263 2.02-7.61 6.54-7.61 2.7 0 4.87 0.536 7.3 1.346 0.3 0.094 0.61 0.047 
                    0.85-0.132 0.25-0.179 0.39-0.466 0.39-0.77v-10.91c0-0.417-0.26-0.786-0.67-0.909-2.56-0.763-5.84-1.546-10.76-1.546-11.95 0-18.28 6.734-18.28 19.467v2.74h-6.22c-0.52 0-0.95 
                    0.426-0.95 0.948v11.184c0 0.522 0.43 0.949 0.95 0.949h6.22v44.405c0 0.53 0.43 0.95 0.95 0.95h12.94c0.53 0 0.95-0.42 0.95-0.95v-44.402h12.09l18.52 44.402c-2.1 4.66-4.17 
                    5.59-6.99 5.59-2.28 0-4.69-0.68-7.14-2.03-0.23-0.12-0.51-0.14-0.75-0.07-0.25 0.09-0.46 0.27-0.56 0.51l-4.39 9.63c-0.21 0.46-0.03 0.99 0.41 1.23 4.58 2.48 8.71 3.54 13.82 
                    3.54 9.56 0 14.85-4.46 19.5-16.44l22.46-58.037c0.12-0.292 0.08-0.622-0.1-0.881-0.17-0.257-0.46-0.412-0.77-0.412h-13.48c-0.41 0-0.77 0.257-0.9 0.636l-13.81 
                    39.434-15.12-39.46c-0.14-0.367-0.49-0.61-0.88-0.61h-22.12v-0.003zm-28.78-0.057h-12.95c-0.52 0-0.95 0.426-0.95 0.949v56.481c0 0.53 0.43 0.95 0.95 0.95h12.95c0.52 0 
                    0.95-0.42 0.95-0.95v-56.477c0-0.523-0.42-0.949-0.95-0.949v-0.004zm-6.4-25.719c-5.13 0-9.29 4.152-9.29 9.281 0 5.132 4.16 9.289 9.29 9.289s9.28-4.157 
                    9.28-9.289c0-5.128-4.16-9.281-9.28-9.281zm113.42 43.88c-5.12 0-9.11-4.115-9.11-9.112s4.04-9.159 9.16-9.159 9.11 4.114 9.11 9.107c0 4.997-4.04 9.164-9.16 
                    9.164zm0.05-17.365c-4.67 0-8.2 3.71-8.2 8.253 0 4.541 3.51 8.201 8.15 8.201 4.67 0 8.2-3.707 8.2-8.253 0-4.541-3.51-8.201-8.15-8.201zm2.02 9.138l2.58 
                    3.608h-2.18l-2.32-3.31h-1.99v3.31h-1.82v-9.564h4.26c2.23 0 3.69 1.137 3.69 3.051 0.01 1.568-0.9 2.526-2.21 2.905h-0.01zm-1.54-4.315h-2.37v3.025h2.37c1.18 
                    0 1.89-0.579 1.89-1.514 0-0.984-0.71-1.511-1.89-1.511z"/>
                </svg>
            </a>
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
    
    specificPlaylist: function(playlist, id) {

    var playlistId = id;
    var content = ``; 

    var content =  `
    <section class="infosection">
    <div class="img-container-specific">    
        <img src= "${handleImage(playlist.coverImage)}" alt="${playlist.title}" class="img-fluid"/>
        
    </div>
    <div id="info">
    <h1>${playlist.title}</h1>
    <p><strong>Rating:</strong> ${countRating(playlist.ratings)}</p>
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
    
    specificTrack: function(data, id) {
        
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
            <a href=" ${track.spotifyURL}" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg"  version="1.1" viewBox="0 0 559 168"> 
                    <path id="spotifyLogo" fill="#1ED760" d="m83.996 0.277c-46.249 0-83.743 37.493-83.743 83.742 0 46.251 37.494 83.741 83.743 83.741 
                    46.254 0 83.744-37.49 83.744-83.741 0-46.246-37.49-83.738-83.745-83.738l0.001-0.004zm38.404 120.78c-1.5 2.46-4.72 
                    3.24-7.18 1.73-19.662-12.01-44.414-14.73-73.564-8.07-2.809 0.64-5.609-1.12-6.249-3.93-0.643-2.81 1.11-5.61 3.926-6.25 
                    31.9-7.288 59.263-4.15 81.337 9.34 2.46 1.51 3.24 4.72 1.73 7.18zm10.25-22.802c-1.89 3.072-5.91 4.042-8.98 2.152-22.51-13.836-56.823-17.843-83.448-9.761-3.453 
                    1.043-7.1-0.903-8.148-4.35-1.04-3.453 0.907-7.093 4.354-8.143 30.413-9.228 68.222-4.758 94.072 11.127 3.07 1.89 4.04 5.91 2.15 
                    8.976v-0.001zm0.88-23.744c-26.99-16.031-71.52-17.505-97.289-9.684-4.138 1.255-8.514-1.081-9.768-5.219-1.254-4.14 1.08-8.513 5.221-9.771 
                    29.581-8.98 78.756-7.245 109.83 11.202 3.73 2.209 4.95 7.016 2.74 10.733-2.2 3.722-7.02 4.949-10.73 2.739zm94.56 3.072c-14.46-3.448-17.03-5.868-17.03-10.953 
                    0-4.804 4.52-8.037 11.25-8.037 6.52 0 12.98 2.455 19.76 7.509 0.2 0.153 0.46 0.214 0.71 0.174 0.26-0.038 0.48-0.177 
                    0.63-0.386l7.06-9.952c0.29-0.41 0.21-0.975-0.18-1.288-8.07-6.473-17.15-9.62-27.77-9.62-15.61 0-26.52 9.369-26.52 22.774 0 
                    14.375 9.41 19.465 25.67 23.394 13.83 3.187 16.17 5.857 16.17 10.629 0 5.29-4.72 8.58-12.32 8.58-8.44 0-15.33-2.85-23.03-9.51-0.19-0.17-0.45-0.24-0.69-0.23-0.26 
                    0.02-0.49 0.14-0.65 0.33l-7.92 9.42c-0.33 0.4-0.29 0.98 0.09 1.32 8.96 8 19.98 12.22 31.88 12.22 16.82 0 27.69-9.19 
                    27.69-23.42 0.03-12.007-7.16-18.657-24.77-22.941l-0.03-0.013zm62.86-14.26c-7.29 0-13.27 2.872-18.21 8.757v-6.624c0-0.523-0.42-0.949-0.94-0.949h-12.95c-0.52 0-0.94 
                    0.426-0.94 0.949v73.601c0 0.52 0.42 0.95 0.94 0.95h12.95c0.52 0 0.94-0.43 0.94-0.95v-23.23c4.94 5.53 10.92 8.24 18.21 8.24 13.55 0 27.27-10.43 
                    27.27-30.369 0.02-19.943-13.7-30.376-27.26-30.376l-0.01 0.001zm12.21 30.375c0 10.149-6.25 17.239-15.21 17.239-8.85 0-15.53-7.41-15.53-17.239 
                    0-9.83 6.68-17.238 15.53-17.238 8.81-0.001 15.21 7.247 15.21 17.237v0.001zm50.21-30.375c-17.45 0-31.12 13.436-31.12 30.592 0 16.972 13.58 30.262 
                    30.91 30.262 17.51 0 31.22-13.39 31.22-30.479 0-17.031-13.62-30.373-31.01-30.373v-0.002zm0 47.714c-9.28 0-16.28-7.46-16.28-17.344 0-9.929 6.76-17.134 
                    16.07-17.134 9.34 0 16.38 7.457 16.38 17.351 0 9.927-6.8 17.127-16.17 17.127zm68.27-46.53h-14.25v-14.566c0-0.522-0.42-0.948-0.94-0.948h-12.95c-0.52 0-0.95 
                    0.426-0.95 0.948v14.566h-6.22c-0.52 0-0.94 0.426-0.94 0.949v11.127c0 0.522 0.42 0.949 0.94 0.949h6.22v28.795c0 11.63 5.79 17.53 17.22 17.53 4.64 0 8.49-0.96 
                    12.12-3.02 0.3-0.16 0.48-0.48 0.48-0.82v-10.6c0-0.32-0.17-0.63-0.45-0.8-0.28-0.18-0.63-0.19-0.92-0.04-2.49 1.25-4.9 1.83-7.6 1.83-4.15 0-6.01-1.89-6.01-6.11v-26.76h14.25c0.52 
                    0 0.94-0.426 0.94-0.949v-11.126c0.02-0.523-0.4-0.949-0.93-0.949l-0.01-0.006zm49.64 0.057v-1.789c0-5.263 2.02-7.61 6.54-7.61 2.7 0 4.87 0.536 7.3 1.346 0.3 0.094 0.61 0.047 
                    0.85-0.132 0.25-0.179 0.39-0.466 0.39-0.77v-10.91c0-0.417-0.26-0.786-0.67-0.909-2.56-0.763-5.84-1.546-10.76-1.546-11.95 0-18.28 6.734-18.28 19.467v2.74h-6.22c-0.52 0-0.95 
                    0.426-0.95 0.948v11.184c0 0.522 0.43 0.949 0.95 0.949h6.22v44.405c0 0.53 0.43 0.95 0.95 0.95h12.94c0.53 0 0.95-0.42 0.95-0.95v-44.402h12.09l18.52 44.402c-2.1 4.66-4.17 
                    5.59-6.99 5.59-2.28 0-4.69-0.68-7.14-2.03-0.23-0.12-0.51-0.14-0.75-0.07-0.25 0.09-0.46 0.27-0.56 0.51l-4.39 9.63c-0.21 0.46-0.03 0.99 0.41 1.23 4.58 2.48 8.71 3.54 13.82 
                    3.54 9.56 0 14.85-4.46 19.5-16.44l22.46-58.037c0.12-0.292 0.08-0.622-0.1-0.881-0.17-0.257-0.46-0.412-0.77-0.412h-13.48c-0.41 0-0.77 0.257-0.9 0.636l-13.81 
                    39.434-15.12-39.46c-0.14-0.367-0.49-0.61-0.88-0.61h-22.12v-0.003zm-28.78-0.057h-12.95c-0.52 0-0.95 0.426-0.95 0.949v56.481c0 0.53 0.43 0.95 0.95 0.95h12.95c0.52 0 
                    0.95-0.42 0.95-0.95v-56.477c0-0.523-0.42-0.949-0.95-0.949v-0.004zm-6.4-25.719c-5.13 0-9.29 4.152-9.29 9.281 0 5.132 4.16 9.289 9.29 9.289s9.28-4.157 
                    9.28-9.289c0-5.128-4.16-9.281-9.28-9.281zm113.42 43.88c-5.12 0-9.11-4.115-9.11-9.112s4.04-9.159 9.16-9.159 9.11 4.114 9.11 9.107c0 4.997-4.04 9.164-9.16 
                    9.164zm0.05-17.365c-4.67 0-8.2 3.71-8.2 8.253 0 4.541 3.51 8.201 8.15 8.201 4.67 0 8.2-3.707 8.2-8.253 0-4.541-3.51-8.201-8.15-8.201zm2.02 9.138l2.58 
                    3.608h-2.18l-2.32-3.31h-1.99v3.31h-1.82v-9.564h4.26c2.23 0 3.69 1.137 3.69 3.051 0.01 1.568-0.9 2.526-2.21 2.905h-0.01zm-1.54-4.315h-2.37v3.025h2.37c1.18 
                    0 1.89-0.579 1.89-1.514 0-0.984-0.71-1.511-1.89-1.511z"/>
                </svg>
            </a>
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
    
    console.log(trackId)
    mainDiv.innerHTML = content;
    },
    
        searchField: function(allAlbums, allArtists, allPlaylists, allTracks) {
        var name = nameInput.value;     
        if(name != '') { 
        allArtists.General()
        .then( artists => {
            // vi får en rad data tillbaka, så nu måste vi filtrera
            // för att bara skicka in uppgifterna om artisten vi letar efter
            artists = artists.filter( ( element ) => {
            // Begränsa arrayen till att bara innehålla den artist vi letar efter
            return new RegExp( name, 'ig' ).test( element.genres) ||
            new RegExp( name, 'ig' ).test( element.name)
        });
        displayModule.showArtists(artists);
        })
        .catch(err => console.log(err)); 
        }
        if (name != '') { //2
        allAlbums.General()
        .then( albums => {
            albums = albums.filter( ( element ) => {
            return new RegExp( name, 'ig' ).test( element.title)
        });
        displayModule.showAlbums(albums);
        })
        .catch(err => console.log(err)); 
        }
        if(name != '') { 
        allTracks.General()
        .then( tracks => {
            tracks = tracks.filter( ( element ) => {
            return new RegExp( name, 'ig' ).test( element.title)
        });
        displayModule.showTracks(tracks);
        })
        .catch(err => console.log(err)); 
        }
        if(name != '') {
        allPlaylists.General()
        .then( playlists => {
            playlists = playlists.filter( ( element ) => {
            return new RegExp( name, 'ig' ).test( element.title)
        });
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
    displayModule.searchField(allAlbums, allArtists, allPlaylists, allTracks);
});