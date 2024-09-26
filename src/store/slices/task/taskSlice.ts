import { createSlice } from '@reduxjs/toolkit';

import { TaskState } from '@interfaces/app';

const initialState = {
  loading: 'idle',
  errorMessage: '',
  data: null,
  viewType: 'BOARD',
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
  },
  extraReducers: () => {},
});

export const { setTaskErrorMessage, setTaskViewType } = appSlice.actions;

export default appSlice.reducer;
