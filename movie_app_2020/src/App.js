import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import './Movie.css';
import './App.css';


/**
 * 2020.07.28 
 * setState를 할 때마다 react는 새로운 state와 함께 render function을 호출!
 */


class App extends React.Component{

  state = {
    isLoading: true,
    movies: []
  };

  /** 
   * 2020.07.30
   * async, await: getMovies 호출에 시간이 걸린다고 javaScript에 말해주기 
   * */
  getMovies = async () => {
    const {
      data: {
        data: { movies }
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    this.setState({ movies, isLoading: false });
  };

  componentDidMount(){
    this.getMovies();
  }

  render(){
    const { isLoading, movies } = this.state;
    return (
      <section class="container">
        {isLoading ? (
          <div class="loader">
            <span class="loader__text">Loading...</span>
          </div> 
        ) : (
          <div class="movies">
            {movies.map(movie => (
              <Movie 
                key={movie.id}
                id={movie.id}
                year={movie.year} 
                title={movie.title} 
                summary={movie.summary} 
                poster={movie.medium_cover_image} 
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default App;
