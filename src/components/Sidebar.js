'use strict'

import React from 'react';
import { connect } from 'react-redux';

import '../styles/sidebar.css';

const Sidebar = ({ modules }) => (
    <aside className="sidebar">
        {
            modules.map(m => (
                <div key={m.id}>
                    <br/><br/>

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

export default connect(state => ({ modules: state }))(Sidebar);