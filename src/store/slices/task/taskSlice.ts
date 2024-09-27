import { createSlice } from '@reduxjs/toolkit';

import { TaskState } from '@interfaces/app';

const initialState = {
  loading: 'idle',
  errorMessage: '',
  data: null,
  viewType: 'BOARD',
  searchQuery: '',
  task: null,
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
    setTask: (state, { payload }) => {
      const { task } = state;

      let payloadUpdated = { ...payload };

      // If the same estimate point is selected will be setting to null again
      if (payloadUpdated?.points?.id) {
        const isSamePoint = task?.points?.id === payload.points.id;
        payloadUpdated.points = isSamePoint ? null : payload.points;
      }

      // If the same member is selected will be setting to null again
      if (payloadUpdated?.member?.id) {
        const isSamePoint = task?.member?.id === payload.member.id;
        payloadUpdated.member = isSamePoint ? null : payload.member;
      }

      // Logic for select multiple labels
      if (Array.isArray(payloadUpdated?.labels)) {
        const newItem = payloadUpdated.labels[0];

        const prevLabelsSelectedId = Array.isArray(task?.labels)
          ? task?.labels?.map((item) => item.id)
          : [];

        // Add the first label
        if (!prevLabelsSelectedId?.includes(newItem.id)) {
          payloadUpdated.labels = [newItem];
        }

        // Add multiple labels
        if (
          Array.isArray(task?.labels) &&
          !prevLabelsSelectedId?.includes(newItem.id)
        ) {
          payloadUpdated.labels = task.labels.concat(newItem);
        }

        // Remove the label if was prev selected
        if (prevLabelsSelectedId?.includes(newItem.id)) {
          payloadUpdated.labels = task?.labels.filter(
            (item) => item.id !== newItem.id,
          );
        }
      }

      state.task = { ...task, ...payloadUpdated };
    },
  },
  extraReducers: () => {},
});

export const { setTaskErrorMessage, setTaskViewType, setSearchQuery, setTask } =
  appSlice.actions;

export default appSlice.reducer;
