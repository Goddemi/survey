import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { QuestionType } from "../../pages/survey/question/type/questionType";

interface QuestionListType {
  list: QuestionType[];
}

const initialState: QuestionListType = {
  list: [
    { id: "firstForm", option: "short", questionName: "what is your name" },
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
      state.list = state.list.filter((element: QuestionType) => {
        return element.id !== action.payload;
      });
    },
  },
});

export const { addQuestionList, deleteQuestionList } =
  questionListSlice.actions;

export default questionListSlice.reducer;
