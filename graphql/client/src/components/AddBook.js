import React from 'react';
import {gql} from 'apollo-boost';
import {graphql, useQuery} from 'react-apollo';

const getAuthorsQuery = gql`
    {
        authors{
            name
            id
        }
    }
`;

function AddBook() {
    const {loading, error, data} = useQuery(getAuthorsQuery);

    if(loading){
        return <p>Loading</p>
    }

    if(error){
        return <p>Error</p>
    }
  
    return (
    <div>
      <form id='add-book'>
          <div className='field'>
              <label>Book name:</label>
              <input type='text' />
          </div>

          <div className='field'>
              <label>Genre:</label>
              <input type='text' />
          </div>

          <div className='field'>
              <label>Author:</label>
              <select>
                  {data.authors.map((author, index) => {
                      return (
                      <option key={index}>{author.name}</option>
                      )
                  })}
              </select>
          </div>
          <button>Add</button>
      </form>
    </div>
  );
}

export default graphql(getAuthorsQuery)(AddBook);