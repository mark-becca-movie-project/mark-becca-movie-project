import React, {useState, useEffect} from "react"
import axios from './axios';
import keys from "./keys.js";


function Row({title, fetchUrl}) {
    const [movies, setMovies] = useState([]); //starts as empty movie array
    // so now we need a snippet of code which runs based on a specific condition or variable
    //       a really handy hook from react is called useEffect
    useEffect(() => {
        //when row loads on page load, this code runs
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);          /* if we leave brackets blank, run once when the row loads,  and don't run it again*/

    return (
        <div>
            <h2>{title}</h2>
            {/*{container with posters inside}*/}
        </div>
    )
}
export default Row

/*
Notes:  //use state to keep track of the movies - mark
    //state can be considered, short term memory
    //state is a way to write variables in react
    //hooks is a way to make your life easier, give an initial value inside the brackets
    //syntatic sugar = {title}
    to use async write an internal function then call it

 */