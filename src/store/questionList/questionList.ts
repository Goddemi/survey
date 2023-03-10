import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { QuestionType } from "../../type/types";
interface QuestionListType {
  list: QuestionType[];
}

const initialState: QuestionListType = {
  list: [
    {
      id: "firstForm",
      option: "short",
      questionName: "",
      textAnswer: "",
      multiAnswer: [{ id: "firstAnswer", content: "", checked: false }],
      essential: true,
      essentialValueChecker: false,
    },
  ],
};

export const questionListSlice = createSlice({
  name: "questionList",
  initialState,
  reducers: {
    addQuestionList: (state) => {
      const newId = new Date().getTime().toString();
      const newQuestion = { ...initialState.list[0], id: newId };
      state.list = [...state.list, newQuestion];
    },

    updateQuestionList: (state, action: PayloadAction<QuestionType>) => {
      state.list = state.list.map((question: QuestionType) => {
        if (question.id === action.payload.id) {
          return {
            ...question,
            ...action.payload,
          };
        } else {
          return question;
        }
      });
    },

    deleteQuestionList: (state, action: PayloadAction<string>) => {
      state.list = state.list.filter((element: QuestionType) => {
        return element.id !== action.payload;
      });
    },

    copyQuestionList: (state, action: PayloadAction<string>) => {
      const copyQuestion = state.list.filter((element: QuestionType) => {
        return element.id === action.payload;
      });
      const newId = new Date().getTime().toString();
      const newCopyQuestion = { ...copyQuestion[0], id: newId };
      state.list = [...state.list, newCopyQuestion];
    },
  },
});

export const {
  addQuestionList,
  deleteQuestionList,
  updateQuestionList,
  copyQuestionList,
} = questionListSlice.actions;

export default questionListSlice.reducer;
