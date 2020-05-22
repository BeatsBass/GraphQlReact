import React from 'react';
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks';
import Card from './card';


const GET_LINKS = gql`
  {
    getMusic{
        _id
        artist
        title
        link
        image
        status
        year
    }
  }
`;

const Listar = () => {
    const { loading, error, data } = useQuery(GET_LINKS)
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>
    return data.getMusic.map(ele => (
       <Card ele={ele}/>
    ));
}
export default Listar
