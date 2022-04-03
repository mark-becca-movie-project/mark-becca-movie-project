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
                    <li>
                        <h2>${movie.title}</h2>
                        <p>${movie.actors}</p>
                        <p>${movie.director}</p>
                        <p>${movie.genre}</p>
                        <input type="text" value="${movie.plot}" class="movie-plot" readonly>
                        <img src="${movie.poster}">
                        <input type="text" value="${movie.rating}" class="movie-rating" readonly>
                        <p>${movie.year}</p>
                        <button type="button" class="edit-btn" data-id="${movie.id}">Edit</button>
                        <button type="button" class="delete-btn" data-id="${movie.id}">Delete</button>
                    </li>
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

function saveUserEdit (){
    $(document).off('click', '.edit-btn', saveUserEdit)
    $(document).on('click', '.edit-btn', editMovie)
    $(this).text('edit')
    $(this).siblings('input').attr('readonly', true)
    console.log()
    let movie = {plot: $(this).siblings('input.movie-plot').val(), rating: $(this).siblings('input.movie-rating').val()};
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


//TODO: DELETE BELOW
// window.addEventListener("load", function(){
//     const movieList = document.querySelector("#loading-message");
//     const loadingMessage = document.createElement("li");
//     loadingMessage.innerHTML = `
//     <h2>Loading...</h2>
//     `;
//     movieList.appendChild(loadingMessage);
// });

// // // TODO: USE THIS/ Checked by Mark and works 15:51PM   04-01-2022
// $(window).on('load', function () {
//     $('#loading-message').append('<span>Loading...</span>');
// });
 //TODO: the page load animation is continuous because it's boostrap... toggle class? hide class? ... fix me!  ♥️

//or..
// setTimeout(getAllMovies, 5000);
//too easy? doesn't stop... must be another way

function getAllMoviesLoading() {
//language=HTML
    let loading = `
        <div id = "loading-screen">
    <div class="spinner-border text-info m-5" role="status">
    <span class="sr-only loading-message">Loading...</span>
</div>
</div>
`;
    $('#loading-message').append(loading);
    setTimeout(getAllMovies, 5000);
}
// }
getAllMoviesLoading()

//     setTimeout(() => {
//         load.append('<span>Loading...</span>');
//     }, delay);
// };



// Make an AJAX request to get a listing of all the movies

