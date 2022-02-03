import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';

import Menu from 'src/containers/Menu';
import Home from 'src/containers/Home';
import Recipe from 'src/containers/Recipe';
import Error from 'src/components/Error';

import Loading from './Loading';

/*
Objectif : récupérer les recettes préférées de l'utilisateur
x créer un emplacement dans le state pour les recettes préférées
x dès que l'utilisateur est authentifié, faire une requête sur
localhost:3001/favorites, en transmettant le token stocké dans le state,
dans un header "Authorization", en mettant "Bearer " en préfixe
- quand on a la réponse, stocker les recettes dans le state
*/

import './style.scss';

function App(props) {
  useEffect(() => {
    // console.log('on va aller chercher les recettes');

    // appel à une fonction définie dans le container qui dispatch une action FETCH_RECIPES
    props.loadRecipes();
  }, []);

  if (props.loading) {
    return <Loading />;
  }
  return (
    <div className="app">
      <Menu />

      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/recipe/:slug">
          <Recipe />
        </Route>
        <Route>
          <Error />
        </Route>
      </Switch>
    </div>
  );
}

App.propTypes = {
  loading: PropTypes.bool,
  loadRecipes: PropTypes.func.isRequired,
};

App.defaultProps = {
  loading: false,
};

export default App;
