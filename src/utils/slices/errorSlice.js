import { createSlice } from "@reduxjs/toolkit";

const errorSlice = createSlice({
  name: "error",
  initialState: {
    errorMessage: null,
  },
  reducers: {
    addErrorMessage: (state, action) => {
      state.errorMessage = action.payload;
    },
  },
});

export const { addErrorMessage } = errorSlice.actions;

export default errorSlice.reducer;
