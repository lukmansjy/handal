import React, {Component} from 'react'
import OrderItem from '../../components/molecules/OrderItem'

class OrderList extends Component{
    render(){
        return(
            <div className="content">
                <OrderItem/>
            </div>
        )
    }
}

export default OrderList