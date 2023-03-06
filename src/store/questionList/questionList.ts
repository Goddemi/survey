import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface QuestionListType {
  id: string;
  option: string;
  questionTitle: string;
}

const initialState: any = {
  list: [
    { id: "firstForm", option: "short", questionTitle: "what is your name" },
  ],
};

export const questionListSlice = createSlice({
  name: "questionList",
  initialState,
  reducers: {
    addQuestionList: (state, action: PayloadAction<any>) => {
      state.list = [...state.list, action.payload];
    },
    deleteQuestionList: (state, action: PayloadAction<any>) => {
      state.list = state.list.filter((element: QuestionListType) => {
        return element.id !== action.payload.id;
      });
    },
  },
});

export const { addQuestionList, deleteQuestionList } =
  questionListSlice.actions;

export default questionListSlice.reducer;
