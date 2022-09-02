import { mergeStrings } from 'gql-merge';

import abilityType from './ability-type';
import pokemonType from './pokemon-type';
import weaknessType from './weakness-type';
import typeType from './type-type';

const queryHeader = `
  scalar Date
`;

const query = `
  type Query {
    getPokemons: [Pokemon]
  }
`;

export default mergeStrings([
  queryHeader,
  abilityType,
  pokemonType,
  typeType,
  weaknessType,
  query,
]);


/*
  assim como você pode ver no nosso projeto da firma,
  existem arquivos de definição de "type" para cada objeto (kit, address, user, order...)
  você também vai precisar fazer os types que tenha a ver com o seu contexto de projeto!
  ex: pokemon, abilities, ....

  para DEPOIS, voce lidar com eles nas queries embaixo!
*/
