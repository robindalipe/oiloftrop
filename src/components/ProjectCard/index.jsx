import React from "react";
import { Link } from "gatsby";
import { RichText } from "prismic-reactjs";
import PropTypes from "prop-types";
import "./projectcard.scss";

const ProjectCard = ({ category, title, description, thumbnail, uid }) => (
  <Link to={`/work/${uid}`} className="ProjectCardContainer">
    <div className="ProjectCard">
      <div className="ProjectCardImageContainer">
        <img src={thumbnail.url} alt={title[0].text} />
      </div>
      <div className="ProjectCardContent">
        <h6>{category[0].text}</h6>
        <h3>{title[0].text}</h3>
        <div className="ProjectCardBlurb">{RichText.render(description)}</div>
        <div className="ProjectCardAction">
          Details <span>&#8594;</span>
        </div>
      </div>
    </div>
  </Link>
);

export default ProjectCard;

ProjectCard.propTypes = {
  category: PropTypes.array,
  thumbnail: PropTypes.object,
  title: PropTypes.array,
  description: PropTypes.array,
  uid: PropTypes.string
};
