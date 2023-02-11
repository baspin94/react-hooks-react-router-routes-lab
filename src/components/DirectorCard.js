function DirectorCard({name, movieListings}){
    return (
        <div>
            <h2>Name: {name}</h2>
            <p>Movies:</p>
            <ul>
                {movieListings}
            </ul>
        </div>

    );
}

export default DirectorCard;