import React from "react";
import { Link } from "gatsby";
import Logo from "components/_ui/Logo";
import Container from "components/Container";
import "./header.scss";

const Header = () => (
  <header className="globalHeader">
    <Container>
      <Link className="logo-link" to="/">
        <Logo />
      </Link>
      <nav>
        <Link activeClassName="Link--is-active" to="/work">
          Work
        </Link>
        <Link activeClassName="Link--is-active" to="/blog">
          Blog
        </Link>
      </nav>
    </Container>
  </header>
);

export default Header;
