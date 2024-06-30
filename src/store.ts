import { configureStore } from '@reduxjs/toolkit';
import scooterReducer from './features/scooter/scooterSlice';

export const store = configureStore({
  reducer: {
    scooter: scooterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
