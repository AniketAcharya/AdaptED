import React, { forwardRef } from "react";

const Footer = forwardRef((props, ref) => {
  return (
    <>
      <footer ref={ref} className="footer">
        <div className="socialMedia">
          <span>
            Learn anything, Adapted for you. Our website optimizes based on what
            your goal is. Get the most out of your time and effort spent.
          </span>
          <a href="https://github.com/AniketAcharya">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://www.instagram.com/a.ni.k.et?igsh=YjUyYWsyMzd1Y2I3">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/in/aniket-acharya-7a20a3128/">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="tel:9638967057">
            <i className="fa-brands fa-whatsapp"></i>
          </a>
          <a href="mailto:aniketpop@gmail.com">
            <i className="fa-brands fa-google"></i>
          </a>
        </div>
      </footer>
    </>
  );
});

export default Footer;
