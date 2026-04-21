import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    aadhaarPreview: null,
    panPreview: null,
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
        state.aadhaarPreview = action.payload.aadhaarPreview;
      },

      setPan: (state, action) => {
        // state.panNum = action.payload;
        state.panPreview = action.payload.panPreview;
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
