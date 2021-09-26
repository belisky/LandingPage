import React from 'react'
import * as FaIcons from 'react-icons/fa'
 
import "./Menubar.css";

const Menubar = () => {
    return (
        <div className='container'>
        <nav className='nav'>
            
            <div className='menubar'>
                <div className='logo'>
                    <h1>xone</h1>
                </div>
                <div className='smallright'>
                    <FaIcons.FaBars size={24}/>
                </div>
                <div className='rightmenu'>
                    <div className='menu'>
                        <h4>MENU</h4>
                        <FaIcons.FaBars />
                    </div>
                    <div className='search'>
                        <FaIcons.FaSearch/>
                        <input type='text' 
                        placeholder='GET QUOTE' className='entry'                   
                        />
                    </div>                    
                </div>
            </div>
            
        </nav>
        </div>
    )
}

export default Menubar
