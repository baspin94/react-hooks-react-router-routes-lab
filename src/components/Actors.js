import React from "react";
import { actors } from "../data";
import CrewCard from "./CrewCard"
import { v4 as uuid } from "uuid";

function Actors() {

  const actorsArray =  actors.map(actor => {
    const id = uuid();
    const movies = actor.movies;
    const movieListings = movies.map(movie => {
      const movieId= uuid();
      return <li key={movieId}>{movie}</li>
    })
    return <CrewCard key={id} name={actor.name} movieListings={movieListings}/>
  })

  return (
    <div>
      <h1>Actors Page</h1>
      {actorsArray}
    </div>
  );
}

export default Actors;
