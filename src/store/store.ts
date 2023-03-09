import { configureStore } from "@reduxjs/toolkit";
import surveyHeaderReducer from "./surveyHeader/surveyHeader";
import questionListReducer from "./questionList/questionList";

export const store = configureStore({
  reducer: {
    surveyHeader: surveyHeaderReducer,
    questionList: questionListReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AddDispatch = typeof store.dispatch;
