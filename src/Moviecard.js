import { Component } from "react";

class MovieCard extends Component {
  render() {
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
            <div className="title">The avengers</div>
            <div className="plot">lorem</div>
            <div className="price">Rs 199</div>
            <div className="footer">
              <div className="rating">8.9</div>
              <div className="stars">Stars</div>
              <div className="favourite-btn">Favourite</div>
              <div className="cart-btn">Add to Cart</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
