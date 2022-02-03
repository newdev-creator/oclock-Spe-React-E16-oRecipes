import { SAVE_FAVORITES, SAVE_RECIPES } from '../actions/recipes';

export const initialState = {
  list: [],
  // indique si on est en cours de chargement des recettes
  // => au lancement de l'application on se met en état de chargement, on doit
  // récupérer les recettes depuis l'API avant de pouvoir présenter l'UI
  loading: true,
  // recettes préférées de l'utilisateur
  favorites: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_RECIPES:
      return {
        ...state,
        list: action.recipes,
        loading: false, // les recettes sont chargées
      };

    case SAVE_FAVORITES:
      return {
        ...state,
        favorites: action.favorites,
      };

    default:
      return state;
  }
};

export default reducer;
