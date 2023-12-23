import { Component } from "react";

class MovieCard extends Component {
  constructor() {
    super();
    this.state = {
      title: "The Avengers",
      plot: "Supernatural heroes",
      price: 199,
      rating: 8.9,
      stars: 0,
      fav: false,
    };
  }
  addStars = () => {
    this.setState((prevState) => {
      if (prevState.stars >= 5) {
        return;
      }
      return {
        stars: prevState.stars + 0.5,
      };
    });
  };
  toggleFavorite = () => {
    this.setState({
      fav: !this.state.fav,
    });
  };
  render() {
    const { title, plot, price, rating, stars, fav } = this.state;
    return (
      <div className="main">
        <div className="movie-card">
          <div className="left">
            <img
              alt="poster"
              src="https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
            />
          </div>
          <div className="right">
            <div className="title">{title}</div>
            <div className="plot">{plot}</div>
            <div className="price">Rs {price}</div>
            <div className="footer">
              <div className="rating">{rating}</div>
              <div className="star-dis">
                <img
                  className="str-btn"
                  alt="decrease"
                  src="https://cdn-icons-png.flaticon.com/128/9146/9146915.png"
                />
                <img
                  className="stars"
                  alt="star"
                  src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                />
                <img
                  className="str-btn"
                  alt="increase"
                  src="https://cdn-icons-png.flaticon.com/128/3524/3524388.png"
                  onClick={this.addStars}
                />
                <span> {stars}</span>
              </div>
              {
                <button
                  className={fav ? "favourite-btn" : "unfavourite-btn"}
                  onClick={this.toggleFavorite}
                >
                  {fav ? "Unfavourite" : "Favourite"}
                </button>
              }

              <button className="cart-btn">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
