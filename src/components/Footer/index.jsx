import React from "react";
import { Link } from "gatsby";
import Logo from "components/_ui/Logo";
import "./footer.scss";

const Footer = () => (
    <footer>
        <Link to="/">
            <Logo />
        </Link>
        <Link to="https://robindalipe.com">
            © 2019 — Designed &amp; developed by Robin Dalipe
        </Link>
    </footer>
)

export default Footer;
