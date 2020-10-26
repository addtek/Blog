import React from 'react'
import {Link} from "react-router-dom"
import '../styles/Navbar.css'

function Navbar(){
    return(
        <>
               <nav >
                <ul className='nav-item'>
                    <li className='nav-list-left' >Juvian maker space</li>
                        <div className='right'>
                        <Link to='/'> < li className='nav-list'>Home</ li></Link>
                        <Link to='/blog'>   < li className='nav-list'>Blog</ li></Link>
                        <Link to='/courses'>  < li className='nav-list'>Electronics 101</ li></Link>
                        </div>
                </ul>
            </nav>
        </>
    )
}


export default Navbar