// url: https://island-momentous-plot.glitch.me/movies

const glitchURL = "https://island-momentous-plot.glitch.me/movies";
//

//Get alll the good stuff
const getMovies = async () => {
  const res = await fetch(glitchURL);
  const data = await res.json();
  return data;
};

//TODO: Check this ^


