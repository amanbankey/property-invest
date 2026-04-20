import { combineReducers } from "@reduxjs/toolkit"

import kycReducer from "../slices/kycslice"


const rootReducer = combineReducers({
  kyc: kycReducer,
 
})

export default rootReducer
