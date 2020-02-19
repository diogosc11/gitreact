import styled from 'styled-components';
import DeleteIcon from '@material-ui/icons/Delete';

export const Title = styled.h2`
    color: #3f51b5;
`;

export const Text = styled.p`
    color: #3f51b5;
    text-align: justify;
`;

export const Button = styled.button`
    background: #3f51b5;
    color: white;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid #3f51b5;
    border-radius: 3px;
`;

export const Input = styled.input`
    padding: 0.5em;
    margin: 0.5em;
    color: white;
    background: #3f51b5;
    border: none;
    border-radius: 3px;
`;

export const Ul = styled.ul`
    list-style-type: none;
    display: grid;
    width: 500px;
`;

export const Li = styled.li`
    color: #3f51b5;
    display: grid;
    grid-template-columns: 1fr 1fr;
`;

export const StyledDeleteIcon = styled(DeleteIcon)`
    
`;