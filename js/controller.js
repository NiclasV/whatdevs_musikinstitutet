const btnSubmit = document.getElementById('btnSubmit');
const btnSubmitArtist = document.getElementById('btnSubmitArtist');
const btnSubmitPlaylist = document.getElementById('btnSubmitPlaylist');
const btnSubmitSong = document.getElementById('btnSubmitSong');
const btnSubmitAlbum = document.getElementById('btnSubmitAlbum');
const submitPopUp = document.getElementById('myModal');
const btnClose = document.getElementsByClassName("btnClose")[0];
const mainDiv = document.getElementById('main');
const artistDropdown = document.getElementById('artistDropdown');
const siteLogo = document.getElementById('siteLogo')
const header = document.getElementById('theHeader');
const nav = document.getElementById('nav');

//CLICK EVENTS FOR VARIOUS BUTTONS:

btnSubmit.addEventListener('click', function(event) {
    console.log('Submit Clicked!')
    submitPopUp.style.display = "block";
});

siteLogo.addEventListener('click', function(event) {
  //event.preventDefault();
  //toggleHeader();
});

btnClose.addEventListener('click', function(event) {
  console.log('Submit Clicked!')
  submitPopUp.style.display = "none";
});

btnSubmitArtist.addEventListener('click', function(event) {
  var submitArtistForm = displayArtistForm();
  mainDiv.innerHTML = submitArtistForm;

});

btnSubmitAlbum.addEventListener('click', function(event){
  console.log('Submit Album Clicked!')
  mainDiv.innerHTML = submitAlbumForm;
});

btnSubmitSong.addEventListener('click', function(event) {
  var submitSongForm = displaySongForm(artistsData);
  mainDiv.innerHTML = submitSongForm;
});

btnSubmitPlaylist.addEventListener('click', function(event) {
  console.log('Submit Playlist Clicked!')
  mainDiv.innerHTML = submitPlaylistForm;
});
          
btnSubmitSongsToPlaylist.addEventListener('click', function(event) {
  console.log('Submit Song to Playlist Clicked!')
  mainDiv.innerHTML = submitSongsPlaylistForm;
});     

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

  function moreTrackInfo(id) {
    toggleHeader();
    getSpecificTrack(id);
  }

  function toggleHeader() {
    header.classList.toggle('header-img-animate');
    nav.classList.toggle('hide');
  }