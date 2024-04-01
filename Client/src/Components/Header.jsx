import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Header({ footerRef }) {
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  const handleLogout = () => {
    axios
      .get("http://localhost:3000/auth/logout")
      .then((res) => {
        if (res.data.status) {
          navigate("/login");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleClick = () => {
    if (footerRef.current) {
      window.scrollTo({
        top: footerRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const mystyle = {
    height: "60px",
    paddingBottom: "5px",
  };

  return (
    <header>
      <div className="header-left">
        <Link to={"/"} className="menu-btn">
          <div className="w3schools-logo">
            <img src="./src/assets/react.svg" />
          </div>
        </Link>
        <Link to={"/"} className="menu-btn" id="video-btn">
          {" "}
          Home{" "}
        </Link>
        <button onClick={handleClick} className="menu-btn1" id="video-btn">
          {" "}
          Contact{" "}
        </button>
      </div>
      <div className="center-top">
        <img src="src\assets\img.avif" style={mystyle} />
      </div>
      <div className="header-right">
        <button
          onClick={handleLogout}
          className="btn btn-link bg-green"
          id="login-btn"
          style={{ width: "200px", borderRadius: "15px" }}
        >
          Logout
        </button>
      </div>
    </header>
  );
}

export default Header;
