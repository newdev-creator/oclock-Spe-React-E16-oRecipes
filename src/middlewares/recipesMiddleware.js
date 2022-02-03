import axios from 'axios';
import { FETCH_RECIPES, saveRecipes } from '../actions/recipes';

const recipesMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_RECIPES:
      // console.log('il faut charger les recettes');

      axios.get('http://localhost:3001/recipes')
        .then((response) => {
          // console.log(response);

          // on veut enregistrer response.data dans le state => c'est les reducers
          // qui permettent de mettre à jour le state => les reducers choisissent
          // leur traitement en fonction d'une action
          store.dispatch(saveRecipes(response.data));

          // si on veut faire un deuxième traitement dans le state à ce moment,
          // on peut soit rajouter une nouvelle action (si l'intention de la première
          // action ne correspond pas au nouveau traitement), soit se servir de l'action
          // déjà en place
        })
        .catch((error) => {
          console.warn(error);
        });
      break;

    default:
  }

  // on passe l'action au suivant (middleware suivant ou reducer)
  next(action);
};

export default recipesMiddleware;
