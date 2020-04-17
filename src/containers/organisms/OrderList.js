import React, {Component} from 'react'
import OrderItem from '../../components/molecules/OrderItem'

import dataOrders from '../../assets/data/db.json'

class OrderList extends Component{
    render(){
        return(
            <div className="content">
                {dataOrders.map( (dataOrder, index )=> (
                    <OrderItem dataOrder={dataOrder} index={index}/>
                ) )}
            </div>
        )
    }
}

export default OrderList