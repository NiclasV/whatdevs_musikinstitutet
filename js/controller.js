const btnSubmit = document.getElementById('btnSubmit');
const btnSubmitArtist = document.getElementById('btnSubmitArtist');
const btnSubmitPlaylist = document.getElementById('btnSubmitPlaylist');
const btnSubmitSong = document.getElementById('btnSubmitSong');
const btnSubmitAlbum = document.getElementById('btnSubmitAlbum');
const submitPopUp = document.getElementById('myModal');
var btnClose = document.getElementsByClassName("btnClose")[0];
const mainDiv = document.getElementById('main');
const artistDropdown = document.getElementById('artistDropdown');


//CLICK EVENTS FOR VARIOUS BUTTONS:

function submitForms(artistsData) {

console.log(artistsData);

btnSubmit.addEventListener('click', function(event) {
    console.log('Submit Clicked!')
    submitPopUp.style.display = "block";
});

btnClose.addEventListener('click', function(event) {
    console.log('Submit Clicked!')
    submitPopUp.style.display = "none";
});

btnSubmitArtist.addEventListener('click', function(event) {
  console.log('Submit Artist Clicked!');
  mainDiv.innerHTML = submitArtistForm;
});


btnSubmitAlbum.addEventListener('click', function(event) {
  console.log('Submit Album Clicked!')
mainDiv.innerHTML = submitAlbumForm;
});

btnSubmitSong.addEventListener('click', function(event) {
  console.log('Submit Song Clicked!')
  mainDiv.innerHTML = submitSongForm;

});

    
/*Artist Form*/


var submitArtistForm = `
<center>
    <h1>Enter Artist to submit: </h1>

    <div class="col-md-12">

        <span class="form-label"> Artist name: </span>
        <br /> <input type="text" id="artistNameInput" class="form-control"> <br /> 
        <span class="form-label">Born: </span> 
        <br /> <input type="text" id="artistBornInput" class="form-control"> <br />
        
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


/*Song Form*/

/*For Loop that loops out all Artists*/

    var artists = artistsData;
    var artistOption = "";
    //console.log(artists[0].name);
    for (let i = 0; i < artists.length; i++) {
        artistOption += `
        <option value="${artists[i]._id}">${artists[i].name}</option>
        `
    }
    
/*For loop ends*/


    var submitSongForm = `
    
<center>
    <h1>Enter Song to submit: </h1>
    <div class="col-md-12">
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


/*Album Form*/

var submitAlbumForm = `
<center>
    <h1>Enter Album to submit: </h1>
    <div class="col-md-12">
        <span class="form-label">Album title: </span> 
        <br /> <input type="text" id="albumNameInput" class="form-control"> <br /> 
        <span class="form-label">Artist: </span> 
        <br /> 
<select id="albumArtistInput" class="form-control">
${artistOption}
 </select><br />
        <span class="form-label">Release Year: </span> 
        <br />  <input type="text" id="albumReleaseDateInput" class="form-control"> <br /> 
        <span class="form-label">Genres: </span> 
        <br /> <input type="text" id="albumGenresInput" class="form-control"> <br /> 
        <span class="form-label">Spotify URL: </span> 
        <br /> <input type="text" id="albumSpotifyURLInput" class="form-control"> <br /> 
        <span class="form-label">Coverimage URL: </span> 
        <br /> <input type="text" id="albumCoverImageInput" class="form-control"> <br />
        <br> <br>
        <button class="btn-block btn-success" onclick="submitAlbum()">Submit</button>
        <br /><br />
<div id="successAlbumSubmited"></div>
    </div>
</center>
`;

}

    function songs(tracksData) {
        
btnSubmitPlaylist.addEventListener('click', function(event) {
console.log('Submit Playlist Clicked!')
mainDiv.innerHTML = submitPlaylistForm;

});

  /*Playlist Form*/

/*For Loop that loops out all Songs */

    var songs = tracksData;
    var songsOption = "";
    //console.log(artists[0].name);
    for (let i = 0; i < songs.length; i++) {
        songsOption += `
        <option value="songs[i]._id">${songs[i].title}</option>
        `
    }
    
/*For loop ends*/

var submitPlaylistForm = `
<center>
    <h1>Enter Playlist to submit: </h1>
    <div class="col-md-12">
        <span class="form-label">Playlist title: </span> 
        <br /> <input type="text" id="playlistNameInput" class="form-control"> <br /> 
        <span class="form-label">Genres: </span> 
        <br /> <input type="text" id="playlistGenresInput" class="form-control"> <br /> 
        <span class="form-label">Created By: </span> 
        <br />  <input type="text" id="playlistCreatorInput" class="form-control"> <br />  
        <span class="form-label">Tracks: </span> 
        <br />
        <select name="tracks" id="playlistTracksInput" class="form-control">
        ${songsOption}
        </select><br /> 
        <span class="form-label">Coverimage URL: </span> 
        <br /> <input type="text" id="playlistCoverImageInput" class="form-control"> <br />
        <br> <br>
        <button class="btn-block btn-success" onclick="submitPlaylist()">Submit</button>
        <br /><br />
<div id="successPlaylistSubmited"></div>

    </div>
</center>
`;  


function addClickedSongToPlaylist(clicked_id) {

console.log(addClickedSongToPlaylist)

}

}






