import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { apiKeys } from '../../utils/apiKey';
import { ConstApi } from '../../utils/const/constantsApi/ConstApi';

export const fetchNews = createAsyncThunk('news/fetchNews', async () => {
  const response = await axios.get(ConstApi.NEWS_API+apiKeys.NEWS_API_KEY);
  return response.data.articles;
});

