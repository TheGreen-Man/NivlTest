import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  myString: "",
};

const slice = createSlice({
  name: "slice",
  initialState,
  reducers: {
    updateMyString: (state, action) => {
      state.myString = action.payload;
    },
  },
});

export const { updateMyString } = slice.actions;
export default slice.reducer;
