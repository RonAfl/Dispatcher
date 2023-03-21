import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import newsReducer from '../slices/newsSlice';
import authReducer from '../slices/authSlice';
import profileReducer from '../slices/profileSlice';
import favoritesReducer from '../slices/favsSlice';

const store = configureStore({
  reducer: {
    news: newsReducer,
    auth: authReducer,
    profile: profileReducer,
    favorites: favoritesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export default store;
