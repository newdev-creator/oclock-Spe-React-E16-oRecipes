import { connect } from 'react-redux';
import Recipe from 'src/components/Recipe';
/* withRouter : fonction qui permet de générer un Higher Order Component (une version
  améliorée d'un composant), pour fournir au composant des props supplémentaires
*/
import { withRouter } from 'react-router-dom';

import { findRecipe } from 'src/selectors/recipes';

/* Objectif : afficher la bonne recette en fonction du slug qui est dans l'URL.
Plusieurs possibilités :
- useParams, hook de react-router-dom => à utiliser dans un composant React écrit
sous forme de fonction (pas dans un container)
- withRouter
*/

// eslint-disable-next-line arrow-body-style
const mapStateToProps = (state, ownProps) => {
  // console.log(ownProps.match.params);

  return ({
    // on récupère le slug pour pouvoir chercher la recette qui correspond
    // ownProps.match.params contient tous les paramètres d'URL qu'on a capturés avec ":"
    // sur la Route

    // explication du bug d'affichage quand on affiche la page de recette sans passer
    // d'abord par la page d'accueil : on est en train de faire le premier rendu du
    // composant App quand on passe ici, donc on n'a pas encore appliqué l'effet de
    // App qui charge les recettes
    // => state.recipes.list a la valeur initiale définie dans le reducer => []
    // => le résultat de findRecipe c'est undefined
    // => le composant Recipe reçoit undefined dans sa prop recipe
    // => donc il redirige vers "/error"

    // pour résoudre le problème, il faudrait empêcher d'afficher trop tôt la
    // recette, donc au niveau de App, ne pas utiliser le container de Recipe si
    // les recettes ne sont pas encore chargées
    recipe: findRecipe(state.recipes.list, ownProps.match.params.slug),
  });
};

const mapDispatchToProps = {};

const container = connect(mapStateToProps, mapDispatchToProps)(Recipe);

// on exporte une version améliorée du container, le container reçoive en prop
// des infos liées à l'URL
export default withRouter(container);
