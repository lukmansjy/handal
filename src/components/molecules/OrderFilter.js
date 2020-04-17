import React, { Fragment } from 'react'

const OrderFilter  = ()=>{
    return(
        <Fragment>
            <div className="labelFilter">
                <button className="myBtn">
                    Filter
                    <img src={require('../../assets/icons/arrow-down.png')} alt="filter"/>
                </button>
            </div>

            <div className="containerFilter">
                <span className="tblFilter">Filter (9)</span>
                <span className="tblFilter labelBgGray">No. Pemesanan : 1234568910</span>
                <span className="tblFilter labelBgGray">Asal : Singapura</span>
                <span className="tblFilter labelBgGray">Tujuan : Indonesia</span>
                <span className="tblFilter labelBgGray">ETA : 28 November 2018</span>
                <span className="tblFilter labelBgGray">Status : Pilih Forwarder</span>
                <span className="tblFilter">
                    <button className="myBtn">
                        <img src={require('../../assets/icons/arrow-drop-down.png')} alt="Show Detail Filter" />
                    </button>
                </span>
            </div>
        </Fragment>
    )
}

export default OrderFilter
