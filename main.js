const glitchURL = "https://island-momentous-plot.glitch.me/movies";


getAllMovies();
//Get Movies
//language=HTML
function getAllMovies() {
    console.log('getAllMovies');
    fetch(glitchURL)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            renderMovieCards(data);
        });
}

//Make the Movie Cards

function renderMovieCards(data) {
    const movieList = document.querySelector("#movie-list");
    movieList.innerHTML = data.map(movie => {
        return `
            <div class=" card-body border-color-warning main-card-style col-12 col-md-4  ">
            
       
            <div class="image col">
                <div class="image-wrapper col">
                    <h2 class="card-title">${movie.title}</h2>
                    <img class="image-center card-img-top"  src="https://image.tmdb.org/t/p/original${movie.poster}">
                </div>
            </div>
            <input type="text" value="${movie.rating}" class="movie-rating" readonly>
            <input type="text" value="${movie.plot}" class="movie-plot card-subtitle mb-2 text-muted" readonly>
                <p>${movie.year}</p>
                <button type="button" class="edit-btn" data-id="${movie.id}">Edit</button>
                <button type="button" class="delete-btn" data-id="${movie.id}">Delete</button>
            </div>
            `;
    }).join('');
}

// Delete Movies
function deleteMovies() {
    let deleteCard = $(this)
    fetch(glitchURL + '/' + deleteCard.attr('data-id'), {
        method: 'delete'
    }).then(function (response) {
        deleteCard.parent().remove();
    })

}

$(document).on('click', '.delete-btn', deleteMovies)


// Add/Post Movies
function addMovie(movie) {

    const options = {
        method: 'POST', headers: {
            'Content-Type': 'application/json',
        }, body: JSON.stringify(movie),
    };
    fetch(glitchURL, options)
        .then(function (response) {
            return (response.json());
        }).then(function (movie) {
        console.log(movie.year);
        getAllMovies()
    })
}

// Add button to add movies from TMDB

function getTMDBMovies() {
    fetch(`https://api.themoviedb.org/3/movie/550?api_key=${TMDB_KEY}`)
        .then((response) => {
            if (response.ok) {
                console.log("SUCCESS")
            } else {
                console.log("NOT  SUCCESSFUL")
            }
            console.log(response)
            return response.json()
        })
        .then((data) => {
            console.log(data);
            // Work with JSON data here
        })
        .catch(error => {
            console.log(error);
        });
}
getTMDBMovies();


$(document).on('click', '#add-btn', function () {
    let movieSearch = $('#user-input').val();
    console.log(movieSearch);
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${TMDB_KEY}&query=${movieSearch}`)
        .then(function (response) {
            return (response.json());
        }).then(function (data) {
        //renderMovieCards(data);
        console.log(data.results[0]);
        let movie = {title: data.results[0].title,
            poster: data.results[0].poster_path,
            plot: data.results[0].overview,
            rating: data.results[0].vote_average,
            year: data.results[0].release_date}
        addMovie(movie)

    })
});


//Edit Movies

$(document).on('click', '.edit-btn', editMovie)

function editMovie() {
    $(this).siblings('input').attr('readonly', false)
    $(this).text('save')
    $(document).off('click', '.edit-btn', editMovie)
    $(document).on('click', '.edit-btn', saveUserEdit)

}

// Save Movie Edits from user

function saveUserEdit() {
    $(document).off('click', '.edit-btn', saveUserEdit)
    $(document).on('click', '.edit-btn', editMovie)
    $(this).text('edit')
    $(this).siblings('input').attr('readonly', true)

    let movie = {
        plot: $(this).siblings('input.movie-plot').val(), rating: $(this).siblings('input.movie-rating').val()
    };
    console.log(movie);
    fetch(glitchURL + '/' + $(this).attr('data-id'), {
        method: 'put', body: JSON.stringify(movie)
    }).then(function (response) {
        return (response.json());
    }).then(function (data) {
        console.log(data);
    })
}

// Search for a Movie
$(document).on('click', '#search-btn', function () {
    let movieSearch = $('#user-input').val();
    console.log(movieSearch);
    fetch(glitchURL + `?title=${movieSearch}`)
        .then(function (response) {
            return (response.json());
        }).then(function (data) {
        renderMovieCards(data);
    })
});


// Loading

// if (document.readyState === 'loading') {
window.addEventListener("load", function loadingMessage() {
    fetch(glitchURL)
        .then(function (response) {
            return (response.json());
        }).then(function (data) {
        console.log(data);
        $('#loading-message').remove();
    })
//language=HTML
    let loading = `
        <!--            <div id="loading-screen">-->
        <div class="spinner-border text-info m-5 loading-screen" style="width: 10rem; height: 10rem" role="status">
            <span class="sr-only loading-message loader"><span class="loader-inner">Loading...</span></span>
        </div>
        <!--            </div>-->
    `;
    // document.getElementsByClassName('loading-message').append(loading);
    $('#loading-message').append(loading);
    $('.loading-screen').fadeOut("slow");
    // setTimeout (loadingMessage, 5000);
});
//TODO: Slow and force a preload delay below:

$(window).on('load', function () {
    $('.loading-screen').fadeOut("slow");

});

















