console.log(btnArtist);
console.log(btnArtist[0]);
/*Function that continues trough Artist Fetch and Loops out name of all Artists into a list*/

function displayArtists(artistsData) {

    let displayArtistsHTML = '';
    let aristisNameArray = artistsData;
    for (let artist of aristisNameArray) 
    {
        // sets image from api if the string is none empty and not null, if no image default image. male and female
        let imgsrc = '';
        if(artist.coverImage)
            imgsrc = artist.coverImage;
        else if(artist.gender === "female") 
            imgsrc = "../whatdevs_musikinstitutet/images/female.jpg"
            // if u want u can put the gender "other" aswell.
        else
            imgsrc = "../whatdevs_musikinstitutet/images/male.png"
        displayArtistsHTML = displayArtistsHTML + `
        <div class="artistCard">
            <div class="img-container">    
             <img src= "${imgsrc}" alt="${ artist.name }" class="img-fluid"/>
            </div>
            <button type="submit" class="btnArtist">${artist.name}</button></p>            
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

        displayAlbumsHTML = displayAlbumsHTML + `<p><a id="${album._id}" onClick="moreAlbumInfo(this.id)">${album.title}</a></p>`;
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

        displayPlaylistsHTML = displayPlaylistsHTML + `<p>${playlist.title}</p><p>Rating: ${playlist.ratings}</p>`;
        
    }
    playlistsList.innerHTML = displayPlaylistsHTML;
}



