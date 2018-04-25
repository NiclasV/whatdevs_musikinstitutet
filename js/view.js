getArtistData("artists", 10);
getAlbumData("albums", 10);
getPlaylistData("playlists", 10);
getTracksData("tracks", 10);

const artistsList = document.getElementById('displayAllArtists');
const albumsList = document.getElementById('displayAllAlbums');
const tracksList = document.getElementById('displayAllTracks');
const playlistsList = document.getElementById('displayAllPlaylists');


/************************
--- DISPLAYS STARTPAGE ---
*************************/

/*Function that continues trough Artist Fetch and Loops out name of all Artists into a list*/
function displayArtists(artistsData) {
    let displayArtistsHTML = '';
    let aristisNameArray = artistsData;
    
    for (let artist of aristisNameArray) {

        displayArtistsHTML = displayArtistsHTML + `
        <div class="infoCard">
            <div class="img-container">    
             <img src= "${handleImage(artist.coverImage)}" alt="${artist.name}" class="img-fluid"/>
            </div>
            <a id="${artist._id}" href="javascript://artistInfo" onClick="moreArtistInfo(this.id)"><h2>${artist.name}</h2></a>
                  
            <p>${ artist.genres }</p>
                
            <div class="spotify">
                <div class="spotifyLogoContainer" >
                    <?xml version="1.0" encoding="UTF-8" standalone="no"?>
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
            </div>
        </div>`;
    }    
    artistsList.innerHTML = displayArtistsHTML;
}

/*Function that continues trough Albums Fetch and Loops out name of all Albums into a list*/

function displayAlbums(albumsData) {
    let displayAlbumsHTML = '';
    let albumsNameArray = albumsData;
    let albumArtists = albumsNameArray;

    for (let album of albumsNameArray) {

        displayAlbumsHTML = displayAlbumsHTML + `
            <div class="infoCard">
                <div class="img-container">    
                    <img src= "${handleImage(album.coverImage)}" alt="${album.title}" class="img-fluid"/>
                </div>
                <a id="${album._id}" href="javascript://albumInfo" onClick='moreAlbumInfo(this.id)'><h2>${album.title}</h2></a>
            </div>
        `;
    }
    albumsList.innerHTML = displayAlbumsHTML;
    }


/*Function that continues trough Tracks Fetch and Loops out name of all Tracks into a list*/

function displayTracks(tracksData) {

    let displayTracksHTML = '';
    let tracksNameArray = tracksData;
    let i = 1; 
    for (let track of tracksNameArray) {

        displayTracksHTML = displayTracksHTML + `
        <h2>${i++}. <a id="${track._id}" href="javascript://trackinfo" onClick='moreTrackInfo(this.id)'>${track.title}</a></h2>
        <p>${track.genres}</p>
        <p><strong>From the album: </strong>${track.album.title}</p><br>

        `;
    }
    tracksList.innerHTML = displayTracksHTML;
    }


/*Function that continues trough Playlists Fetch and Loops out name of all Playlists into a list*/

function displayPlaylists(playlistsData) {

    let displayPlaylistsHTML = '';
    let playlistsNameArray = playlistsData;
    for (let playlist of playlistsNameArray) {
        let playlistRating = playlist.ratings

        displayPlaylistsHTML = displayPlaylistsHTML + `
        <div class="infoCard">
        <div class="img-container">    
        <img src= "${handleImage(playlist.coverImage)}" alt="${playlist.title}" class="img-fluid"/>
        </div>
        <a id="${playlist._id}" href="javascript://artistInfo" onClick="morePlaylistInfo(this.id)"><h4>${playlist.title}</h2></a>
        <p><strong>Rating:</strong> ${countRating(playlistRating)}</p>
        </div>
        `;
                
    }
    playlistsList.innerHTML = displayPlaylistsHTML;
}


/************************
--- DISPLAYS SPECIFICS ---
*************************/

function displaySpecificArtist(data, id) {
    var artist = data;
    var name = data.name;
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
    
}

function displaySpecificAlbum(data, id) {
    var album = data;
    var tracks = album.tracks;
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
    `

    
    mainDiv.innerHTML = content;
}

function displaySpecificPlaylist(data, id) {
    var playlist = data;
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
    </div>
    `

    mainDiv.innerHTML = content;
    
        getPlaylistComments(playlistId);
    displayAddSongToPlaylist(playlistId);
        displayCommentsForm(playlistId);

}

function displayComments(comments) {
    console.log(comments);
    var content = '<h2>Comments</h2>';

    for (let i = 0; i < comments.length; i++) {
        content += `
        <p><strong>${comments[i].username} skrev: </strong></p>
        <p>${comments[i].body}</p>
        `;
    }
    mainDiv.insertAdjacentHTML('beforeend', content)
}


function displayAddSongToPlaylist(playlistId) {
    
  /*Submit Song Form*/
  /*For Loop that loops out all Songs */
    
//      var songs = tracksData;
//  var songsOption = "";
//  //console.log(artists[0].name);
//  for (let i = 0; i < songs.length; i++) {
//      songsOption += `
//      <option value="songs[i]._id">${songs[i].title}</option>
//      `
//  }
//console.log(tracksData);
    
    var commentPlaylistIdInput = playlistId;
    var content = "<h2>Add a Song:</h2>";
    
    content += `
      <div class="col-md-8">
          <select name="tracks" id="songToPlaylistInput" class="form-control">
          </select> <br />
            <input type="hidden" id="commentPlaylistIdInput" value="${commentPlaylistIdInput}"></input>
      <button class="btn-block btn-success" onclick="submitSongToPlaylist()">Submit</button>
      <br /><br />
<div id="successSongSubmited"></div>
    `
    document.getElementById('main').insertAdjacentHTML('beforeend', content)
       
}

function displayCommentsForm(playlistId) {
    
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
       
}

function displaySpecificTrack(data, id) {
    var track = data;
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
        </div>

        <button href="javascript://delete" id="${trackId}" onClick='deleteFrom("tracks", this.id)' class="btn btn-danger">Delete Track</button>

    </div>
    `
    console.log(trackId)
    mainDiv.innerHTML = content;
    
}


/*************************
---- DISPLAYS FORMS  -----
*************************/

function displayArtistForm() {
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
            <button class="btn-block btn-success" onclick="submitArtist()">Submit</button>
            <br /><br />
    <div id="successArtistSubmited"></div>
        </div>
    </center>
    `;
    mainDiv.innerHTML = submitArtistForm;
}

function displaySongForm(artistsData) {

    var artists = artistsData;
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
        <button class="btn-block btn-success" onclick="submitSong()">Submit</button>
        <br /><br />
    <div id="successSongSubmited"></div>
    </div>
    </center>
    `;
  mainDiv.innerHTML = submitSongForm;
}

function displayAlbumForm(artistsData) {
    
        var artists = artistsData;
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
            <button class="btn-block btn-success" onclick="submitAlbum()">Submit</button>
            <div id="successAlbumSubmited"></div>
        </div>
    </center>
    `;
      mainDiv.innerHTML = submitAlbumForm;

}

function displayPlaylistForm() {
     
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
      <button class="btn-block btn-success" onclick="submitPlaylist()">Submit</button>
      <br /><br />
<div id="successPlaylistSubmited"></div>
  </div>
</center>
`;  
      mainDiv.innerHTML = submitPlaylistForm;

}


    
  