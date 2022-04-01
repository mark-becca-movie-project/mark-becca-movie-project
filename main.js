const glitchURL = "https://island-momentous-plot.glitch.me/movies";
getAllMovies();

//Get Movies
function getAllMovies() {
    fetch(glitchURL)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const movieList = document.querySelector("#movie-list");
            data.forEach(movie => {
                const movieItem = document.createElement("li");
                movieItem.innerHTML = `
            <h2>${movie.title}</h2>
            <p>${movie.actors}</p>
            <p>${movie.director}</p>
            <p>${movie.genre}</p>
            <p>${movie.id}</p>
            <p>${movie.plot}</p>
            <img src="${movie.poster}">
            <p>${movie.rating}</p>
            <p>${movie.year}</p>
          `;
                movieList.appendChild(movieItem);
            });
        });
}


// Delete Movies
function deleteMovies(id) {
    fetch(glitchURL + '/' + id, {
        method: 'delete'
    }).then(function (response) {
        console.log(response);
    })

}

//deleteMovies(255);

addMovie();

// Post Movies
function addMovie() {
    const movie = {title: 'Ajax Requests', body: 'Are a fun way to use JS!'};
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(movie),
    };
    fetch(glitchURL, options)
        .then(function (response) {
            return (response.json());
        }).then(function (movie) {
        console.log(movie);
    })
}

$('#edit-btn').click(editMovie)

function editMovie() {
    console.log('Edit Movie Event')
    let movie = {title: "", body: ""};
    fetch(glitchURL + '/' + id, {
        method: 'edit'
    }).then(function (response) {
        return (response.json());
    }).then(function (movie) {
        console.log(movie);
    })
}

// Search for a Movie

function searchMovie() {
    let movieSearch = document.querySelector('#userInput');
    console.log(movieSearch);
    movieSearch.addEventListener("click", getAllMovies);
}


//Display a "loading..." message    //TODO: Check this done by Mark
// window.addEventListener("load", function(){
//     const movieList = document.querySelector("#movie-list");
//     const loadingMessage = document.createElement("li");
//     loadingMessage.innerHTML = `
//     <h2>Loading...</h2>
//     `;
//     movieList.appendChild(loadingMessage);
// });

//or...
$(window).on('load', function () {
    $('#loading-message').append('<span>Loading...</span>');
});

//TODO: Check this done by Mark ^


// Make an AJAX request to get a listing of all the movies

