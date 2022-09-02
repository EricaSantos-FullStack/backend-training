import GraphQLDate from 'graphql-date';
import pokemonResolvers from '../resolvers/pokemon-resolvers';

/*
aqui voce vai definir resolvers das queries
que voce pre-definiu la no arquivo query-type
ex: getBatatinhas()
*/

export default {
  Date: GraphQLDate,

  Query: {
    /*
      aqui que voce colocar as resolvers das queries
      que for fazendo das queries
    */
  },
};
