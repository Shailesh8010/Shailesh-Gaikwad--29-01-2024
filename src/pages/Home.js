import React from 'react';
import banner from '../assets/banner.jpeg';

import '../styles/Home.css';


function Home (){
    return(
        <div className='home' style = {{backgroundImage : `url(${banner})`}}>
            

           <h1>Home</h1>
        </div>
    )
}

export default Home;