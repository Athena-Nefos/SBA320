Movie Night App
A React application to help you find and organize movies for your movie night. Search for movies, view details, and create a watchlist using the OMDB API.
Features

Search for movies using the OMDB API
View detailed information about each movie
Save movies to a "Movie Night" list
Remove movies from your saved list
Responsive design for all screen sizes
Clean, modern user interface

Prerequisites
Before you begin, ensure you have installed:

Node.js (v14 or higher)
npm (comes with Node.js)

Setup

Clone the repository:

git clone [your-repository-url]
cd movie-night-app

Install dependencies:

npm install

Get an API key:


Visit OMDB API
Request an API key
Replace YOUR_API_KEY in the code with your actual API key


Start the development server:

npm run dev

Open your browser and visit:

http://localhost:5173

Project Structure

src/
  ├── components/
  │   ├── MovieSearch.jsx   # Search functionality and results display
  │   ├── MovieDetails.jsx  # Detailed view of a single movie
  │   └── SavedMovies.jsx   # Saved movies list management
  ├── App.jsx              # Main application component
  └── App.css              # Application styles

  Technologies Used

React
React Router DOM
Vite
OMDB API
CSS3

Usage

Search for movies using the search bar
Click "View Details" to see more information about a movie
Save movies to your Movie Night list using the "Save for Movie Night" button
View your saved movies by clicking "Movie Night List" in the navigation
Remove movies from your list using the "Remove from List" button

Contributing

Fork the repository
Create a new branch for your feature
Commit your changes
Push to the branch
Create a Pull Request

Acknowledgments

OMDB API for providing movie data
React for the framework
Vite for the build tool