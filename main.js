
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

// Search for a Movie
let movieSearch = document.querySelector('#userInput');
console.log(movieSearch);
movieSearch.addEventListener("click", updateMovies);

// Delete Movies
function deleteMovies(id){
    fetch(glitchURL + '/' +id,{
        method: 'delete'
    }).then(function(response){
        console.log(response);
    })

}
//deleteMovies(255);


// Post Movies
function addMovie(){
    const movie = {title: 'Ajax Requests', body: 'Are a fun way to use JS!'};
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(movie),
    };
    fetch(glitchURL, options)
        .then(function(response){
            console.log(response);
        })
}

//addMovie();























