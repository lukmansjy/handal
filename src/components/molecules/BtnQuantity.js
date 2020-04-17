import React from 'react'

const BtnQuantity = (props)=>{
    return(
        <div>
            <button className="btnQty mr8">Quotation</button>
            <span className="cGrey">({props.qty})</span>
        </div>
    )
}

export default BtnQuantity