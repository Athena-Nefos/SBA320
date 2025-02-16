import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { useState } from 'react'
import MovieSearch from './components/MovieSearch.jsx'
import MovieDetails from './components/MovieDetails.jsx/index.js'
import './App.css'

function App() {
  // State to store the list of saved movies for movie night
  const [savedMovies, setSavedMovies] = useState([])

  // Function to add a movie to the saved list
  const handleSaveMovie = (movie) => {
    if (!savedMovies.find(m => m.imdbID === movie.imdbID)) {
      setSavedMovies([...savedMovies, movie])
    }
  }

  // Function to remove a movie from the saved list
  const handleRemoveMovie = (movieId) => {
    setSavedMovies(savedMovies.filter(movie => movie.imdbID !== movieId))
  }

  return (
    <Router>
      <div className="min-h-screen bg-gray-100 p-6">
        <nav className="mb-6">
          <ul className="flex gap-4">
            <li>
              <Link to="/" className="text-blue-600 hover:text-blue-800">Search Movies</Link>
            </li>
            <li>
              <Link to="/saved" className="text-blue-600 hover:text-blue-800">Movie Night List ({savedMovies.length})</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route 
            path="/" 
            element={
              <MovieSearch 
                onSaveMovie={handleSaveMovie} 
                savedMovies={savedMovies}
              />
            } 
          />
          <Route 
            path="/movie/:id" 
            element={<MovieDetails onSaveMovie={handleSaveMovie} />} 
          />
          <Route 
            path="/saved" 
            element={
              <SavedMovies 
                movies={savedMovies} 
                onRemoveMovie={handleRemoveMovie}
              />
            } 
          />
        </Routes>
      </div>
    </Router>
  )
}