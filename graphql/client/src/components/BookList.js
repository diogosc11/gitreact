import React from 'react';
import {graphql, useQuery} from 'react-apollo';
import {getBooksQuery} from '../queries/queries'

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