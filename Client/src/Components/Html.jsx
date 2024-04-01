import { Link } from "react-router-dom";
function Html() {
  return (
    <section className="courses_card_container">
      <div className="courses_smallCard">
        <Link className="bg-white" to="/quiz">
          HTML Tag List
        </Link>
        <Link className="bg-pink" to="/">
          HTML Attributes
        </Link>
        <Link className="bg-blue" to="/">
          HTML Global Attributes
        </Link>
        <Link className="bg-pink" to="/">
          HTML Browser Support
        </Link>
        <Link className="bg-yellow" to="/">
          HTML Events
        </Link>

        <Link className="bg-white" to="/">
          HTML Colors
        </Link>
        <Link className="bg-pink" to="/">
          HTML Canvas
        </Link>
        <Link className="bg-blue" to="/">
          HTML Audio/Video
        </Link>
        <Link className="bg-pink" to="/">
          HTML Doctypes
        </Link>
        <Link className="bg-yellow" to="/">
          HTML Character Sets
        </Link>

        <Link className="bg-white" to="/">
          HTML URL Encodes
        </Link>
        <Link className="bg-yellow" to="/">
          HTML Lang Codes
        </Link>
        <Link className="bg-blue" to="/">
          HTML Messages
        </Link>
        <Link className="bg-pink" to="/">
          HTML Methods
        </Link>
        <Link className="bg-yellow" to="/">
          HTML Geolocation
        </Link>

        <Link className="bg-white" to="/">
          HTML Drag/Drop
        </Link>
        <Link className="bg-yellow" to="/">
          HTML Web Storage
        </Link>
        <Link className="bg-blue" to="/">
          HTML Webworkers
        </Link>
        <Link className="bg-pink" to="/">
          HTML SSE
        </Link>
        <Link className="bg-yellow" to="/">
          HTML Forms
        </Link>

        <Link className="bg-white" to="/">
          HTML Entites
        </Link>
        <Link className="bg-pink" to="/">
          HTML Symbols
        </Link>
        <Link className="bg-blue" to="/">
          HTML Emojis
        </Link>
        <Link className="bg-pink" to="/">
          HTML Style Guide
        </Link>
      </div>
    </section>
  );
}

export default Html;
