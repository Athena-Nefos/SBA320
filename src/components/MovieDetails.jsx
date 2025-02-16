export function MovieDetails({ onSaveMovie }) {
    const { id } = useParams()
    const [movie, setMovie] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    
    // Fetch detailed movie information when component mounts
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
    
    if (loading) return <p>Loading...</p>
    if (error) return <p className="text-red-500">{error}</p>
    if (!movie) return <p>Movie not found</p>
    
    return (
        <div className="max-w-2xl mx-auto">
        <img 
            src={movie.Poster !== 'N/A' ? movie.Poster : '/placeholder.png'}
            alt={movie.Title}
            className="w-full h-96 object-cover mb-4"
        />
        <h2 className="text-2xl font-bold mb-2">{movie.Title}</h2>
        <p className="mb-2">{movie.Plot}</p>
        <div className="grid grid-cols-2 gap-4 mb-4">
            <p><strong>Year:</strong> {movie.Year}</p>
            <p><strong>Rating:</strong> {movie.Rated}</p>
            <p><strong>Runtime:</strong> {movie.Runtime}</p>
            <p><strong>Genre:</strong> {movie.Genre}</p>
            <p><strong>Director:</strong> {movie.Director}</p>
            <p><strong>Actors:</strong> {movie.Actors}</p>
        </div>
        <button
            onClick={() => onSaveMovie(movie)}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
            Save for Movie Night
        </button>
        </div>
    )
    }