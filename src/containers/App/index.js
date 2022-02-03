import { connect } from 'react-redux';

// on importe le composant de présentation
import App from 'src/components/App';
import { fetchRecipes } from '../../actions/recipes';

// === mapStateToProps
// si on a besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  loading: state.recipes.loading,
});

// === mapDispatchToProps
// si on a besoin de dispatcher des actions vers le store (modifier le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  loadRecipes: () => {
    dispatch(fetchRecipes());
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(App);
