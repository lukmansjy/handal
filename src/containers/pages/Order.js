import React, {Component} from 'react'
import Navbar from '../../components/molecules/Navbar'
import OrderList from '../organisms/OrderList'

class Order extends Component{
    render(){
        return(
            <div className="container">
                <Navbar/>
                <OrderList/>
            </div>
        )
    }
}

export default Order