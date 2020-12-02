import React , { Component }from 'react'; 
 
 
import Sidebar from './components/Sidebar'; 
import Video from './components/Video'; 

import './styles/app.css';
 
class App extends  Component { 
    constructor(props) { 

        super(props); 
 
        this.state = { 
            modules: [ 
                {   
                    id: 1,  
                    title: "Iniciando com React", 
                    lessons: [ 
                        { id: 1, title: "Primeira Aula" }, 
                        { id: 2, title: "Segunda Aula" } 
                    ] 
                }, 
                {   
                    id: 2,  
                    title: "Aprendendo Redux", 
                    lessons: [ 
                        { id: 3, title: "Terceira Aula" }, 
                        { id: 4, title: "Quarta Aula"} 
                    ] 
                }, 
            ] 
        } 
    } 
 
    render() { 
        const { modules } = this.state;

        return( 
            <div className="app"> 
                <p>HEllo Mundo</p> 
                <Video /> 
                <Sidebar  modules={modules}/> 
            </div> 
        ) 
    } 
} 
 
export default App; 