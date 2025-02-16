export function SavedMovies({ movies, onRemoveMovie }) {
    return (
        <div className="fade-in">
        <h2 className="movie-title">Movie Night List</h2>
        {movies.length === 0 ? (
            <p className="text-center">No movies saved yet. Search and save some movies for movie night!</p>
        ) : (
            <div className="movie-grid">
            {movies.map(movie => (
                <div key={movie.imdbID} className="movie-card">
                <img 
                    src={movie.Poster !== 'N/A' ? movie.Poster : '/placeholder.png'}
                    alt={movie.Title}
                    className="movie-poster"
                />
                <div className="movie-info">
                    <h3 className="movie-title">{movie.Title}</h3>
                    <p className="movie-year">Year: {movie.Year}</p>
                    <button
                    onClick={() => onRemoveMovie(movie.imdbID)}
                    className="btn btn-danger"
                    >
                    Remove from List
                    </button>
                </div>
                </div>
            ))}
            </div>
        )}
        </div>
    )
    }