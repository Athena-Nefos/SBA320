export function MovieDetails({ onSaveMovie }) {
    const { id } = useParams()
    const [movie, setMovie] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    
    useEffect(() => {
        const fetchMovieDetails = async () => {
        try {
            const response = await fetch(
            `http://www.omdbapi.com/?i=${id}&apikey=YOUR_API_KEY`
            )
            const data = await response.json()

            if (data.Response === 'True') {
            setMovie(data)
            } else {
            setError(data.Error)
            }
        } catch (err) {
            setError('Failed to fetch movie details')
        } finally {
            setLoading(false)
        }
        }

        fetchMovieDetails()
    }, [id])
    
    if (loading) return <p className="loading">Loading...</p>
    if (error) return <p className="error">{error}</p>
    if (!movie) return <p className="error">Movie not found</p>
    
    return (
        <div className="movie-details fade-in">
        <img 
            src={movie.Poster !== 'N/A' ? movie.Poster : '/placeholder.png'}
            alt={movie.Title}
            className="movie-details-poster"
        />
        <h2 className="movie-title">{movie.Title}</h2>
        <p>{movie.Plot}</p>
        <div className="movie-details-info">
            <p><strong>Year:</strong> {movie.Year}</p>
            <p><strong>Rating:</strong> {movie.Rated}</p>
            <p><strong>Runtime:</strong> {movie.Runtime}</p>
            <p><strong>Genre:</strong> {movie.Genre}</p>
            <p><strong>Director:</strong> {movie.Director}</p>
            <p><strong>Actors:</strong> {movie.Actors}</p>
        </div>
        <button
            onClick={() => onSaveMovie(movie)}
            className="btn btn-success"
        >
            Save for Movie Night
        </button>
        </div>
    )
    }