import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import { MovieSearch } from './components/MovieSearch.jsx';
import { MovieDetails } from './components/MovieDetails.jsx';
import { SavedMovies } from './components/SavedMovies.jsx';
import './App.css';

function App() {
  const [savedMovies, setSavedMovies] = useState([])

  const handleSaveMovie = (movie) => {
    if (!savedMovies.find(m => m.imdbID === movie.imdbID)) {
      setSavedMovies([...savedMovies, movie])
    }
  }

  const handleRemoveMovie = (movieId) => {
    setSavedMovies(savedMovies.filter(movie => movie.imdbID !== movieId))
  }

  return (
    <Router>
      
      <div className="container">
        
        <nav>
          <ul>
            <li>
              <Link to="/">Search Movies</Link>
            </li>
            <li>
              <Link to="/saved">Movie Night List ({savedMovies.length})</Link>
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

export default App;