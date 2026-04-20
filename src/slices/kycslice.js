import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    aadhaarNumber: "",
    name: "",
    email:"",
    dob:"",
    address:"",
    panNum:"",
    isVerified: false,
}

const kycSlice = createSlice({
  name: "kyc",
  initialState: initialState,
  reducers: {
      setAadhaar: (state, action) => {
        state.aadhaarNumber = action.payload;
      },

      setPan: (state, action) => {
        state.panNum = action.payload;
      },

      setKycData: (state, action) => {
        const {  name, address, email, dob} = action.payload;
        state.name = name;
        state.address = address;
        state.email = email;
        state.dob = dob;
        state.isVerified = true;
      },
    
  },
})

export const { setAadhaar, setKycData, setPan  } = kycSlice.actions

export default kycSlice.reducer
