import React from "react";
import Container from "./Container";

function Footer() {
  return (
    <Container>
    <footer id="sticky-footer" className="py-4 bg-dark text-white-50">
      <div className="container text-center" id="footerText">
        <small>Movie Watch List &copy; Eduardo, JC, and Luis</small>
      </div>
    </footer>
    </Container>
  );
}

export default Footer;
