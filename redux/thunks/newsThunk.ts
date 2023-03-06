import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchNews = createAsyncThunk('news/fetchNews', async () => {
  const response = await axios.get(
    'https://newsapi.org/v2/top-headlines?country=us&apiKey=fd251f4e34464e29ab076f6d5a615e8f'
  );
  return response.data.articles;
});
