import { Component } from "react";
import MovieCard from "./Moviecard";

class MovieList extends Component {
  constructor() {
    super();
    this.state = {
      cartCount: 0,
      movies: [
        {
          id: 1,
          title: "The Avengers",
          plot: "Supernatural heroes",
          price: 199,
          rating: 8.9,
          stars: 0,
          fav: false,
          isInCart: false,
        },
        {
          id: 2,
          title: "The Avengers",
          plot: "Supernatural heroes",
          price: 199,
          rating: 8.9,
          stars: 0,
          fav: false,
          isInCart: false,
        },
        {
          id: 3,
          title: "The Avengers",
          plot: "Supernatural heroes",
          price: 199,
          rating: 8.9,
          stars: 0,
          fav: false,
          isInCart: false,
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
  handleToggleFav = (movie) => {
    const { movies } = this.state;
    const movieId = movies.indexOf(movie);
    movies[movieId].fav = !movies[movieId].fav;
    this.setState({
      movies: movies,
    });
  };
  handleToggleCart = (movie) => {
    let { movies, cartCount } = this.state;
    const movieId = movies.indexOf(movie);
    movies[movieId].isInCart = !movies[movieId].isInCart;
    if (movies[movieId].isInCart) cartCount++;
    else cartCount--;
    this.setState({
      movies: movies,
      cartCount: cartCount,
    });
    console.log(cartCount);
  };
  render() {
    const { movies, cartCount } = this.state;
    return (
      <>
        {movies.map((movie) => (
          <MovieCard
            movies={movie}
            addStars={this.handleIncStar}
            decStars={this.handleDecStar}
            toggleFav={this.handleToggleFav}
            toggleCart={this.handleToggleCart}
            key={movie.id}
          />
        ))}
      </>
    );
  }
}

export default MovieList;
