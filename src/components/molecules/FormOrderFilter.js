import React from 'react'

const FormOrderFilter = (props)=>{
    return(
        <div className={props.show ? "wrapFormOrderFilter wrapFormOrderFilterShow" : "wrapFormOrderFilter wrapFormOrderFilterHide"}>
            <div className="wrapInputOrderFilter">
                <p className="cGrey">Nomor Pesanan</p>
                <input type="text" />
                <div className="footerInputOrderFilter">
                    <div>
                        <p className="cGrey">Status</p>
                        <div className="dropdownWrap">
                            <img src={require('../../assets/icons/arrow-drop-down.png')} alt="dropdown"/>
                            <select className="mySelectDropDown">
                                <option value="1">Status 1</option>
                                <option value="2">Status 2</option>
                                <option value="3">Status 3</option>
                                <option value="4">Status 4</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <p className="cGrey">Type</p>
                        <div className="dropdownWrap">
                            <img src={require('../../assets/icons/arrow-drop-down.png')} alt="dropdown"/>
                            <select className="mySelectDropDown">
                                <option value="1">Type 1</option>
                                <option value="2">Type 2</option>
                                <option value="3">Type 3</option>
                                <option value="4">Type 4</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wrapInputOrderFilter">
                <p className="cGrey">Asal</p>
                <input type="text" />
                <div className="footerInputOrderFilter">
                    <div>
                        <p className="cGrey">Tipe Kargo</p>
                        <div className="dropdownWrap">
                            <img src={require('../../assets/icons/arrow-drop-down.png')} alt="dropdown"/>
                            <select className="mySelectDropDown">
                                <option value="1">Kargo 1</option>
                                <option value="2">Kargo 2</option>
                                <option value="3">Kargo 3</option>
                                <option value="4">kargo 4</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <p className="cGrey">Incoterms</p>
                        <div className="dropdownWrap">
                            <img src={require('../../assets/icons/arrow-drop-down.png')} alt="dropdown"/>
                            <select className="mySelectDropDown">
                                <option value="1">Incoterms 1</option>
                                <option value="2">Incoterms 2</option>
                                <option value="3">Incoterms 3</option>
                                <option value="4">Incoterms 4</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wrapInputOrderFilter">
                <p className="cGrey">Tujuan</p>
                <input type="text" />
                <div className="footerInputOrderFilterVertical">
                    <div>
                        <p className="cGrey">Tipe Kontainer</p>
                    </div>
                    <div className="wrapdrpdown">
                        <img src={require('../../assets/icons/arrow-drop-down.png')} alt="dropdown"/>
                        <select className="mySelectDropDown">
                            <option value="1">Kontainer 1</option>
                            <option value="2">Kontainer 2</option>
                            <option value="3">Kontainer 3</option>
                            <option value="4">Kontainer 4</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="wrapInputOrderFilter">
                <p className="cGrey">ETA</p>
                <input type="date" />
                <div className="footerInputOrderFilter">
                    <div>
                        <br/>
                        <button className="btnFilter">Filter</button>
                    </div>
                    <div>
                        <br/>
                        <button className="btnFilterReset">Reset Filter</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormOrderFilter