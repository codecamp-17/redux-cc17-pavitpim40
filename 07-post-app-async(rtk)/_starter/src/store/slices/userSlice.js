import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import apiUrl from '../../utils/apiURL';

// FetchPostAPI == ActionCreator Async (Thunk จัดการ)
// 1st Parameter of async fn : payload จากการ dispatch
// 2nd Parameter of async fn : thunkAPI = {getState,dispatch, rejectWithValue}
export const fetchPostThunkAPI = createAsyncThunk('posts/fetchPosts', async (payload, thunkAPI) => {
  try {
    const response = await axios.get(apiUrl);
    return response.data.slice(0, 10); // action.payload (case fulfilled)
  } catch (error) {
    return thunkAPI.rejectWithValue('Error Message');
    // return 'Error Message';
  }
});

export const searchPostThunkAPI = createAsyncThunk(
  'posts/searchPost',
  async (payload, thunkAPI) => {
    try {
      const response = await axios.get(`${apiUrl}/${payload.id}`);
      return [response.data];
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const initialState = {
  data: [],
  loading: false,
  error: null,
};
const postSlice = createSlice({
  name: 'posts',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPostThunkAPI.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPostThunkAPI.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchPostThunkAPI.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    builder
      .addCase(searchPostThunkAPI.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchPostThunkAPI.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(searchPostThunkAPI.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// export reducer
export default postSlice.reducer;
