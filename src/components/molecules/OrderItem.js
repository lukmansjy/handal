import React, { Fragment } from 'react'
import BtnClose from '../atoms/BtnClose'
import BtnQuantity from './BtnQuantity'
import BtnShowDetailOrder from '../atoms/BtnShowDetailOrder'
import OrderFilter from './OrderFilter'

const OrderItem  = (props)=>{
    const {dataOrder, index} = props
    return(
        <div>

            <div className="filterContainer">

                {index === 0 ? 
                
                    <Fragment>
                        <div className="title">
                            <h4>Daftar Pesanan</h4>
                        </div>
                        <OrderFilter/>
                    </Fragment>

                 : null}

                <div className="ticketItem">
                    <div className="detailTicket">
                        <p className="ticketLabel">Asal</p>
                        <p className="ticketValue cBlack">{dataOrder.orgin}</p>
                        <p className="ticketLabel">{dataOrder.originState}</p>
                        <div className="wrapperBtnShowDetailOrder">
                            <BtnShowDetailOrder/>
                        </div>
                    </div>

                    <div className="detailTicket">
                        <p className="ticketLabel">Tujuan</p>
                        <p className="ticketValue cBlack">{dataOrder.destination}</p>
                        <p className="ticketLabel">{dataOrder.destinationState}</p>
                    </div>

                    <div className="detailTicket">
                        <p className="ticketLabel">Nomor Pemesanan</p>
                        <p className="ticketValue">{dataOrder.orderId}</p>
                        <p className="ticketLabel mt20 mb0">
                            <div className="typeWay">
                                <span>Tipe</span>|
                                <span>Kargo</span>|
                                <span>Incoterms</span>
                            </div>
                            <br/>
                            <div className="typeWayValue">
                                <span>{dataOrder.type}</span>|
                                <span>{dataOrder.cargo}</span>|
                                <span>{dataOrder.incoterms}</span>
                            </div>
                        </p>
                    </div>

                    <div className="detailTicket">
                        <p className="ticketLabel">ETA</p>
                        <p className="ticketValue">{dataOrder.eta}</p>
                        <p className="ticketLabel mt20 mb0">Tipe Kontainer</p>
                        <p className="ticketValue">{dataOrder.typeContainer}</p>
                    </div>

                    <div className="detailTicket">
                        <p className="ticketLabel">Status</p>
                        <p className="ticketValue bold">Pilih Forwarder</p>
                        <p className="mt20 mb0">
                            <BtnQuantity qty={dataOrder.qty}/>
                        </p>
                    </div>

                    <div className="detailTicket detailTicketDelete">
                        <BtnClose/>
                    </div>
                </div>

                
                

                

            </div>

        </div>
    )
}

export default OrderItem
