'use strict'

import React from 'react';
import '../styles/sidebar.css';

const Sidebar = ({ modules }) => (
    <aside className="sidebar">
        {
            modules.map(m  => (
                <div  key={m.id}>
                    <strong> {m.title} </strong>
                    <ul>
                        {
                            m.lessons.map( (l)  => ( 
                                <li key={l.id}> {l.title}</li>
                            ))
                          
                        }   
                    </ul>
                </div>
            ))
        }
    </aside>
)

export default Sidebar;