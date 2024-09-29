import React, { useState } from 'react';

import { useSelector } from 'react-redux';

import { MainState, useAppDispatch } from '@store/index';

import { setTask } from '@store/slices/task/taskSlice';

import { ITask, ITaskStatusSections } from '@interfaces/app';
import { validationTaskSchema } from '@utils/validations';
import { STATUS_SECTIONS_LIST } from '@mocks/task';

const useTask = () => {
  const dispatch = useAppDispatch();

  const { task } = useSelector((state: MainState) => state.task);

  const [statusSections, setStatusSections] =
    useState<ITaskStatusSections[]>(STATUS_SECTIONS_LIST);

  const isTaskValid = validationTaskSchema.isValidSync(task);

  const onStoreTask = (task: Partial<ITask>) => {
    dispatch(setTask(task));
  };

  const onChangeTaskTitle = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => onStoreTask({ title: value });

  const onSubmitTask = async () => {
    try {
      console.log('TASK ::: ', task);
    } catch (error) {
      console.log('ERROR ::: TASK ::: ', error);
    }
  };

  return {
    task,
    isTaskValid,
    statusSections,
    onChangeTaskTitle,
    onSubmitTask,
    onStoreTask,
  };
};

export default useTask;
