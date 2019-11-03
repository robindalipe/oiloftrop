import React from "react";
import styled from "@emotion/styled";
import dimensions from "styles/dimensions";
import { RichText } from "prismic-reactjs";
import PropTypes from "prop-types";
import "./about.scss";

const AboutContainer = styled("div")`
    padding-top: 1em;
    display: grid;
    grid-template-columns: 50% 50%;
    grid-gap: 2em;

    @media(max-width: ${dimensions.maxwidthTablet}px) {
        grid-template-columns: 1fr 3fr 1fr;
    }

    @media(max-width: ${dimensions.maxwidthMobile}px) {
        grid-template-columns: 7em 1fr;
        grid-template-rows: 3em 1fr;
        grid-gap: 2em;
    }
`

const AboutBio = styled("div")`
    padding-bottom: 3em;
    max-width: 480px;


    @media(max-width: ${dimensions.maxwidthMobile}px) {
        grid-row: 2;
    }
`

const About = ({ bio, content }) => (
    <AboutContainer>
        <AboutBio>
            {bio && RichText.render(bio)}
        </AboutBio>
        <AboutBio>
            {content && RichText.render(content)}
        </AboutBio>
    </AboutContainer>
)

export default About;

About.propTypes = {
    bio: PropTypes.array.isRequired,
    socialLinks: PropTypes.array,
};