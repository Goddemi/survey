import { configureStore } from "@reduxjs/toolkit";
import surveyReducer from "./surveyContent/surveyContent";
import questionListReducer from "./questionList/questionList";

export const store = configureStore({
  reducer: {
    surveyContent: surveyReducer,
    questionList: questionListReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AddDispatch = typeof store.dispatch;
