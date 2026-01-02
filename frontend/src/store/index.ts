import { configureStore } from "@reduxjs/toolkit";
import workflowReducer from "./workflow";

export const store = configureStore({
  reducer: {
    workflow: workflowReducer,
  },
});

// Types (TypeScript ke liye)
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
