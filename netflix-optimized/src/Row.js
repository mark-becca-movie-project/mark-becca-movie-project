import React, {useState} from "react"

function Row({ title }){
    const [movies, setMovies] = useState([]); //starts as empty movie array

    //use state to keep track of the movies - mark
    //state can be considered, short term memory
    //state is a way to write variables in react
    //hooks is a way to make your life easier, give an initial value inside the brackets
    return (
        <div>
            <h2>{title}</h2>
            


            {/*{container with posters inside}*/}

        </div>
    )
}

export default Row
//syntatic sugar = {title}