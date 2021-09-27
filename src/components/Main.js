import React from 'react'
import kanban from './assets/kanban.jpg' 
import './Main.css'
import * as FaIcons from 'react-icons/fa'
 

const Main = () => {
    return (
        <section>
            <div className='container'> 
            <div className='split'>
                <div className='content'>
                    <div className='contentwords'>
                        <h2>Get Elevated to Achieve Enhanced Outcomes</h2> 
                        <p>Due diligence circle back,
                            nor accountable talk yet quick win,
                            and we're all in this together,
                            even if our businesses function 
                            differently
                        </p>               
                
                    </div>                             
                
                    <div className='picture'>
                        <img src={kanban} alt='handwriting' height='100%' width='100%'/>
                    </div>
                </div>
                <div className='emailinput'>
                    <input type='text' placeholder='Your email address here' className='email'/>
                    
                    <FaIcons.FaArrowCircleRight size={24} align='center'/>
                     
                    
                </div>
            </div>
            </div>
        </section>
    )
}

export default Main
