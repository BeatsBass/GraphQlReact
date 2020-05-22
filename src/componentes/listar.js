import React from 'react';
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks';

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
    return data.getMusic.map(({ _id, title, year, image, status }) => (
        <div key={_id}>
            <img src={image} />
            <h5>{title} </h5>
            <p>
                {year}
            </p>
            <p>{status?'hviu':'yyy'}</p>
        </div>
    ));
}
export default Listar