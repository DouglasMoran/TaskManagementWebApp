import { createSlice } from '@reduxjs/toolkit';

import { TaskState } from '@interfaces/app';

const initialState = {
  loading: 'idle',
  errorMessage: '',
  data: null,
  viewType: 'BOARD',
  searchQuery: '',
} satisfies TaskState as TaskState;

const appSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    setTaskErrorMessage: (state, { payload }) => {
      state.errorMessage = payload;
    },
    setTaskViewType: (state, { payload }) => {
      state.viewType = payload;
    },
    setSearchQuery: (state, { payload }) => {
      state.searchQuery = payload;
    },
  },
  extraReducers: () => {},
});

export const { setTaskErrorMessage, setTaskViewType, setSearchQuery } =
  appSlice.actions;

export default appSlice.reducer;
