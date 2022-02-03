import { connect } from 'react-redux';

// on importe le composant de présentation
import LoginForm from 'src/components/LoginForm';
import { logIn, updateLoginField } from '../../actions/user';

// === mapStateToProps
// si on a besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  email: state.user.email,
  password: state.user.password,
  isLogged: state.user.logged,
  // dans mapStateToProps, le container peut améliorer l'information
  // qu'il lit dans le state
  loggedMessage: `Bienvenue ${state.user.nickname}`,
});

// === mapDispatchToProps
// si on a besoin de dispatcher des actions vers le store (modifier le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  changeField: (newValue, name) => {
    // console.log(`changeField, newValue=${newValue}, name=${name}`);

    // on transmet l'information au state => dispatch une action
    dispatch(updateLoginField(newValue, name));
  },
  handleLogin: () => {
    // console.log('handleLogin');

    // envoyer une requête au serveur => dispatch une action qui sera interceptée
    // par le middleware
    dispatch(logIn());
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
