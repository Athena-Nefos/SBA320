export function MovieSearch({ onSaveMovie, savedMovies }) {
    const [search, setSearch] = useState('')
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    
    const searchMovies = async (e) => {
        e.preventDefault()
        setLoading(true)
        setError(null)
        
        try {
        const response = await fetch(
            `http://www.omdbapi.com/?s=${search}&apikey=YOUR_API_KEY`
        )
        const data = await response.json()
        
        if (data.Response === 'True') {
            setMovies(data.Search)
        } else {
                setError(data.Error)
        }
        } catch (err) {
        setError('Failed to fetch movies')
        } finally {
        setLoading(false)
        }
    }
    
    return (
      <div className="fade-in"> {/* Added fade-in animation */}
        {/* Updated form with new styling */}
        <form onSubmit={searchMovies} className="search-form">
            <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for movies..."
            className="search-input"
            />
            <button 
            type="submit"
            className="btn btn-primary"
            disabled={loading}
            >
            Search
            </button>
        </form>
        
        {/* Added specific classes for loading and error states */}
        {loading && <p className="loading">Loading...</p>}
        {error && <p className="error">{error}</p>}
        
        {/* Updated movie grid with new styling */}
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
                <div>
                    <Link 
                    to={`/movie/${movie.imdbID}`}
                    className="btn btn-primary"
                    >
                    View Details
                    </Link>
                    <button
                    onClick={() => onSaveMovie(movie)}
                    disabled={savedMovies.some(m => m.imdbID === movie.imdbID)}
                    className="btn btn-success"
                    >
                    {savedMovies.some(m => m.imdbID === movie.imdbID) 
                        ? 'Saved' 
                        : 'Save for Movie Night'}
                    </button>
                </div>
                </div>
            </div>
            ))}
        </div>
        </div>
    )
    }