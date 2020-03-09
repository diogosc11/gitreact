import React, { useState } from 'react';
import {graphql, useQuery} from 'react-apollo';
import {getAuthorsQuery, addBookMutation} from '../queries/queries';
import {flowRight as compose} from 'lodash';

function AddBook() {
    const {loading, error, data} = useQuery(getAuthorsQuery);
    
    const [bookName, setBookName] = useState('');
    const [genre, setGenre] = useState('');
    const [author, setAuthor] = useState(null);

    if(loading){
        return <p>Loading</p>
    }

    if(error){
        return <p>Error</p>
    }

    const handleAdd = (e) => {
        e.preventDefault();
        if(author == null){
            alert('Select an author');
        }
        else{
           
        }
        console.log(bookName, genre, author);
    }
  
    return (
    <div>
      <form id='add-book' onSubmit={handleAdd}>
          <div className='field'>
              <label>Book name:</label>
              <input type='text' onChange={event => setBookName(event.target.value)} />
          </div>

          <div className='field'>
              <label>Genre:</label>
              <input type='text' onChange={event => setGenre(event.target.value)}/>
          </div>

          <div className='field'>
              <label>Author:</label>
              <select onChange={event => setAuthor(event.target.value)}>
                <option key={0}>Select Author</option>
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

export default compose(
    graphql(getAuthorsQuery, {name: 'getAuthorsQuery'}),
    graphql(addBookMutation, {name: 'addBookMutation'})
)(AddBook);