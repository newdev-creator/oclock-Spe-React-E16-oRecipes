import { SAVE_USER_DATA, UPDATE_LOGIN_FIELD } from '../actions/user';

export const initialState = {
  // indique si l'utilisateur s'est connecté avec succès
  logged: false,
  email: '',
  password: '',
  // pseudo de l'utilisateur (une fois qu'il est connecté)
  nickname: '',
  token: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_LOGIN_FIELD:
      // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Property_Accessors
      /* on a deux façons d'accéder à la valeur d'une propriété d'un objet :
      - unObj.nomPropriété
      - unObj['nomPropriété']
      => avec la deuxième forme, on peut utiliser une variable qui contient le nom
      de la propriété
      let target = 'nomPropriété';
      unObj[target]
      */

      // on peut ajouter des champs dans le formulaire sans avoir besoin de modifier
      // le traitement de l'action dans le reducer
      return {
        ...state,
        [action.name]: action.value,
      };

    case SAVE_USER_DATA:
      return {
        ...state,
        nickname: action.nickname,
        logged: action.isLogged,
        token: action.token,
      };

    default:
      return state;
  }
};

export default reducer;
