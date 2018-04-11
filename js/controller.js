const btnSubmit = document.getElementById('btnSubmit');
const btnSubmitArtist = document.getElementById('btnSubmitArtist');
const btnSubmitPlaylist = document.getElementById('btnSubmitPlaylist');
const btnSubmitSong = document.getElementById('btnSubmitSong');
const btnSubmitAlbum = document.getElementById('btnSubmitAlbum');
const submitPopUp = document.getElementById('myModal');
var btnClose = document.getElementsByClassName("btnClose")[0];
const mainDiv = document.getElementById('main');

//CLICK EVENTS FOR VARIOUS BUTTONS:

function submitForms(artistsData) {

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

btnSubmitPlaylist.addEventListener('click', function(event) {
  console.log('Submit Playlist Clicked!')
});

btnSubmitAlbum.addEventListener('click', function(event) {
  console.log('Submit Album Clicked!')
mainDiv.innerHTML = submitAlbumForm;
});

btnSubmitSong.addEventListener('click', function(event) {
  console.log('Submit Song Clicked!')
});




    
/*Artist Form*/

var submitArtistForm = `
<center>
    <h1>Enter Artist to submit: </h1>

    <div class="col-md-12">

        Artist name: <br /> <input type="text" id="artistNameInput"> <br /> 
        Born: <br /> <input type="text" id="artistBornInput"> <br />
        
        Gender: <br />
        <select name="gender" id="artistGenderInput">
		  <option value='male'>Male</option>
		  <option value='female'>Female</option>
		  <option value='other'>Other</option>
            
      </select><br /> 
        Genres: <br /> <input type="text" id="artistGenresInput"> <br /> 
        Spotify URL: <br /> <input type="text" id="artistSpotifyURLInput"> <br /> 
        Coverimage URL: <br /> <input type="text" id="artistCoverImageInput"> <br />


        <br> <br>
        <button onclick="submitArtist()">Submit</button>

        <br /><br />

        <div id="test"></div>

    </div>
</center>
`;

/*Album Form*/


console.log(artistsData);



var submitAlbumForm = `
<center>
    <h1>Enter Album to submit: </h1>
    <div class="col-md-12">
        Album title: <br /> <input type="text" id="albumNameInput"> <br /> 
        Artist: <br />
        <select name="artist" id="albumArtistInput">
	  <option value="Pontus">Artister</option>            
      </select><br /> 
<div id="show"></div>
        Release Year: <br />  <input type="text" id="albumReleaseDateInput"> <br /> 
        Genres: <br /> <input type="text" id="albumGenresInput"> <br /> 
        Spotify URL: <br /> <input type="text" id="albumSpotifyURLInput"> <br /> 
        Coverimage URL: <br /> <input type="text" id="albumCoverImageInput"> <br />
        <br> <br>
        <button onclick="submitArtist()">Submit</button>
        <br /><br />
    </div>
</center>
`;
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

