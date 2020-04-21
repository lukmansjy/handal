import React, {Component} from 'react'
import OrderItem from '../../components/molecules/OrderItem'
import { connect } from 'react-redux'

class OrderList extends Component{
    render(){
        return(
            <div className="content">
                {this.props.dataOrders.map( (dataOrder, index )=> (
                    <OrderItem dataOrder={dataOrder} index={index}/>
                ) )}
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    console.log(state)
    return {
        dataOrders: state
    }
}

export default connect(mapStateToProps)(OrderList)