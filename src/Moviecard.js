import { Component } from "react";

class MovieCard extends Component {
  render() {
    const { title, plot, price, rating, stars, fav, isInCart } =
      this.props.movies;
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
                  onClick={() => {
                    this.props.decStars(this.props.movies);
                  }}
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
                  onClick={() => {
                    this.props.addStars(this.props.movies);
                  }}
                />
                <span> {stars}</span>
              </div>
              {
                <button
                  className={fav ? "favourite-btn" : "unfavourite-btn"}
                  onClick={() => {
                    this.props.toggleFav(this.props.movies);
                  }}
                >
                  {fav ? "Unfavourite" : "Favourite"}
                </button>
              }

              <button
                className="cart-btn"
                onClick={() => {
                  this.props.toggleCart(this.props.movies);
                }}
              >
                {isInCart ? "Remove From Cart" : "Add to Cart"}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
