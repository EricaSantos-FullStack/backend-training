import { mergeStrings } from 'gql-merge';

import QueryType from './types/query-type';
import Mutations from './mutations';

const schema = `
  schema {
    query: Query
    mutation: Mutation
  }
`;

export default mergeStrings([QueryType, Mutations, schema]);
