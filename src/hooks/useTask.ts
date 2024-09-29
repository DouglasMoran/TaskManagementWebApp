import React from 'react';

import { useSelector } from 'react-redux';

import { MainState, useAppDispatch } from '@store/index';

import { setTask } from '@store/slices/task/taskSlice';

import { ITask } from '@interfaces/app';
import { validationTaskSchema } from '@utils/validations';

const useTask = () => {
  const dispatch = useAppDispatch();

  const { task } = useSelector((state: MainState) => state.task);

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
    onChangeTaskTitle,
    onSubmitTask,
    onStoreTask,
  };
};

export default useTask;
