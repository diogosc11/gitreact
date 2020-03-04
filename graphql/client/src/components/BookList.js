import React from 'react';
import {gql} from 'apollo-boost';
import {graphql, useQuery} from 'react-apollo';

const getBooksQuery = gql`
    {
        books{
            name
            id
        }
    }
`;

function BookList() {
    const {loading, error, data} = useQuery(getBooksQuery);

    if(loading){
        return <p>Loading</p>
    }

    if(error){
        return <p>Error</p>
    }
  
    return (
    <div>
      <ul id='book-list'>
          {data.books.map(({name, index}) => {
              return <li key={index}>{name}</li>
          })}
      </ul>
    </div>
  );
}

export default graphql(getBooksQuery)(BookList);