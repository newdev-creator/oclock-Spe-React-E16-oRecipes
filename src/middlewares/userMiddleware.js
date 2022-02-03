import axios from 'axios';
import { fetchFavorites, FETCH_FAVORITES, saveFavorites } from '../actions/recipes';
import { LOG_IN, saveUserData } from '../actions/user';

const userMiddleware = (store) => (next) => (action) => {
  // console.log('on a intercepté une action dans le middleware: ', action);

  switch (action.type) {
    case LOG_IN: {
      const { email, password } = store.getState().user;

      axios.post(
        // URL
        'http://localhost:3001/login',
        // informations
        {
          email: email,
          password: password,
        },
      )
        .then((response) => {
          console.log(response);

          // on dispatch une action, pour pouvoir faire réagir un reducer, qui
          // modifiera le state
          store.dispatch(saveUserData(
            response.data.logged,
            response.data.pseudo,
            response.data.token,
          ));

          // on veut déclencher la récupération des recettes préférées
          store.dispatch(fetchFavorites());
        })
        .catch((error) => {
          console.warn(error);
        });
      break;
    }

    case FETCH_FAVORITES:
      // on envoie le token, dans le header "Authorization", avec "Bearer " comme préfixe
      axios.get(
        // URL
        'http://localhost:3001/favorites',
        // options, notamment les headers
        {
          headers: {
            Authorization: `Bearer ${store.getState().user.token}`,
          },
        },
      )
        .then((response) => {
          // console.log(response);
          store.dispatch(saveFavorites(response.data.favorites));
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

export default userMiddleware;
