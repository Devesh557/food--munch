import { useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");

  const handleRedirect = (url) => {
    window.location.href = url; // Redirects to the specified URL
  };

  return (
    <div className="navbar">
      <Link to="/">
        <img src={assets.logo1} alt="" className="logo" />
      </Link>
      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          menu
        </a>
        {/* <li onClick={()=>setMenu("library")} className={menu==="library"?"active":""}>library</li> */}
        <li
          onClick={() => {
            setMenu("library"), handleRedirect("http://localhost:3000/book");
          }}
          className={menu === "library" ? "active" : ""}
        >
          library
        </li>

        <li
          onClick={() => {
            setMenu("recipe"), handleRedirect("http://localhost:3001/book");
          }}
          className={menu === "recipe" ? "active" : ""}
        >
          Recipe Generator
        </li>

        <Link to="/blogs">
          <li
            onClick={() => setMenu("blogs")}
            className={menu === "blogs" ? "active" : ""}
          >
            blogs
          </li>
        </Link>
        <a
          href="#footer"
          onClick={() => setMenu("contact-us")}
          className={menu === "contact-us" ? "active" : ""}
        >
          contact-us
        </a>
      </ul>
      <div className="navbar-right">
        <button onClick={() => setShowLogin(true)}>sign in</button>
      </div>
    </div>
  );
};

export default Navbar;

// return (
//   <nav>
//     <ul>
//       <li onClick={() => handleRedirect("http://localhost:3001/book")}>
//         Library
//       </li>
//       {/* Other navbar items */}
//     </ul>
//   </nav>
// );

//   <li
//     onClick={() => handleRedirect("http://localhost:3001/book")}
//     className={menu === "library" ? "active" : ""}
//   >
//     library
//   </li>;
