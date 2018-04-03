/*Function that continues trough Artist Fetch and Loops out name of all Artists into a list*/

function displayArtists(artistsData) {

    let displayArtistsHTML = '';
    let aristisNameArray = artistsData;
    for (let artist of aristisNameArray) {

        displayArtistsHTML = displayArtistsHTML + `<p>${artist.name}</p>`;
    }
    artistsList.innerHTML = displayArtistsHTML;
    }

/*Function that continues trough Albums Fetch and Loops out name of all Albums into a list*/

function displayAlbums(albumsData) {

    let displayAlbumsHTML = '';
    let albumsNameArray = albumsData;
    for (let album of albumsNameArray) {

        displayAlbumsHTML = displayAlbumsHTML + `<p>${album.title}</p>`;
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

        displayPlaylistsHTML = displayPlaylistsHTML + `<p>${playlist.title}</p>`;
    }
    playlistsList.innerHTML = displayPlaylistsHTML;
    }

