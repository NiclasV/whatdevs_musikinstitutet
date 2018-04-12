const btnSubmit = document.getElementById('btnSubmit');
const btnSubmitArtist = document.getElementById('btnSubmitArtist');
const btnSubmitPlaylist = document.getElementById('btnSubmitPlaylist');
const btnSubmitSong = document.getElementById('btnSubmitSong');
const btnSubmitAlbum = document.getElementById('btnSubmitAlbum');
const submitPopUp = document.getElementById('myModal');
const btnClose = document.getElementsByClassName("btnClose")[0];
const btnArtist = document.getElementsByClassName("btnArtist");
const mainDiv = document.getElementById('main');

//CLICK EVENTS FOR VARIOUS BUTTONS:

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

btnSubmitAlbum.addEventListener('click', function(event){
  console.log('Submit Album Clicked!')
mainDiv.innerHTML = submitAlbumForm;
});

btnSubmitSong.addEventListener('click', function(event) {
  console.log('Submit Song Clicked!')
});


for (var i = 0 ; i < btnArtist.length; i++) {
  btnArtist[i].addEventListener('click', function(event) {
    event.preventDefault();
    console.log('artist link clicked')
  })
};

var factText = document.querySelector('#factText');
var nameInput = document.querySelector('#name');

nameInput.addEventListener('input', getFactFetch);

    // RÅ DATA Api
    function getFactFetch(){
        var name = nameInput.value;
        
        if(name != ''){ //1
          fetch('https://folksa.ga/api/artists?limit=1000&sort=desc&key=flat_eric')
          .then( response => response.json() )
          .then( data => {
          	// vi får en rad data tillbaka, så nu måste vi filtrera
            // för att bara skicka in uppgifterna om artisten vi letar efter
          	data = data.filter( ( element ) => {
            		// Begränsa arrayen till att bara innehålla den artist vi letar efter
              return new RegExp( name, 'ig' ).test( element.genres) ||
              new RegExp( name, 'ig' ).test( element.name)

            } );
            displayArtists( data );
          })
          .catch(err => console.log(err)); 
        }
        if(name != ''){ //2
        fetch('https://folksa.ga/api/albums?key=flat_eric')
        .then(response => response.json())
        .then( data => {
          data = data.filter( ( element ) => {
            return new RegExp( name, 'ig' ).test( element.title)

          } );
          displayAlbums( data );
          })
          .catch(err => console.log(err)); 
        }
        if(name != ''){ //3
          fetch('https://folksa.ga/api/tracks?key=flat_eric')
          .then(response => response.json())
          .then( data => {
          	data = data.filter( ( element ) => {
              return new RegExp( name, 'ig' ).test( element.title)

            } );
            displayTracks( data );
          })
          .catch(err => console.log(err)); 
        }
         if(name != ''){ //4
          fetch('https://folksa.ga/api/playlists?key=flat_eric')
          .then(response => response.json())
          .then( data => {
          	data = data.filter( ( element ) => {
              return new RegExp( name, 'ig' ).test( element.title)

            } );
            displayPlaylists( data );
          })
          .catch(err => console.log(err)); 
        }
        
      }
         
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

var submitAlbumForm = `
<center>
    <h1>Enter Album to submit: </h1>
    <div class="col-md-12">
        Album title: <br /> <input type="text" id="albumNameInput"> <br /> 
        Artist: <br />
        <select name="artist" id="albumArtistInput">
	  <option value="Pontus">Artister</option>            
      </select><br /> 
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

      var theArray = [2, 3, 4, 5, 6, 7];

      //Function for counting out the rating
      function theRating(){
          var quantity = theArray.length; 
          var ratingTotal = 0; 
          
          for (var i = 0; i < quantity; i++) {
              ratingTotal += theArray[i];
          } 
          theRating = ratingTotal / quantity;
          return theRating;
      }
      console.log(theArray);
      console.log("The Rating of this playlist is: " + theRating());

