import {GraphQLClient, gql} from 'graphql-request';

// Define the GraphQL query to retrieve website information
const GET_WEBSITES = gql`
  {
    posts {
      name,
      url,
    }
  }
`;

// Define the external verification API endpoint
const API_URL =
  'https://6389df1b4eccb986e89cf319.mockapi.io/external-verification/websites';

const getWebsites = async () => {
  const client = new GraphQLClient(API_URL);
  const data = await client.request(GET_WEBSITES);
  return data;
}

export {getWebsites};
