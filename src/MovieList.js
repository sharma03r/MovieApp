import { Component } from "react";
import MovieCard from "./Moviecard";

class MovieList extends Component {
  constructor() {
    super();
    this.state = {
      movies: [
        {
          title: "The Avengers",
          plot: "Supernatural heroes",
          price: 199,
          rating: 8.9,
          stars: 0,
          fav: false,
        },
        {
          title: "The Avengers",
          plot: "Supernatural heroes",
          price: 199,
          rating: 8.9,
          stars: 0,
          fav: false,
        },
        {
          title: "The Avengers",
          plot: "Supernatural heroes",
          price: 199,
          rating: 8.9,
          stars: 0,
          fav: false,
        },
      ],
    };
  }
  handleIncStar = (movie) => {
    const { movies } = this.state;
    const movieId = movies.indexOf(movie);
    if (movies[movieId].stars >= 5) {
      return;
    }
    movies[movieId].stars += 0.5;
    this.setState({
      movies: movies,
    });
  };
  handleDecStar = (movie) => {
    const { movies } = this.state;
    const movieId = movies.indexOf(movie);
    if (movies[movieId].stars <= 0) {
      return;
    }
    movies[movieId].stars -= 0.5;
    this.setState({
      movies: movies,
    });
  };
  render() {
    const { movies } = this.state;
    return (
      <>
        {movies.map((movie) => (
          <MovieCard
            movies={movie}
            addStars={this.handleIncStar}
            decStars={this.handleDecStar}
          />
        ))}
      </>
    );
  }
}

export default MovieList;
