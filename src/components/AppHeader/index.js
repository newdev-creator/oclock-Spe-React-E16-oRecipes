import React from 'react';
import LoginForm from 'src/containers/LoginForm';

import './style.scss';

// permet à webpack d'adapter le chemin quand il fera son travail d'assemblage
import logo from 'src/assets/logo.png';

/*
Objectif : pouvoir authentifier l'utilisateur
x intégrer le composant LoginForm sur l'affichage
x contrôler les 2 inputs (faire en sorte que ce soit des informations dans le state
  qui pilotent les valeurs qui sont dans les inputs)
x submit du formulaire => envoyer une requête au serveur (ici on va mettre en place
  un middleware qui fera la requête, on dispatch une action pour activer le traitement
  du middleware)
x traiter la réponse : d'abord stocker les informations reçues
x adapter l'affichage de LoginForm (mode connecté)

Pour mettre en place un champ contrôlé :
- avoir dans le state un emplacement pour stocker la valeur du champ
- contrôle en lecture (la valeur du state se retrouve dans le composant)
- contrôle en écriture (quand on saisit un caractère dans le champ, le caractère
  s'ajoute dans le state)
*/

const AppHeader = () => (
  <header className="header">
    <img src={logo} className="header-logo" alt="Logo oRecipes" />
    <LoginForm
      handleLogout={() => {
        console.log('handleLogout');
      }}
    />
  </header>
);

export default AppHeader;
