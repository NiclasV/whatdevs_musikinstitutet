const btnSubmit = document.getElementById('btnSubmit');
const btnSubmitArtist = document.getElementById('btnSubmitArtist');
const btnSubmitPlaylist = document.getElementById('btnSubmitPlaylist');
const btnSubmitSong = document.getElementById('btnSubmitSong');
const btnSubmitAlbum = document.getElementById('btnSubmitAlbum');
const submitPopUp = document.getElementById('myModal');
const btnClose = document.getElementsByClassName("btnClose")[0];
const mainDiv = document.getElementById('main');
const artistDropdown = document.getElementById('artistDropdown');

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

const spotify = document.getElementsByClassName("spotify");
//Create an click-event the deleteBtn, since the ByClassName gets a HTMLcolletion array with all the buttons i gotta looop it!
for (var i = 0 ; i < spotify.length; i++) {
  spotify[i].addEventListener('click', function(event) {
    //Preventing defaultevent with refreshing site at click
    event.preventDefault()
    console.log("hej");
  })
};

btnSubmitAlbum.addEventListener('click', function(event){
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


/*Album Form*/

var submitAlbumForm = `
<center>
    <h1>Enter Album to submit: </h1>
    <div class="col-md-8">
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
    <div class="col-md-8">
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
        fetch('https://folksa.ga/api/albums?limit=1000&key=flat_eric')
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
          fetch('https://folksa.ga/api/tracks?limit=1000&key=flat_eric')
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
          fetch('https://folksa.ga/api/playlists?limit=1000&key=flat_eric')
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


//Function for counting out the rating
  function countRating(rating) {
    var quantity = rating.length; 
    var ratingTotal = 0; 
    
    for (var i = 0; i < quantity; i++) {
      ratingTotal += rating[i];
    }
      theRating = ratingTotal / quantity;
      if (isNaN(theRating)) {
        return "Not Rated Yet!"
      } else {
      return theRating; 
    }
  }

//Function for showing standard-image
  function handleImage(theImage) {
    if (theImage == "") {
      return "../whatdevs_musikinstitutet/images/male.png"
    } else {
      return theImage;
    }
  }  

  function moreArtistInfo(id) {
    getSpecific(id);
  }


