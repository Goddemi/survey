import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface SurveyContentType {
  value: number;
}

const initialState: SurveyContentType = {
  value: 0,
};

export const surveyContentSlice = createSlice({
  name: "survey",
  initialState,
  reducers: {
    SetSurveyContent: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

export const { SetSurveyContent } = surveyContentSlice.actions;

export default surveyContentSlice.reducer;
