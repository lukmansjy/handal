import React from 'react'

const Navbar  = ()=>{
    return(
        <div className="nav">

            <div className="navLeft">
                <span>HANDAL</span>
            </div>

            <div className="navRight">
                <img src={require('../../assets/icons/person.png')} alt="Person"/>
            </div>

        </div>
    )
}

export default Navbar
