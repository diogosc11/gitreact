import React, { useState } from 'react';
import {graphql, useQuery} from 'react-apollo';
import {getAuthorsQuery} from '../queries/queries';
import {flowRight as compose} from 'lodash';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';

const addBookMutation = gql`
    mutation addBookMutation($name: String!, $genre: String!, $authorId: ID!){
        addBook(name: $name, genre: $genre, authorId: $authorId){
            name
            id
            authorId
        }
    }
`;

function AddBook() {
    const {loading, error, data} = useQuery(getAuthorsQuery);
    
    const [bookName, setBookName] = useState('');
    const [genre, setGenre] = useState('');
    const [authorId, setAuthor] = useState([]);
    const [addBook] = useMutation(addBookMutation);

    function displayAuthors() {
        let dat = data;
        if(dat.loading){
            return <option disabled>Loading authors...</option>
        } 
        else{
            return dat.authors.map(author => {
                return <option key={author.id} value={author.id}>{author.name}</option>
            })
        }
    }

    if(loading){
        return <p>Loading</p>
    }

    if(error){
        return <p>Error</p>
    }

    const handleAdd = (e) => {
        e.preventDefault();
        if(authorId == null){
            alert('Select an author');
        }
        else{
           addBook({variables: {
               name: bookName,
               genre,
               authorId,
           }})
        }
        console.log(bookName, genre, authorId);
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
                <option>Select Author</option>
                  {displayAuthors()}
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