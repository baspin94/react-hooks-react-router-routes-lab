import React from "react";
import { directors } from "../data";
import DirectorCard from "./DirectorCard";
import { v4 as uuid } from "uuid";;


function Directors() {

  const directorsArray =  directors.map(director => {
    const id = uuid();
    const movies = director.movies;
    const movieListings = movies.map(movie => {
      const movieId= uuid();
      return <li key={movieId}>{movie}</li>
    })
    return <DirectorCard key={id} name={director.name} movieListings={movieListings}/>
  })
  return (
    <div>
      <h1>Directors Page</h1>
      {directorsArray}
    </div>
  );
}

export default Directors;
