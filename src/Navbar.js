import { Component } from "react";
import styled from "styled-components";

const Nav = styled.div`
  width: 100%;
  height: 70px;
  background: #4267b2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

class Navbar extends Component {
  render() {
    return (
      <>
        <Nav>
          <div className="title" style={styles.title}>
            Movie App
          </div>
          <div style={styles.cartContainer}>
            <img
              alt="Cart icon"
              src="https://cdn-icons-png.flaticon.com/128/891/891462.png"
              style={styles.cartIcon}
            />
            <span style={styles.cartCount}>3</span>
          </div>
        </Nav>
      </>
    );
  }
}

const styles = {
  title: {
    fontSize: 30,
    color: "#fff",
    fontWeight: 600,
    fontFamily: `"Montserrat", "sans-serif"`,
    textTransform: "uppercase",
    marginLeft: 20,
  },
  cartContainer: {
    position: "relative",
    cursor: "pointer",
  },
  cartIcon: {
    height: 48,
    marginRight: 20,
  },
  cartCount: {
    background: "orange",
    borderRadius: "50%",
    padding: "4px 8px",
    position: "absolute",
    right: 10,
    top: -5,
    fontSize: 12,
  },
};
export default Navbar;
