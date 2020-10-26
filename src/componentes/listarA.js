import React from 'react';
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks';
import Card from './cardV2';


const GET_LINKS = gql`
  {
    getMusicV2{
      _id
      title
      artists
      url
      img
      linksServer {
        server
        serverUrl
      }
      status
    }
  }
`;

const Listar = () => {
  const { loading, error, data } = useQuery(GET_LINKS)
  console.log(data)
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>
  return data.getMusicV2.map(ele => (
    <Card ele={ele} />
  ));
}
export default Listar
