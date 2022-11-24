import {configureStore} from '@reduxjs/toolkit'
import { authSlice } from './slices/AuthSlice'
export const store= configureStore({
  reducer:authSlice.reducer,
});
export type RootState= ReturnType<typeof store.getState>;
export type AppDispatch= ReturnType< typeof store.dispatch>;