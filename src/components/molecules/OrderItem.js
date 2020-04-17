import React, { Fragment, useState } from 'react'
import BtnClose from '../atoms/BtnClose'
import BtnQuantity from './BtnQuantity'
import BtnShowDetailOrder from '../atoms/BtnShowDetailOrder'
import OrderFilter from './OrderFilter'
import DeliveryDetail from './DeliveryDetail'

const OrderItem  = (props)=>{
    const [state, setState] = useState({
        showDetailTicket: false
    })

    const handleShowDetailTicket = ()=>{
        setState({
            showDetailTicket: !state.showDetailTicket
        })
    }

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
                            <BtnShowDetailOrder handleShowDetailTicket={handleShowDetailTicket} show={state.showDetailTicket}/>
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

                    <div className={state.showDetailTicket ? 'showDetailTicket' : 'hideDetailTicket'}>
                        <hr/>
                        <div className="detailOrder">
                            <div className="detailOrderLeft detailOrderLeftWithCenter">
                                <p className="cGrey mt14">Alamat Pengiriman</p>
                                <div className="detailOrderItem">
                                    <p className="bold pt10">Kevin Himawan</p>
                                    <p className="cGrey">kevinhimawan@gmail.com</p>
                                    <p className="cGrey">089547328596</p>
                                    <p className="cGrey pb6">JL. Taman Kedoya Permai 3, BLOK 5, NO.3, Kebayoran Lama, Jakarta Selatan, 12345</p>
                                </div>
                            </div>
                            <div className="detailOrderCenter">
                                <p className="cGrey mt14">Catatan</p>
                                <div className="detailOrderItem minHeight">
                                    <p className="cGrey pt10">Lorem Ipsum Dolor Sit Amet</p>
                                </div>
                            </div>
                            <div className="detailOrderRight">
                                <p className="cGrey mt14">Total</p>
                                <div className="detailOrderItem">
                                    <div className="detailOrderTotal">
                                        <div className="pt10">
                                            <span>Jumlah</span>
                                            <span>20,000pc</span>
                                        </div>
                                        <div>
                                            <span>Berat</span>
                                            <span>100,000kg</span>
                                        </div>
                                        <div>
                                            <span>Volume</span>
                                            <span>100,000kg</span>
                                        </div>
                                        <hr/>
                                        <div className="pb6">
                                            <span>Harga Kisaran</span>
                                            <span className="bold">IDR 200,000,000</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="detailOrderLeft">
                                <p className="cGrey mt14">Barang pengiriman</p>
                                <div className="detailOrderItem">
                                    
                                    <DeliveryDetail/>

                                </div>
                            </div>

                            <div className="detailOrderRight">
                                <div className="documentOrdre">
                                    <p className="cGrey mt14">Dokumen Pribadi</p>
                                    <p className="cMain bold mt14">Rincian Berkas</p>
                                </div>
                                <div className="detailOrderItem">
                                    <div className="wrapDetailOrderDescLeft">
                                        <div className="detailOrderTotal">
                                            <div className="pt10">
                                                <span className="cGrey">SIUP</span>
                                                <span className="cGrey">1
                                                    <img src={require('../../assets/icons/file.png')} alt="file" className="imgFile" />
                                                </span>
                                            </div>
                                            <div>
                                                <span className="cGrey">TDP</span>
                                                <span className="cGrey">2
                                                    <img src={require('../../assets/icons/file.png')} alt="file" className="imgFile" />
                                                </span>
                                            </div>
                                            <div>
                                                <span className="cGrey">Passport</span>
                                                <span className="cGrey">3
                                                    <img src={require('../../assets/icons/file.png')} alt="file" className="imgFile" />
                                                </span>
                                            </div>
                                            <div>
                                                <span className="cGrey">NIK Import</span>
                                                <span className="cGrey">3
                                                    <img src={require('../../assets/icons/file.png')} alt="file" className="imgFile" />
                                                </span>
                                            </div>
                                            <div>
                                                <span className="cGrey">NIK Export</span>
                                                <span className="cGrey">3
                                                    <img src={require('../../assets/icons/file.png')} alt="file" className="imgFile" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="wrapDetailOrderDescRight">
                                        <div className="detailOrderTotal">
                                            <div className="pt10">
                                                <span className="cGrey">NPWP</span>
                                                <span className="cGrey">1
                                                    <img src={require('../../assets/icons/file.png')} alt="file" className="imgFile" />
                                                </span>
                                            </div>
                                            <div>
                                                <span className="cGrey">KTP</span>
                                                <span className="cGrey">2
                                                    <img src={require('../../assets/icons/file.png')} alt="file" className="imgFile" />
                                                </span>
                                            </div>
                                            <div>
                                                <span className="cGrey">Lisensi</span>
                                                <span className="cGrey">3
                                                    <img src={require('../../assets/icons/file.png')} alt="file" className="imgFile" />
                                                </span>
                                            </div>
                                            <div>
                                                <span className="cGrey">Sertifikat</span>
                                                <span className="cGrey">2
                                                    <img src={require('../../assets/icons/file.png')} alt="file" className="imgFile" />
                                                </span>
                                            </div>
                                            <div>
                                                <span className="cGrey">Others</span>
                                                <span className="cGrey">3
                                                    <img src={require('../../assets/icons/file.png')} alt="file" className="imgFile" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>

                            <div className="detailOrderLeft">
                                <div className="detailOrderItem">
                                    
                                    <DeliveryDetail/>

                                </div>
                            </div>

                            <div className="detailOrderRight">
                                <div className="documentOrdre">
                                    <p className="cGrey mt14">Dokumen Pengiriman</p>
                                    <p className="cMain bold mt14">Rincian Berkas</p>
                                </div>
                                <div className="detailOrderItem">
                                    <div className="wrapDetailOrderDescLeft">
                                        <div className="detailOrderTotal">
                                            <div className="pt10">
                                                <span className="cGrey">SIUP</span>
                                                <span className="cGrey">1
                                                    <img src={require('../../assets/icons/file.png')} alt="file" className="imgFile" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="wrapDetailOrderDescRight">
                                        <div className="detailOrderTotal">
                                            <div className="pt10">
                                                <span className="cGrey">NPWP</span>
                                                <span className="cGrey">1
                                                    <img src={require('../../assets/icons/file.png')} alt="file" className="imgFile" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>

                            <div className="detailOrderLeft">
                                <div className="detailOrderItem">
                                    
                                    <DeliveryDetail/>

                                </div>
                            </div>
                            <div className="detailOrderRight"></div>

                        </div>
                    </div>
                </div>

                
                

                

            </div>

        </div>
    )
}

export default OrderItem
