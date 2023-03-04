import { configureStore } from "@reduxjs/toolkit";
import surveyReducer from "./surveyContent/surveyContent";

export const store = configureStore({
  reducer: {
    surveyContent: surveyReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AddDispatch = typeof store.dispatch;
