import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

export interface SurveyContentType {
  title: string;
  description: string;
}

const initialState: SurveyContentType = {
  title: "",
  description: "",
};

export const surveyHeaderSlice = createSlice({
  name: "surveyHeader",
  initialState,
  reducers: {
    setSurveyTitle: (state, action: PayloadAction<any>) => {
      state.title = action.payload;
    },
    setSurveyDescription: (state, action: PayloadAction<any>) => {
      state.description = action.payload;
    },
  },
});

export const { setSurveyTitle, setSurveyDescription } =
  surveyHeaderSlice.actions;

export default surveyHeaderSlice.reducer;
