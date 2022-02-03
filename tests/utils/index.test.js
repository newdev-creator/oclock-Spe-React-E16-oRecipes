// fichier de tests pour src/utils/index.js

// on importe le morceau de code à tester
import { sum } from 'src/utils';

// exemples d'assertions à vérifier :
// sum(2, 3) devrait être 5
// sum(-1, 1) devrait être 0

// https://jestjs.io/

// on définit un "chapitre" pour le fichier utils/index.js
// describe a deux paramètres :
//  - un texte qui décrit le bloc (qui apparaitra dans le compte-rendu)
//  - une callback qui permet d'exécuter les tests pour ce bloc
describe('utils', () => {
  describe('function sum', () => {
    // it décrit un cas de test (une ou plusieurs assertions), 2 paramètres :
    //  - un texte qui décrit le cas de test (qui apparaitra dans le compte-rendu)
    //  - une callback qui permet d'exécuter les tests pour ce cas
    // avec Jest, au lieu de "it" on peut aussi écrire "test"
    it('should return 5 when called with 2 and 3', () => {
      // ici les assertions pour ce cas de test
      // sum(2, 3) devrait être 5
      expect(sum(2, 3)).toBe(5);
    })

    it('should work with negative numbers', () => {
      expect(sum(-1, -2)).toBe(-3);
    })
  })
});
