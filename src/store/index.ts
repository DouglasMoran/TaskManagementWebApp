// Store
import { configureStore, combineSlices } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

// Slice
import taskSlice from '@store/slices/task/taskSlice';

const rootReducer = combineSlices({
  task: taskSlice,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type MainState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
