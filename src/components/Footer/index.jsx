import React from "react";
import { Link } from "gatsby";
import Logo from "components/_ui/Logo";
import "./footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => (
    <footer>
        <Link to="/">
            <Logo />
        </Link>
        <div className="socials">
            <a href="http://www.github.com/robindalipe" target="_blank" aria-label="Github" rel="noopener norefferer">
            <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="http://www.instagram.com/rbndlp" target="_blank" aria-label="Instagram" rel="noopener norefferer">
            <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="http://www.twitter.com/robindalipe" target="_blank" aria-label="Twitter" rel="noopener norefferer">
            <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="http://www.linkedin.com/robindalipe" target="_blank" aria-label="LinkedIn" rel="noopener norefferer">
            <FontAwesomeIcon icon={faLinkedin} />
            </a>
        </div>
        <Link to="https://robindalipe.com">
            © 2019 — Designed &amp; developed by Robin Dalipe
        </Link>
    </footer>
)

export default Footer;
