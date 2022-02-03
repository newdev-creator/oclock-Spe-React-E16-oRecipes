import React from 'react';
import PropTypes from 'prop-types';

import Field from './Field';

import './style.scss';

const LoginForm = ({
  email,
  password,
  changeField,
  handleLogin,
  handleLogout,
  isLogged,
  loggedMessage,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin();
  };

  return (
    <div className="login-form">
      {isLogged && (
        <div className="login-form-logged">
          <p className="login-form-message">
            {loggedMessage}
          </p>
          <button
            type="button"
            className="login-form-button"
            onClick={handleLogout}
          >
            Déconnexion
          </button>
        </div>
      )}
      {!isLogged && (

        <form autoComplete="off" className="login-form-element" onSubmit={handleSubmit}>
          <Field
            name="email"
            placeholder="Adresse Email"
            onFieldChange={changeField}
            value={email}
          />
          <Field
            name="password"
            type="password"
            placeholder="Mot de passe"
            onFieldChange={changeField}
            value={password}
          />
          <button
            type="submit"
            className="login-form-button"
          >
            OK
          </button>
        </form>
      )}
    </div>
  );
};

LoginForm.propTypes = {
  /** valeur utilisée pour le champ email */
  email: PropTypes.string.isRequired,
  /** valeur utilisée pour le champ password */
  password: PropTypes.string.isRequired,
  /** appelé quand l'un des champs change de valeur
   * paramètres :
   * - nouvelle valeur
   * - "nom" du champ qui doit changer de valeur
  */
  changeField: PropTypes.func.isRequired,
  /** Appelé à la soumission du formulaire */
  handleLogin: PropTypes.func.isRequired,
  /** Appelé quand on clique sur le bouton "Déconnexion" */
  handleLogout: PropTypes.func.isRequired,
  /** Pilote l'affichage entre le formulaire et le mode "connecté" */
  isLogged: PropTypes.bool,
  /** Message affiché en mode "connecté" */
  loggedMessage: PropTypes.string,
};

LoginForm.defaultProps = {
  isLogged: false,
  loggedMessage: 'Connecté',
};

export default LoginForm;
