import React from 'react'

const btnShowDetailOrder = (props)=>{
    return(
        <button onClick={props.handleShowDetailTicket} className={ props.show ?  "btnShowDetailOrder onShowDetailOrder" : "btnShowDetailOrder onShowDetailOrderBack"}>
            Detail Pemesanan
            <img src={require('../../assets/icons/arrow-drop-down_blue.png')} alt="show detail order"/>
        </button>
    )
}

export default btnShowDetailOrder