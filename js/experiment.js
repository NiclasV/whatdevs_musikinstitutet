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

//Try to do a fetch based on a new getData class called getArtists with the limit of 1000 results
const getArtists = new getData('artists', 1000);
const getArtist = new getData('artists');
const getAlbums = new getData('albums', 1000);
const getAlbum = new getData('albums');

//fetch and console.log artists
getArtists.General()
.then((artists) => {
    //console logging the result
    console.group("This is the artists fetch");
    console.log(artists);
    console.groupEnd();
    //display.latestArtists(artists);
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

//fetch and console.log artists
getAlbums.General()
.then((albums) => {
    //console logging the result
    console.group("This is the albums fetch")
    console.log(albums);
    console.groupEnd();
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


/**************
---- VIEW ----
/*************/

/**************
-- CONTROLLA --
/*************/