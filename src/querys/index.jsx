import { gql } from "@apollo/client";

const INFO_PESSOA = gql`
  query {
    characters {
      results {
        name
        species
        gender
        image
      }
    }
  }
`;

export default INFO_PESSOA;
