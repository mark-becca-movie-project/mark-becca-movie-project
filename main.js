const glitchURL = "https://island-momentous-plot.glitch.me/movies";
getAllMovies();
//Get Movies
//language=HTML
function getAllMovies() {
    fetch(glitchURL)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const movieList = document.querySelector("#movie-list");
            data.forEach(movie => {
                const movieItem = `
                    <div class="container main-cards justify-content-around mt-5">
                        <div class="row">
                            <div class="main-card-style column">
                                <p>${movie.actors}</p>
                                <p>${movie.director}</p>
                                <p>${movie.genre}</p>
                                <input type="text" value="${movie.plot}" class="movie-plot" readonly>
                                <div class="image">
                                    <div class="image-wrapper">
                                        <h2>${movie.title}</h2>

                                        <img class="image-center" src="${movie.poster}">
                                    </div>
                                </div>
                                <input type="text" value="${movie.rating}" class="movie-rating" readonly>
                                <p>${movie.year}</p>
                                <button type="button" class="edit-btn" data-id="${movie.id}">Edit</button>
                                <button type="button" class="delete-btn" data-id="${movie.id}">Delete</button>
                            </div>
                        </div>
                    </div>
                `;
                movieList.innerHTML += movieItem;
            });
        });
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

$(document).on('click', '.edit-btn', editMovie)

function editMovie() {
    $(this).siblings('input').attr('readonly', false)
    $(this).text('save')
    $(document).off('click', '.edit-btn', editMovie)
    $(document).on('click', '.edit-btn', saveUserEdit)

}

function saveUserEdit() {
    $(document).off('click', '.edit-btn', saveUserEdit)
    $(document).on('click', '.edit-btn', editMovie)
    $(this).text('edit')
    $(this).siblings('input').attr('readonly', true)
    console.log()
    let movie = {
        plot: $(this).siblings('input.movie-plot').val(),
        rating: $(this).siblings('input.movie-rating').val()
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

// Add Movie

// Search for a Movie
function searchMovie() {
    let movieSearch = document.querySelector('#userInput');
    console.log(movieSearch);
    movieSearch.addEventListener("click", getAllMovies);
}





//VERSION ONE
// // if (document.readyState === 'loading') {
//     window.addEventListener("load", function loadingMessage() {
// //language=HTML
//         let loading = `
//             <div id="loading-screen">
//                 <div class="spinner-border text-info m-5" role="status">
//                     <span class="sr-only loading-message">Loading...</span>
//                 </div>
//             </div>
//         `;
//         // document.getElementsByClassName('loading-message').append(loading);
//         $('#loading-message').append(loading);
//         setTimeout (loadingMessage, 5000);
//     });
// // }
// // else {
// //     $('#loading-message').remove();
// // }

//Version TWO
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
                <div class="spinner-border text-info m-5 loading-screen" style="width: 10rem; height: 10rem"  role="status">
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

// }
// else {
//     $('#loading-message').remove();
// }




// Make an AJAX request to get a listing of all the movies
