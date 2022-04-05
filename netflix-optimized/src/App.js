import React from 'react';
import './App.css';
import Row from "./Row.js" ;
import requests from  './requests';
import keys from './keys';


function App() {
  return (

    <div className="App">
      <h1>awesomeSauce</h1>
        <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
        <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
      {/*{requests.}*/}
    </div>
  );
}

export default App;

//step 1: get movies and build rows at same time
//...every row is one component, we are passing in props = properties
//react is revolved around component based design
//you write one compoentn and you resuse it by passing in different props

