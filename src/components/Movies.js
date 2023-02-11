import React from "react";
import { movies } from "../data";
import MovieCard from "./MovieCard";
import { v4 as uuid } from "uuid";

function Movies() {

  const moviesArray = movies.map(movie => {
    const id = uuid();
    const genres = movie.genres;
    const genreListings = genres.map(genre => {
      const genreId= uuid();
      return <li key={genreId}>{genre}</li>
    })
    return (
      <MovieCard 
        key={id} 
        title={movie.title} 
        time={movie.time} 
        genreListings={genreListings}
      />
    )
  })

  return (
    <div>
      <h1>Movies Page</h1>
      {moviesArray}
    </div>

  );
}

export default Movies;
