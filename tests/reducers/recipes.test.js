// fichier de test du reducer des recettes
import recipesReducer from 'src/reducers/recipes';
import { saveRecipes } from '../../src/actions/recipes';

// on a stocké un tableau de recettes dans un fichier pour utiliser partout où on
// a besoin de recettes dans les tests
import recipesData from '../data/recipesArray';

describe('reducer recipes', () => {
  describe('structure', () => {
    // intéressant de vérifier que c'est une fonction => le test plantera si le reducer
    // n'est pas du tout défini, ou s'il y a une erreur de syntaxe dans le code
    it('should be a function', () => {
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
      // typeof est un opérateur javascript qui permet de connaitre le type de quelque chose
      expect(typeof recipesReducer).toBe('function');
    })
  });

  describe('usage', () => {
    /* idées :
    - vérifier le state initial
    - pour chaque type d'action prévu par le reducer, vérifier le résultat retourné
    (tester qu'il y a un objet en plus dans l'objet list quand on reçoit une action
    de type SAVE_RECIPES)
    - tester qu'une action non prévue ne modifie pas le state
    */
   it('check initial state', () => {
     // on appelle le reducer sans arguments pour obtenir le state initial
     // => on peut afficher des valeurs dans le compte-rendu, console.log ou console.error
     // console.error(recipesReducer());

     // liste des comparateurs Jest
     // https://jestjs.io/fr/docs/using-matchers

     const expectedInitialState = {
       list: [],
       loading: true,
     };
     // toEqual : on compare chacun des champs d'un objet avec les champs d'un
     // autre objet
     expect(recipesReducer()).toEqual(expectedInitialState);
   })

   it('check treatment of action SAVE_RECIPES', () => {
      // plan d'action :
      // on prépare un state "avant" l'application de l'action
      const stateBefore = {
        list: [],
        // on ajoute une autre information bidon pour vérifier que le reducer déverse
        // bien les infos du state d'avant
        something: 'hey',
        loading: true,
      };

      // on prépare une action de type SAVE_RECIPES (soit on définit manuellement un
      // objet, soit on utilise le action creator)
      const action = saveRecipes(recipesData);

      // on prépare le state qu'on devrait avoir après la prise en compte de l'action 
      const expectedStateAfter = {
        list: recipesData,
        something: 'hey',
        loading: false,
      };

      // on appelle le reducer avec le state "avant" et l'action
      const actualStateAfter = recipesReducer(stateBefore, action);

      // on vérifie que le résultat de l'appel au reducer avec le state et 
      // l'action produit bien le nouveau state attendu
      expect(actualStateAfter).toEqual(expectedStateAfter);
   })
  })
});
