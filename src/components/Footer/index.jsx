import React from "react";
import "./footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

function SocialLink({ url, label, icon }) {
    return (
        <a href={url} rel="noopener noreferrer" target="_blank" aria-label={label}>
            <FontAwesomeIcon icon={icon} />
        </a>
    )
}

const Footer = () => {
    const currentTime = new Date()
    const currentYear = currentTime.getFullYear();
    return (
        <footer>
            <div className="socials">
                <SocialLink url="https://www.github.com/robindalipe" label="Github" icon={faGithub} />
                <SocialLink url="https://www.instagram.com/robindalipe" label="Instagram" icon={faInstagram} />
                <SocialLink url="https://www.twitter.com/robindalipe" label="Twitter" icon={faTwitter} />
                <SocialLink url="https://www.linkedin.com/in/robin-dalipe-664a5352" label="LinkedIn" icon={faLinkedin} />
            </div>
            <p>&copy; { currentYear } — Made by Robin</p>
        </footer>
    )
}

export default Footer;
