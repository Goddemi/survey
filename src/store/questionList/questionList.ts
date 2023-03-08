import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { QuestionType } from "../../pages/survey/question/type/types";

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
      multiAnswer: [{ id: "firstAnswer", content: "" }],
    },
  ],
};

export const questionListSlice = createSlice({
  name: "questionList",
  initialState,
  reducers: {
    addQuestionList: (state) => {
      const newId = new Date().getTime().toString();
      const newQuestion = {
        id: newId,
        option: "short",
        questionName: "",
        textAnswer: "",
        multiAnswer: [],
      };
      state.list = [...state.list, newQuestion];
    },

    updateQuestionList: (state, action: PayloadAction<any>) => {
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

    deleteQuestionList: (state, action: PayloadAction<any>) => {
      state.list = state.list.filter((element: QuestionType) => {
        return element.id !== action.payload;
      });
    },

    copyQuestionList: (state, action: PayloadAction<any>) => {
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
