
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  watchlist: [],
};


const watchlistSlice = createSlice({
  name: "watchlist",
  initialState,
  reducers: {
    addToWatchlist: (state, action) => {
      const id = action.payload;
     
      console.log('id in wathcl ist ', id )
    //   duplicate avoid karne ke liye check
    const exists = state.watchlist.includes(id);

    if (!exists) {
      state.watchlist.push(id);
    } else {
      console.log("Already exists");
    }
    },

    removeFromWatchlist: (state, action) => {
      state.watchlist = state.watchlist.filter(
        (property) => property.id !== action.payload
      );
    },

    clearWatchlist: (state) => {
      state.watchlist = [];
    },
  },
});

export const {
  addToWatchlist,
  removeFromWatchlist,
  clearWatchlist,
} = watchlistSlice.actions;

export default watchlistSlice.reducer;