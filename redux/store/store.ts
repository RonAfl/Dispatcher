import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import newsReducer from '../slices/newsSlice';
import { fetchNews } from '../thunks/newsThunk';

const store = configureStore({
  reducer: {
    news: newsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export { fetchNews };
export default store;
