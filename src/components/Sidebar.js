'use strict'

import React from 'react';
import { connect } from 'react-redux';

// Actions
import * as CourseActions from '../store/actions/course';

// Styles
import '../styles/sidebar.css';

const Sidebar = ({ modules, toggleLesson }) => (
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
                                    <button onClick={ () => toggleLesson(module, lesson) }>
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

const mapStateToProps =  state => ({
    modules: state.course.modules 
}); 

const mapDispatchToProps = dispatch => ({
    toggleLesson: (module, lesson) => dispatch(CourseActions.toggleLesson(module, lesson)) 
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);