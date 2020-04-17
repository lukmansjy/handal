import React from 'react'

const DeliveryDetail = (props)=>{
    return(
        <div className="contentdetailOrderItem">
            <div className="detailOrderItemLeft">
                <p>1</p>
            </div>
            <div className="detailOrderItemRight">
                <p className="ml16 bold cGrey">PCB Board Merk A</p>
                <div className="wrapDetailOrderDescLeft">
                    <div className="detailOrderTotal">
                        <div className="pt10">
                            <span className="cLightGrey">HS Code</span>
                            <span className="cGrey">12345678</span>
                        </div>
                        <div>
                            <span className="cLightGrey">Berat</span>
                            <span className="cGrey">10,000kg</span>
                        </div>
                        <div>
                            <span className="cLightGrey">Volume</span>
                            <span className="cGrey">10,000</span>
                        </div>
                    </div>
                </div>

                <div className="wrapDetailOrderDescRight">
                    <div className="detailOrderTotal">
                        <div className="pt10">
                            <span className="cLightGrey">Jumlah</span>
                            <span className="cGrey">20,000</span>
                        </div>
                        <div>
                            <span className="cLightGrey">Harga Barang</span>
                            <span className="cGrey">IDR 5,000</span>
                        </div>
                        <div>
                            <span className="cLightGrey">Total Harga</span>
                            <span className="cGrey">IDR 250,000,000,000</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeliveryDetail