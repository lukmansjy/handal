import React from 'react'

const btnShowDetailOrder = ()=>{
    return(
        <button className="btnShowDetailOrder">
            Detail Pemesanan
            <img src={require('../../assets/icons/arrow-drop-down_blue.png')} alt="show detail order"/>
        </button>
    )
}

export default btnShowDetailOrder