let tracks = []
let albums = []
let playlists = []
var factText = document.querySelector('#factText');
var nameInput = document.querySelector('#name');

nameInput.addEventListener('input', getFactFetch);



    // RÅ DATA Api
    function getFactFetch(){
        var name = nameInput.value;
        
        if(name != ''){
          fetch('https://folksa.ga/api/artists?limit=10000&sort=desc&key=flat_eric')
          .then( response => response.json() )
          .then( data => {
          	// vi får en rad data tillbaka, så nu måste vi filtrera
            // för att bara skicka in uppgifterna om artisten vi letar efter
          	data = data.filter( ( element ) => {
            		// Begränsa arrayen till att bara innehålla den artist vi letar efter
							return new RegExp( name, 'ig' ).test( element.name );
            } );
            displayArtists( data );
          })
          .catch(err => console.log(err)); 
        }
      //datan finns på de resterande 3 api men att få ut dom har jag inte gjort.
        if(name != ''){
          fetch('https://folksa.ga/api/albums?key=flat_eric')
          .then(response => response.text())
          .then(data => {
            albums = data
          })
          .catch(err => console.log(err)); 
        }
        if(name != ''){
          fetch('https://folksa.ga/api/tracks?key=flat_eric')
          .then(response => response.text())
          .then(data => {
            tracks = data
          })
          .catch(err => console.log(err)); 
        }
        if(name != ''){
          fetch('https://folksa.ga/api/playlists?key=flat_eric')
          .then(response => response.text())
          .then(data => {
            playlists = data
          })
          .catch(err => console.log(err)); 
        }
        
      }

// $ omvandlar varabeln istället för + CLEAN CODE MAN
      function displayArtists( artists ){
          let display = '';
          
          artists.forEach( ( artist ) => {
            display += `
            	<img src="${artist.coverImage}" alt="${ artist.name }" style="width: 250px; height: 250px;"/><br/>
              <strong>Name: </strong>${ artist.name },<br/>
              <strong>Genres: </strong>${ artist.genres },<br/>
              <strong>Albums: </strong>${ artist.albums },<br/>
              

            

              <strong><a href="${ artist.spotifyURL }">Spotify URL</a></strong><br/><br/><hr/><br/>
            `
          } );
          
          document.getElementById( 'factText' ).innerHTML = display;
      }


      // när man skriver något i fältat vad händer då(försöker matcha data) = med data jag fått ut, samt matcha med apin.
      function searchsite(artistData, albumData, tracksData, playlistsData) {
        console.log(albumData);
      }

