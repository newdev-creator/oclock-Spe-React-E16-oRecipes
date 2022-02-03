// shallow permet de faire un rendu "de premier niveau" d'un composant : on voit les
// balises du JSX de ce composant, mais s'il y a des sous-composants on verra les
// composants (par exemple on pourra vérifier les props qui leur sont fournies), mais
// on ne verra pas les balises à l'intérieur du JSX des sous-composants
// => pour Content, avec shallow on voit div, h1 etc (balises) et Card (composant) mais
// pas les balises de Card
import { shallow } from 'enzyme';

import Content from 'src/components/Content';

// on importe aussi Card car on en a besoin pour l'un des tests
import Card from 'src/components/Card';

import recipesData from 'tests/data/recipesArray';

describe('<Content />', () => {
  it('should have a title', () => {
    // on fait un rendu superficiel du composant en fournissant des valeurs pour
    // les props
    const wrapper = shallow(<Content title="pizza" text="Bienvenue" recipes={recipesData} />);
  
    // en utilisant find on peut rechercher des éléments, et faire des vérifications
    // toHaveLength : comparateur Jest pour le nombre d'éléments d'un tableau
    // on vérifie qu'on a une balise h1
    expect(wrapper.find('h1')).toHaveLength(1);

    // on pourrait vérifier aussi le contenu du h1
  });

  it('should render the same number of Card that the recipes items', () => {
    const wrapper = shallow(<Content title="pizza" text="Bienvenue" recipes={recipesData} />);
  
    // on récupère tous les composants Card générés par Content et on vérifie le nombre
    expect(wrapper.find(Card)).toHaveLength(recipesData.length);

    // quand on récupère un composant, on peut vérifier ses props
    // https://enzymejs.github.io/enzyme/docs/api/ShallowWrapper/props.html
  })
});
