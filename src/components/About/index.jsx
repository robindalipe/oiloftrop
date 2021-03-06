import React from "react";
import { RichText } from "prismic-reactjs";
import PropTypes from "prop-types";
import "./about.scss";

const About = ({ bio, content }) => (
    <div className="grid-container">
        <div className="bios bold">
            {bio && RichText.render(bio)}
        </div>
        <div className="bios">
            {content && RichText.render(content)}
        </div>
    </div>
)

export default About;

About.propTypes = {
    bio: PropTypes.array.isRequired,
    socialLinks: PropTypes.array,
};