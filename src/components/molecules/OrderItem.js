import React from 'react'

const OrderItem  = ()=>{
    return(
        <div>

            <div className="filterContainer">
                <div className="title">
                    <h4>Daftar Pesanan</h4>
                </div>

                <div className="labelFilter">
                    <button>
                        Filter
                        <img src={require('../../assets/icons/arrow-down.png')} alt="filter"/>
                    </button>
                </div>
            </div>

        </div>
    )
}

export default OrderItem
