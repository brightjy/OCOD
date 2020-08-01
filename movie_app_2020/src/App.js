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
      /* javascript에서 html의 class는 className이라 해줘야 한다. 
      * class 라고 하면 class 랑 헷갈려 함
      */
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div> 
        ) : (
          <div className="movies">
            {movies.map(movie => (
              <Movie 
                key={movie.id}
                id={movie.id}
                year={movie.year} 
                title={movie.title} 
                summary={movie.summary} 
                poster={movie.medium_cover_image}
                genres={movie.genres} 
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default App;
