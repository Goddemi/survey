import { configureStore } from "@reduxjs/toolkit";
import contentSaveReducer from "./surveyContent/contentSaveButton";
import questionListReducer from "./questionList/questionList";

export const store = configureStore({
  reducer: {
    savebutton: contentSaveReducer,
    questionList: questionListReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AddDispatch = typeof store.dispatch;
