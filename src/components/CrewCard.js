function CrewCard({name, movieListings}){
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

export default CrewCard;