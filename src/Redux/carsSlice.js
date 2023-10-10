// unitsSlice.js
import { createSlice } from "@reduxjs/toolkit";

const carSlice = createSlice({
  name: "car",
  initialState: {
    CarList: [],
    pageNO : "1",
    SearchList : [],
    searchQuery : ""

  },
  reducers: {
    setCarDataReducer: (state, action) => {
      console.log("setCarDataReducer payload: ", action.payload);
      state.CarList = action.payload;
    },
    pageNoReducer : (state,action)=>{
      console.log("propertyReducer payload: ", action.payload);
      state.pageNO = action.payload;
    },
    searchCarReducer: (state, action)=>{
      console.log("searchCarReducer payload :  ", action.payload);
       state.SearchList = action.payload;
    },
    searchQueryReducer: (state, action)=>{
      console.log("searchQueryReducer payload: ", action.payload);
      state.searchQuery = action.payload;
    }
  },
});

export const { setCarDataReducer ,pageNoReducer,searchCarReducer,searchQueryReducer } = carSlice.actions;
export default carSlice.reducer;
