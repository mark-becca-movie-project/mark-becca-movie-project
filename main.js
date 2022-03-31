// url: https://island-momentous-plot.glitch.me/movies

const glitchURL = "https://island-momentous-plot.glitch.me/movies";
//

//Get alll the good stuff
const getMovies = async () => {
  const res = await fetch(glitchURL);
  const data = await res.json();
  return data;
};

//get all good stuff again - check
fetch(glitchURL)
  .then(res => res.json())
  .then(data => console.log(data)); //check


//TODO: Check this ^


