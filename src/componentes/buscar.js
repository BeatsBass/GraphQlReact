import React from 'react';
import { gql } from 'apollo-boost'
import { useMutation } from '@apollo/react-hooks';

const SET_STATUS = gql`
mutation SetStatus($id: ID) {
    setStatus(
        _id:$id,
        input:{
          status:false
        }
      ){
        _id
       title
      status
    }
}
`;


const Buscar = () => {
    let input;
    const [setStatus] = useMutation(SET_STATUS);
    console.log(setStatus)

    return (
        <div>
            <form
                onSubmit={async (e) => {
                    e.preventDefault();
                    await setStatus({ variables: { type: '5ebb81d4437dd312ac9b96fc' } });
                    window.location.href='/'
                }}
            >
                <input
                    ref={node => {
                        input = node;
                    }}
                />
                <button type="submit">Add Todo</button>
            </form>
        </div>
    );
}
export default Buscar