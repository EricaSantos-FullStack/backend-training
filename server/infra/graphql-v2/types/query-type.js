import { mergeStrings } from 'gql-merge';

/*
  assim como você pode ver no nosso projeto da firma,
  existem arquivos de definição de "type" para cada objeto (kit, address, user, order...)
  você também vai precisar fazer os types que tenha a ver com o seu contexto de projeto!
  ex: pokemon, abilities, ....

  para DEPOIS, voce lidar com eles nas queries embaixo!
*/

const queryHeader = `
  scalar Date
`;
const query = `
  type Query {
    getBatatinhas(): [eatatinha]
  }
`;

export default mergeStrings([
  queryHeader,
  query,
]);
