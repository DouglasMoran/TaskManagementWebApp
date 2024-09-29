import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ITask, TaskState } from '@interfaces/app';

import { STATUS_SECTIONS_LIST } from '@mocks/task';

const initialState = {
  loading: 'idle',
  errorMessage: '',
  data: null,
  viewType: 'BOARD',
  searchQuery: '',
  task: null,
  taskStatusSections: STATUS_SECTIONS_LIST, // Dummy data tmp
  isTaskModalOpen: false,
  isTaskUpdate: false,
  // Section selected is use tmp to achieve task updating
  taskSectionIdSelected: '',
} satisfies TaskState as TaskState;

const appSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    setTaskSectionIdSelected: (state, { payload }) => {
      state.taskSectionIdSelected = payload;
    },
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
    setTaskSections: (state, { payload }) => {
      state.taskStatusSections = payload;
    },
    onToggleTaskModal: (state) => {
      state.isTaskModalOpen = !state.isTaskModalOpen;
    },
    onToggleTaskUpdate: (state) => {
      state.isTaskUpdate = !state.isTaskUpdate;
    },
    onClearTask: (state) => {
      state.task = null;
    },
    addTaskToSection: (
      state,
      { payload }: PayloadAction<{ sectionId: string; task: ITask }>,
    ) => {
      if (state.taskStatusSections) {
        const section = state.taskStatusSections?.find(
          (section) => section.id === payload.sectionId,
        );
        if (section) {
          section.tasks?.push(payload.task);
        }
      }
    },
    onUpdateTask: (
      state,
      {
        payload,
      }: PayloadAction<{
        sectionId: string;
        taskId: string;
        taskUpdated?: ITask;
      }>,
    ) => {
      if (state.taskStatusSections) {
        const sectionIndex = state.taskStatusSections.findIndex(
          (section) => section.id === payload.sectionId,
        );

        if (sectionIndex !== -1) {
          const section = state.taskStatusSections[sectionIndex];

          const taskSelected = section.tasks?.find(
            (task: ITask) => task.id === payload.taskId,
          );

          if (taskSelected) {
            state.task = { ...taskSelected };

            section.tasks = section.tasks ?? [];

            section.tasks = section.tasks?.map((task: ITask) => {
              if (task.id === payload.taskId && payload.taskUpdated) {
                return { ...payload.taskUpdated };
              }
              return task;
            });

            state.taskStatusSections[sectionIndex] = { ...section };
          }
        }
      }
    },
    onDeleteTask: (
      state,
      { payload }: PayloadAction<{ sectionId: string; taskId: string }>,
    ) => {
      if (state.taskStatusSections) {
        const sectionIndex = state.taskStatusSections.findIndex(
          (section) => section.id === payload.sectionId,
        );
        if (sectionIndex !== -1) {
          const section = state.taskStatusSections[sectionIndex];

          section.tasks = section.tasks ?? [];

          section.tasks = section.tasks?.filter(
            (task: ITask) => task.id !== payload.taskId,
          );

          state.taskStatusSections[sectionIndex] = { ...section };
        }
      }
    },
  },
  extraReducers: () => {},
});

export const {
  onClearTask,
  onUpdateTask,
  onDeleteTask,
  onToggleTaskModal,
  onToggleTaskUpdate,
  addTaskToSection,
  setTaskSectionIdSelected,
  setTaskErrorMessage,
  setTaskSections,
  setTaskViewType,
  setSearchQuery,
  setTask,
} = appSlice.actions;

export default appSlice.reducer;
