export function SavedMovies({ movies, onRemoveMovie }) {
    return (
        <div>
        <h2 className="text-2xl font-bold mb-4">Movie Night List</h2>
        {movies.length === 0 ? (
            <p>No movies saved yet. Search and save some movies for movie night!</p>
        ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {movies.map(movie => (
                <div key={movie.imdbID} className="border p-4 rounded">
                <img 
                    src={movie.Poster !== 'N/A' ? movie.Poster : '/placeholder.png'}
                    alt={movie.Title}
                    className="w-full h-64 object-cover mb-2"
                />
                <h3 className="font-bold">{movie.Title}</h3>
                <p>Year: {movie.Year}</p>
                <button
                    onClick={() => onRemoveMovie(movie.imdbID)}
                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 mt-2"
                >
                    Remove from List
                </button>
                </div>
            ))}
            </div>
        )}
        </div>
    )
    }