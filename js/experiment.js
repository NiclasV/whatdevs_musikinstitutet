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
        return fetch('https://folksa.ga/api/artists?key=flat_eric',
        {
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
        
    }
}

/************** FETCHES ****************/

//Do fetchs with new getData class with the limit of 12 results for the startpage
const getArtists = new getData('artists', 12);
const getPlaylists = new getData('playlists', 12);
const getAlbums = new getData('albums', 12);
const getTracks = new getData('tracks', 12);
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
getAlbum.Specific("5ad5a0120100d075776b939d")
.then((album) => {
    //console logging the result
    console.group("This is an album fetch");
    console.log(album);
    console.groupEnd();
})
.catch((error) => {
    console.log(error);
})

//fetch and console.log specific artist based on id-input
getArtist.Specific("5accb0397e57bb56f1181cb8")
.then((artist) => {
    //console logging the result
    console.group("This is a artist fetch");
    console.log(artist);
    console.groupEnd();
})
.catch((error) => {
    console.log(error);
})

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
                 <img src= "${artist.coverImage}" alt="${artist.name}" class="img-fluid"/>
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
        for (let playlist of  playlists) {
            let playlistRating = playlist.ratings
    
            displayPlaylistsHTML = displayPlaylistsHTML + `
            <div class="infoCard">
            <div class="img-container">    
            <img src= "${playlist.coverImage}" alt="${playlist.title}" class="img-fluid"/>
            </div>
            <a id="${playlist._id}" href="javascript://artistInfo" onClick="morePlaylistInfo(this.id)"><h4>${playlist.title}</h2></a>
            <p><strong>Rating:</strong> ${playlistRating}</p>
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
                        <img src= "${album.coverImage}" alt="${album.title}" class="img-fluid"/>
                    </div>
                    <a id="${album._id}" href="javascript://albumInfo" onClick='moreAlbumInfo(this.id)'><h2>${album.title}</h2></a>
                </div>
            `;
        }
        albumsList.innerHTML = displayAlbumsHTML;

    },

}




/**************
-- CONTROLLA --
/*************/