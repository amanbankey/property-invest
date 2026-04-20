import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    aadhaarNumber: "",
    name: "",
    isVerified: false,
}

const kycSlice = createSlice({
  name: "kyc",
  initialState: initialState,
  reducers: {
    setAadhaar: (state, action) => {
        state.aadhaarNumber = action.payload;
      },

    setKycData: (state, action) => {
        const { aadhaarNumber, name } = action.payload;
        state.aadhaarNumber = aadhaarNumber;
        state.name = name;
        state.isVerified = true;
      },
    
  },
})

export const { setAadhaar, setKycData  } = kycSlice.actions

export default kycSlice.reducer
