import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "../assets/AdaptEd.png";

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
    height: "90px",
    marginTop: "-23px",
  };

  return (
    <header>
      <div className="header-left">
        <Link to={"/"} className="">
          <div className="w3schools-logo">
            <img src="./src/assets/books.png" />
          </div>
        </Link>
        <button
          onClick={() => {
            navigate("/");
          }}
          className="menu-btn"
        >
          Home
        </button>
        <button onClick={handleClick} className="menu-btn">
          Contact
        </button>
      </div>
      <div className="center-top">
        <img src={logo} style={mystyle} />
      </div>
      <div className="header-right">
        <button onClick={handleLogout} className="menu-btn1">
          Logout
        </button>
      </div>
    </header>
  );
}

export default Header;
