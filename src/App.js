import React from 'react';
import axios from 'axios';
import './App.css';
import Movie from './Movie';
import './Movie.css';


class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
    
  };
  getMovies = async () => {
    const {data : {data:{movies}}} = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating")
    this.setState({movies, isLoading:false})
  }
  componentDidMount() {
    this.getMovies();
  }


  render() {
    const { isLoading , movies}  = this.state;
    return <section className="container">
      {isLoading ? (
    <div className="loader">
      <span className="loader__text">Loading...</span>
    </div>
      ) : (
          <div className='m_container'>
          <div className='titleCard'><h2>Try Your Amazing Movie</h2></div>
          <div className="movies">
            
            {movies.map(movie =>(
            <Movie 
              kye = {movie.id} 
              id={movie.id} 
              genre={movie.genre}
              year={movie.year} 
              title={movie.title} 
              summary={movie.summary} 
              poster={movie.medium_cover_image} 
              genres={movie.genres}
            />
          ))}
        </div>
        </div>
        )}
    </section>
  }
}


export default App;
