import { createStore } from "redux";

import data from '../assets/data/db.json'

const globalState = data

// Redux Versi Simple
const order = (state = globalState, action)=>{
    return state
}

let store = createStore(order)

export default store