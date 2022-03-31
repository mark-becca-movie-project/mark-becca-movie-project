// url: https://island-momentous-plot.glitch.me/movies

const glitchURL = "https://island-momentous-plot.glitch.me/movies";

fetch (glitchURL)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    const movieList = document.querySelector("#movie-list");
    data.forEach(movie => {
      const movieItem = document.createElement("li");
      movieItem.innerHTML = `
        <h2>${movie.title}</h2>
        <p>${movie.description}</p>
      `;
      movieList.appendChild(movieItem);
    });
  });



//Get all the good stuff
//       const getMovies = async () => {
//         const res = await fetch(glitchURL);
//         const data = await res.json();
//         return data;
//       };
//needs to be invoked  ^


//get all good stuff again - check
//       fetch(glitchURL)
//           .then(res => res.json())
//           .then(data => console.log(data)); //this is the data





































