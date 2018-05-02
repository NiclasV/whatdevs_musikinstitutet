
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
            let playlistRating = playlist.ratings;
            let votes = playlistRating.length;

            displayPlaylistsHTML = displayPlaylistsHTML + `
            <div class="infoCard">
            <div class="img-container">    
            <img src="${modifierModule.handleImage(playlist.coverImage)}" alt="${playlist.title}" class="img-fluid"/>
            </div>
            <a id="${playlist._id}" href="javascript://artistInfo" onClick="modifierModule.morePlaylistInfo(this.id)"><h2>${playlist.title}</h2></a>
            <p><strong>Rating:</strong> ${modifierModule.countRating(playlistRating)} (${votes} votes)</p>
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
            ${modifierModule.handleSpotify(artist.spotifyURL)}
        </div>
        <button href="javascript://delete" id="${artistId}"  onClick='deleteFrom("artists", this.id)' class="btn btn-danger">Delete Artist</button>
        </div>
        `
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
            <p><strong>Rating:</strong> ${modifierModule.countRating(album.ratings)}
            <p><strong>Genre:</strong> ${album.genres}</p>
            <p><strong>Releasedate:</strong> ${album.releaseDate}</p>
            ${ modifierModule.handleSpotify(album.spotifyURL)}
            <button href="javascript://delete" id="${albumId}"  onClick='deleteFrom("albums", this.id)' class="btn btn-danger">Delete Album</button><br>
            <span class "form-label">Rate Albums: </span>
            <input id="rateNameInput" type="number" name="voteRating"
            min="0" max="10" step="1" value="5">
            <input type="hidden" id="albumId" value="${albumId}"></input>
            <input onclick="fetchModule.rateAlbum()" type="submit">
            <div id="SuccessvoteSubmitted"></div>
        </div>
        <div id="albumtracks">
                <h2>Tracklist</h2>
                ${albumTracks}
        </div>        
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
            ${modifierModule.handleSpotify(track.spotifyURL)}
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

    specificPlaylist: function(playlist, id, Comments) {
        var mainDiv = document.getElementById('main');
        var ratings = playlist.ratings;
        var votes = ratings.length;
        var playlistId = id;
        var content = ``; 

        var content =  `
        <section class="infosection">
        <div class="img-container-specific">    
            <img src= "${modifierModule.handleImage(playlist.coverImage)}" alt="${playlist.title}" class="img-fluid"/>
        </div>
        <div id="info">
            <h1>${playlist.title}</h1>
            <p><strong>Rating:</strong> ${modifierModule.countRating(playlist.ratings)} (${votes} votes)</p>
            <p><strong>Genre: </strong>${playlist.genres}</p>
            <p><strong>Created by: </strong>${playlist.createdBy}</p>
            <button href="javascript://delete" id="${playlistId}" onClick='deleteFrom("playlists", this.id)' class="btn btn-danger">Delete Playlist</button>
            <br />
            <span class "form-label">Rate playlist: </span>
            <input id="rateNameInput" type="number" name="voteRating"
            min="0" max="10" step="1" value="5">
            <input type="hidden" id="playlistId" value="${playlistId}"></input>
            <input onclick="fetchModule.ratePlaylist()" type="submit">
            <div id="SuccessvoteSubmitted"></div>        
        </div>
        `
        mainDiv.innerHTML = content;
        
        displayModule.playlistCommentsForm(id);   
        fetchModule.getComments(id);
        displayModule.playlistComments(comments); 
    },
    
    playlistComments: function(comments) {
    var mainDiv = document.getElementById('main');    
    var content = '<h2>Comments</h2>';

    console.log(comments)

    for (let i = 0; i < comments.length; i++) {
        content += `
        <p><strong>${comments[i].username} skrev: </strong></p>
        <p>${comments[i].body}</p>
        `;
    }
    mainDiv.insertAdjacentHTML('beforeend', content)
    },    
    playlistCommentsForm: function(id) {
    var mainDiv = document.getElementById('main');    
    var commentPlaylistIdInput = id;
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
            <button type="submit" class="btn-block btn-success" onclick="submit.createCommentToPlaylist()">Submit</button>
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
            <button class="btn-block btn-success" onclick="submit.createArtist()">Submit</button>
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
        <button class="btn-block btn-success" onclick="submit.createSong()">Submit</button>
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
            <button class="btn-block btn-success" onclick="submit.createAlbum()">Submit</button>
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
        <button class="btn-block btn-success" onclick="submit.createPlaylist()">Submit</button>
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