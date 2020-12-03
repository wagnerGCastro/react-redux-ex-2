import React , { Component }from 'react'; 
import { Provider } from 'react-redux';

 
import Sidebar from '@components/Sidebar'; 
import Video from '@components/Video'; 

import store from './store';

import './styles/app.css';
 
class App extends  Component { 
    constructor(props) { 
        super(props); 
        this.state = { } 
    } 
 
    render() { 
        const { modules } = this.state;

        return( 
            <div className="app"> 
                <p>HEllo Mundo</p> 
                <Provider store={store}>
                    <Video /> 
                    <Sidebar/> 
                </Provider>
            </div> 
        ) 
    } 
} 
 
export default App; 