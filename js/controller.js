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
        
btnSubmitSongsToPlaylist.addEventListener('click', function(event) {
console.log('Submit Song to Playlist Clicked!')
mainDiv.innerHTML = submitSongsPlaylistForm;

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

//    var playlist = playlistsData;
//    var playlistOption = "";
//    //console.log(artists[0].name);
//    for (let i = 0; i < playlist.length; i++) {
//        songsOption += `
//        <option value="playlist[i]._id">${playlist[i].title}</option>
//        `
//    }
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
        <span class="form-label">Coverimage URL: </span> 
        <br /> <input type="text" id="playlistCoverImageInput" class="form-control"> <br />
<div id="DisplayAddedSongsHeadText"></div>
<div id="DisplayAddedSongsToPlaylist"></div>
<div id="test"></div>
        <br> <br>
        <button class="btn-block btn-success" onclick="submitPlaylist()">Submit</button>
        <br /><br />
<div id="successPlaylistSubmited"></div>
    </div>
</center>

`;  

/*Submit Song Form*/

var submitSongsPlaylistForm = `
<center>
    <h1>Add Song to Playlist: </h1>
    <div class="col-md-8">
        <span class="form-label">Song To Add: </span> 

        <select name="tracks" id="playlistTracksInput" class="form-control">
        ${songsOption}
        </select> <br />
        <span class="form-label">Into This Playlist: </span> 

        <select name="tracks" id="playlistTracksInput" class="form-control">
        ${songsOption}
        </select>
<div id="DisplayAddedSongsHeadText"></div>
<div id="DisplayAddedSongsToPlaylist"></div>
<div id="test"></div>
        <br> <br>
        <button class="btn-block btn-success" onclick="submitPlaylist()">Submit</button>
        <br /><br />
<div id="successPlaylistSubmited"></div>

    </div>
</center>

`;

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
    var theRatingRounded = Math.round( theRating * 10) / 10;
    return theRatingRounded; 
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

  function moreAlbumInfo(what, id) {
    toggleHeader();
    getSpecificAlbum(what, id);
  }

  function moreArtistInfo(id) {
    toggleHeader();
    getSpecificArtist(id); 
  }

  function morePlaylistInfo(id) {
    toggleHeader();
    getSpecificPlaylist(id);
  }


  function toggleHeader() {
    const header = document.getElementById('theHeader');
    header.classList.toggle('hide');
  }