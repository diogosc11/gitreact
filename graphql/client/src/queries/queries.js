import {gql} from 'apollo-boost';

const getAuthorsQuery = gql`
    {
        authors{
            name
            id
        }
    }
`;

const getBooksQuery = gql`
    {
        books{
            name
            id
        }
    }
`;

const addBookMutation = gql`
    mutation addBookMutation($name: String!, $genre: String!, $authorId: ID!){
        addBook(name: $name, genre: $genre, authorId: $authorId){
            name
            id
            authorId
        }
    }
`;

export {getAuthorsQuery, getBooksQuery, addBookMutation};