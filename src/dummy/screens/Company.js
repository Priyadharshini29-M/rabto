import React from 'react';
import './Company.css'

function Company() {
  
  
  
    const FloatingNavbar = () => {
        return(
            <div className='wrapper'>
                 <div class="contents">
            <div class="inner" style={{ height:65, width:'80%', backgroundColor:'#FF3F3F', justifyContent:'center', marginTop:25,borderRadius:55, display: 'flex',
            justifyContent: 'center'}}>
                <p>
                    Hi there from navbar
                </p>
            </div>
            </div>
            </div>
        )
    }
  
  
    return (
    <div>
        <FloatingNavbar/>
        <div class="wrapper">
    <span class="label">+</span>
    <div class="contents">
        <div class="inner">
            These are the contents of this div
        </div>
    </div>
</div>

    </div>
  )
}

export default Company