import React from 'react';

import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { MainState, useAppDispatch } from '@store/index';

import {
  addTaskToSection,
  onClearTask,
  onToggleTaskModal,
  setTask,
} from '@store/slices/task/taskSlice';

import { ITask } from '@interfaces/app';
import { validationTaskSchema } from '@utils/validations';

import { STATUS_COLUMN_ID } from '@constants/app';

const useTask = () => {
  const dispatch = useAppDispatch();

  const { task, isTaskModalOpen } = useSelector(
    (state: MainState) => state.task,
  );

  const isTaskValid = validationTaskSchema.isValidSync(task);

  const onCloseTaskModal = () => dispatch(onToggleTaskModal());

  const onStoreTask = (task: Partial<ITask>) => {
    dispatch(setTask(task));
  };

  const onChangeTaskTitle = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => onStoreTask({ title: value });

  const onSubmitTask = async () => {
    if (task) {
      dispatch(
        addTaskToSection({
          sectionId: STATUS_COLUMN_ID.WORKING,
          task: {
            ...task,
            id: uuidv4(),
          },
        }),
      );
      dispatch(onClearTask());
      onCloseTaskModal();
    }
  };

  return {
    isTaskModalOpen,
    isTaskValid,
    task,
    onCloseTaskModal,
    onChangeTaskTitle,
    onSubmitTask,
    onStoreTask,
  };
};

export default useTask;
