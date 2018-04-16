
/*Function that continues trough Artist Fetch and Loops out name of all Artists into a list*/

function displayArtists(artistsData) {

    let displayArtistsHTML = '';
    let aristisNameArray = artistsData;
    
    for (let artist of aristisNameArray) {

        displayArtistsHTML = displayArtistsHTML + `
        <div class="artistCard">
            <div class="img-container">    
             <img src= "${handleImage(artist.coverImage)}" alt="${artist.name}" class="img-fluid"/>
            </div>
            <a id="${artist._id}" href="javascript://artistInfo" onClick="moreArtistInfo(this.id)">${artist.name}</a> <br>         
            Genres: ${ artist.genres }<br>
                
            <strong><a href="${ artist.spotifyURL }">Spotify URL</a></strong><br/><br/>
        </div>`;
    }    
    artistsList.innerHTML = displayArtistsHTML;
}

/*Function that continues trough Albums Fetch and Loops out name of all Albums into a list*/

function displayAlbums(albumsData) {

    let displayAlbumsHTML = '';
    let albumsNameArray = albumsData;
    for (let album of albumsNameArray) {

        displayAlbumsHTML = displayAlbumsHTML + `<p><a id="${album._id}" >${album.title}</a></p>`;
    }
    albumsList.innerHTML = displayAlbumsHTML;
    }


/*Function that continues trough Tracks Fetch and Loops out name of all Tracks into a list*/

function displayTracks(tracksData) {

    let displayTracksHTML = '';
    let tracksNameArray = tracksData;
    for (let track of tracksNameArray) {

        displayTracksHTML = displayTracksHTML + `<p>${track.title}</p>`;
    }
    tracksList.innerHTML = displayTracksHTML;
    }


/*Function that continues trough Playlists Fetch and Loops out name of all Playlists into a list*/

function displayPlaylists(playlistsData) {
    
    let displayPlaylistsHTML = '';
    let playlistsNameArray = playlistsData;
    for (let playlist of playlistsNameArray) {
        let playlistRating = playlist.ratings

        displayPlaylistsHTML = displayPlaylistsHTML + `<h4>${playlist.title}</h2><p><strong>Rating:</strong> ${countRating(playlistRating)}</p>`;
        
        
    }
    playlistsList.innerHTML = displayPlaylistsHTML;
}

function displaySpecific(data) {
    var artist = data;
    var content = ``; 
    var name = data.name;
    
    var content = `
    <div class="img-container-specific">    
        <img src= "${handleImage(artist.coverImage)}" alt="${artist.name}" class="img-fluid"/>
        
    </div>
    <h1>${artist.name}</h1>
    <p><strong>Genre:</strong> ${artist.genres}</p>
    <p><strong>Rating:</strong> ${countRating(artist.ratings)}</p>
    `

    mainDiv.innerHTML = content;
  }

  
