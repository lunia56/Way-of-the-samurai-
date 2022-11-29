import React from 'react';
import Fish from '../../../img/Fish.gif';

const Preloader = () => {
    return (
        <div style={{backgroundColor:'white'}}>
            <img src={Fish}/>
        </div>
    );
};

export default Preloader;