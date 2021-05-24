import React from 'react';
import  {Home}  from './Home';
import {About} from './About';
import {FAQ} from './FAQ'
import {Blog} from './Blog'
import {Services} from './Services'
import {Navbar} from './Navbar';


export const Main =() => {
    return(
        <div>
        <Navbar/>
        <Home/>
        <About/>
        <Services/>
        <FAQ/>
        <Blog/>
        </div>
    )
}