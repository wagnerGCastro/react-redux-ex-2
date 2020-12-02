import React from 'react';
import { connect } from 'react-redux';

import '../styles/video.css';

// steless components
// https://blog.rocketseat.com.br/react-do-zero-ciclo-de-vida-stateless-components-e-arquitetura-flux/
const Video = ({ activeModule, activeLesson }) => (
    <div className="video">
        <div className="">
            <strong>Modulo: { activeModule.title }</strong> <br/>
            <span>Aula: { activeLesson.title  }</span>
        </div>
    </div>
);

export default connect( state => ({
    activeModule: state.activeModule,
    activeLesson: state.activeLesson,
}))(Video);