export function MovieSearch({ onSaveMovie, savedMovies }) {
    
    const [search, setSearch] = useState('')
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    
    // Function to search movies using OMDB API
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
        <div>
        <form onSubmit={searchMovies} className="mb-6">
            <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for movies..."
            className="p-2 border rounded mr-2"
            />
            <button 
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            disabled={loading}
            >
            Search
            </button>
        </form>
        
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
        
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
                <div className="mt-2">
                <Link 
                    to={`/movie/${movie.imdbID}`}
                    className="text-blue-500 hover:text-blue-700 mr-2"
                >
                    View Details
                </Link>
                <button
                    onClick={() => onSaveMovie(movie)}
                    disabled={savedMovies.some(m => m.imdbID === movie.imdbID)}
                    className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600 disabled:bg-gray-400"
                >
                    {savedMovies.some(m => m.imdbID === movie.imdbID) 
                    ? 'Saved' 
                    : 'Save for Movie Night'}
                </button>
                </div>
            </div>
            ))}
        </div>
        </div>
    )
    }