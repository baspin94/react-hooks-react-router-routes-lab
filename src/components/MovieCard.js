function MovieCard({title, time, genreListings}) {
    return(
        <div>
            <h2>Name: {title}</h2>
            <p>Time: {time}</p>
            <p>Genres:</p>
            <ul>
                {genreListings}
            </ul>
      </div>
    )
}

export default MovieCard;