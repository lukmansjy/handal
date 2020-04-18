import React, { Fragment, useState } from 'react'
import FormOrderFilter from './FormOrderFilter'

const OrderFilter  = ()=>{
    const [state, setState] = useState({
        showFormFilter: false
    })

    const handleShowFormFilter = ()=>{
        setState({
            showFormFilter: !state.showFormFilter
        })
    }

    return(
        <Fragment>
            <div className="labelFilter">
                <button className={state.showFormFilter ? "myBtn btnShowFilterTrue" : "myBtn btnShowFilterFalse"} onClick={handleShowFormFilter}>
                    Filter
                    <img src={require('../../assets/icons/arrow-down.png')} alt="filter"/>
                </button>
            </div>

            <div className="containerFilter">
            {!state.showFormFilter ? 
                <div className="tcenter">
                    <span className="tblFilter">Filter (9)</span>
                    <span className="tblFilter labelBgGray">No. Pemesanan : 1234568910</span>
                    <span className="tblFilter labelBgGray">Asal : Singapura</span>
                    <span className="tblFilter labelBgGray">Tujuan : Indonesia</span>
                    <span className="tblFilter labelBgGray">ETA : 28 November 2018</span>
                    <span className="tblFilter labelBgGray">Status : Pilih Forwarder</span>
                    <span className="tblFilter">
                        <button className="myBtn" onClick={handleShowFormFilter}>
                            <img src={require('../../assets/icons/arrow-drop-down.png')} alt="Show Detail Filter" />
                        </button>
                    </span>
                </div>
            : <FormOrderFilter show={state.showFormFilter}/>}
            </div>

            
        </Fragment>
    )
}

export default OrderFilter
