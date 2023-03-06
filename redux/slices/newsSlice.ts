import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store/store';
import { News } from '../../features/homepage/interfaces/News';
import { fetchNews } from '../thunks/newsThunk';

interface NewsState {
  loading: boolean;
  error: string | null;
  data: News[];
}

const initialState: NewsState = {
  loading: false,
  error: null,
  data: [],
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchNews.pending, state => {
        state.loading = true;
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.loading = false;
        state.data = [];
        state.error = action.error.message ?? 'Something went wrong';
      });
  },
});

export const selectNews = (state: RootState) => state.news;

export default newsSlice.reducer;
