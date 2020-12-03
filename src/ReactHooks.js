import React, { useState, useEffect  } from 'react'; 

// video Aula: https://www.youtube.com/watch?v=6WB16wZS61c

export default function ReactHooks() { 
    const[repositoriesTeste, setRepositoriesTeste] = useState([
        { id: 1, name: 'repo-1'},
        { id: 2, name: 'repo-2'},
        { id: 3, name: 'repo-3'},
    ]);

    function handleAddRepository() {
        setRepositoriesTeste([...repositoriesTeste, {id: Math.random, name: 'Novo Repo'}])
    }

    // Outro Exemplo

    const[repositories, setRepositories] = useState([]);

    useEffect( async () => {
        const response = await fetch('https://api.github.com/users/wagnerGCastro/repos');
        const data = await response.json();
        setRepositories(data);
    }, []);

    console.log(repositories);



    return( 
        <section className="app"> 
            <h1>React Hooks </h1> 
            <hr/>
            <div className="list-repositories">
              
                <ul>
                    {
                        repositoriesTeste.map( repo => <li key={repo.id}>{repo.name}</li>) 
                    }
                </ul>
                <button onClick={handleAddRepository}>Adicionnar repositorio</button>
            </div>

            <hr/>

            <div className="list-repositories">
              <ul>
                  { repositories.map( repo => (
                     <li key={repo.id}>{repo.name}</li>
                  ))}
              </ul>
          </div>

        </section> 
    ) 
} 
 
