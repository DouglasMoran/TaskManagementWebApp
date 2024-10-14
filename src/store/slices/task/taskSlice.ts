import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ITask, IUser, TaskState } from '@interfaces/app';

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
  // query keys
  users: null,
} satisfies TaskState as TaskState;

const appSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    setUsers: (state, { payload }: PayloadAction<IUser[]>) => {
      if (Array.isArray(payload)) {
        state.users = payload;
      }
    },
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
    setTask: (state, { payload }: PayloadAction<Partial<ITask>>) => {
      const { task } = state;

      let payloadUpdated = { ...payload };

      // If the same estimate point is selected will be setting to null again
      if (payloadUpdated?.pointEstimate?.value) {
        const isSamePoint =
          task?.pointEstimate?.value === payload.pointEstimate?.value;
        payloadUpdated.pointEstimate = isSamePoint
          ? null
          : payload.pointEstimate;
      }

      // If the same member is selected will be setting to null again
      if (payloadUpdated?.assignee?.id) {
        const isSameAssignee = task?.assignee?.id === payload.assignee?.id;
        payloadUpdated.assignee = isSameAssignee ? null : payload.assignee;
      }

      // Logic for select multiple tags
      if (Array.isArray(payloadUpdated?.tags)) {
        const newTagSelected = payloadUpdated.tags[0];

        const prevTagsSelected = Array.isArray(task?.tags) ? task?.tags : [];

        // Add the first tag
        if (!prevTagsSelected?.includes(newTagSelected)) {
          payloadUpdated.tags = [newTagSelected];
        }

        // Add multiple tags
        if (
          Array.isArray(task?.tags) &&
          !prevTagsSelected?.includes(newTagSelected)
        ) {
          payloadUpdated.tags = task.tags.concat(newTagSelected);
        }

        // Remove the tag if was prev selected
        if (prevTagsSelected?.includes(newTagSelected)) {
          payloadUpdated.tags = task?.tags.filter(
            (item) => item !== newTagSelected,
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
  // query actions
  setUsers,
} = appSlice.actions;

export default appSlice.reducer;
