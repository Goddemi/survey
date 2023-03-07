import { createSlice } from "@reduxjs/toolkit";

export interface SurveyContentType {
  value: boolean;
}

const initialState: SurveyContentType = {
  value: true,
};

export const surveyContentSlice = createSlice({
  name: "survey",
  initialState,
  reducers: {
    saveContent: (state) => {
      state.value = !state.value;
    },
  },
});

export const { saveContent } = surveyContentSlice.actions;

export default surveyContentSlice.reducer;
