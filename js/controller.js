/**************
-- CONTROLLA --
/*************/

var nameInput = document.querySelector('#name');

nameInput.addEventListener('input', function (event) { 
    displayModule.searchField();
});

//CLICK EVENTS FOR VARIOUS BUTTONS:

const buttonsModule = (function()  {
    
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

return {    
    EventListeners: function(artists){
        
btnSubmit.addEventListener('click', function (event) {
    console.log('Submit Clicked!')
    submitPopUp.style.display = "block";

}); 

siteLogo.addEventListener('click', function (event) {
    //event.preventDefault();
    //toggleHeader();
});

btnClose.addEventListener('click', function (event) {
    submitPopUp.style.display = "none";
});

btnSubmitArtist.addEventListener('click', function (event) {
    displayModule.displayArtistForm();
});

btnSubmitSong.addEventListener('click', function (event) {
    displayModule.displaySongForm(artists);
});

btnSubmitAlbum.addEventListener('click', function (event) {
    displayModule.displayAlbumForm(artists);
});

btnSubmitPlaylist.addEventListener('click', function (event) {
    displayModule.displayPlaylistForm();
});
    
    }

};
}());

const modifierModule = {

    moreAlbumInfo: function(id) {
        modifierModule.toggleHeader();
        fetchModule.getSpecificAlbum(id);
    },

    moreArtistInfo: function(id) {
        modifierModule.toggleHeader();
        fetchModule.getSpecificArtist(id);
    },

    morePlaylistInfo: function(id) {
        modifierModule.toggleHeader();
        fetchModule.getSpecificPlaylist(id);

    },

    moreTrackInfo: function(id) {
        modifierModule.toggleHeader();
        fetchModule.getSpecificTrack(id);
    },

    toggleHeader: function() {
        const header = document.getElementById('theHeader');
        const nav = document.getElementById('nav');
        header.classList.toggle('header-img-animate');
        nav.classList.toggle('hide');
    },

    countRating: function(rating) {
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
    },

    checkIfRated: function(rating) {
        if(rating === "Not Rated Yet!" || rating == null ) {
            return 0;
        }
        else {
            return rating
        }
    },

    handleImage: function(theImage) {
    if (theImage == null || theImage == undefined ) {
        return "images/male.png"
        } else {
        return theImage;
      }
    },

    handleSpotify: function(spotifyLink) {
        if (spotifyLink === null || spotifyLink === undefined) {
            return ``;

        } else {
            return `<a href="${spotifyLink}" target="_blank">Listen on Spotify</a><br><br>`; 
        }
    },

}

fetchModule.getArtists();
fetchModule.getAlbums();
fetchModule.getPlaylists();
fetchModule.getTracks();

buttonsModule.EventListeners();


