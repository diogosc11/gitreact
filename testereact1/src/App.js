import React, {useState} from 'react';

export default function App(){
  const [repositories, setRepositories] = useState([]);

  function handleAddRepository() {
    setRepositories([...repositories, {id: Math.random, name: "Novo repo"}]);
  }

  return (
    <div>
      <ul>
        {repositories.map(repo => (
          <li key={repo.id}>{repo.name}</li>  
        ))}
      </ul>
      <button onClick={handleAddRepository}>Adicionar repositório</button>
    </div>
  )
  
}
