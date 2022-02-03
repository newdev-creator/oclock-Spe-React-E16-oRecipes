import React from 'react';
import PropTypes from 'prop-types';
/*
Link : agir sur la barre d'adresse
NavLink: version améliorée de Link, qui permet de mettre en valeur (CSS) le lien si
son URL correspond à la barre d'adresse
*/
import { Link } from 'react-router-dom';

import './style.scss';

const Card = ({
  thumbnail,
  title,
  difficulty,
  slug,
}) => (
  <article className="card">
    <img className="card-img" src={thumbnail} alt={title} />
    <div className="card-content">
      <h2 className="card-title">{title}</h2>
      <p className="card-desc">Difficulté : {difficulty}</p>
      <Link to={`/recipe/${slug}`} className="card-link">Voir la recette</Link>
    </div>
  </article>
);

Card.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  difficulty: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};

export default Card;
