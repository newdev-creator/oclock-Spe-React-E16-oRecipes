import { findRecipe } from "../../src/selectors/recipes";
import recipesData from '../data/recipesArray';

describe('selector recipes', () => {
  describe('function findRecipe', () => {
    /*
    - vérifier si c'est une fonction
    - si le slug existe dans les recettes, la fonction retourne la recette qui a ce slug
    - si le slug n'existe pas dans les recettes, la fonction retourne undefined
    */
   it('should be a function', () => {
     // une ou plusieurs assertions pour vérifier
     expect(typeof findRecipe).toBe('function');
   });

   it('should return undefined if the slug does not exist', () => {
     // on appelle la fonction en fournissant un tableau de recettes et un slug qui n'existe pas dans ce tableau, et on vérifie que le résultat de l'appel est undefined
    expect(findRecipe(recipesData, 'jean_michel')).toBe(undefined);
   })

   it('should return the recipe with the given slug if the slug exists', () => {
    // on sélectionne un slug existant dans les données
    const existingSlug = recipesData[0].slug;

    // on stocke la recette qui correspond au slug
    const expectedRecipe = recipesData[0];

     expect(findRecipe(recipesData, existingSlug)).toEqual(expectedRecipe);
   })
  })
});
