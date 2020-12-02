'use strict'

import React from 'react';
import { connect } from 'react-redux';

import '../styles/sidebar.css';


function toggleLesson(module, lesson) {
    return {
        type: 'TOGGLE_LESSON',
        module,
        lesson,
    }
}

const Sidebar = ({ modules, dispatch }) => (
    <aside className="sidebar">
        {
            modules.map(module => (
                <div key={module.id}>
                    <br/><br/>

                    <strong> {module.title} </strong>
                    <ul>
                        {
                            module.lessons.map( (lesson)  => ( 
                                <li key={lesson.id}> 
                                    {lesson.title}
                                    &nbsp;&nbsp;
                                    <button onClick={ () => dispatch(toggleLesson(module, lesson)) }>
                                        Selecionar
                                    </button>
                                </li>
                            ))
                        }   
                    </ul>
                </div>
            ))
        }
    </aside>
)

export default connect(state => ({ modules: state.modules }))(Sidebar);