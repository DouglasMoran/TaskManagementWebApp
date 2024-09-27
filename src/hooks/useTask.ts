import React, { useEffect } from 'react';

import { useSelector } from 'react-redux';

import { MainState, useAppDispatch } from '@store/index';

import { setTask } from '@store/slices/task/taskSlice';

import { ITask } from '@interfaces/app';

const useTask = () => {
  const dispatch = useAppDispatch();

  const { task } = useSelector((state: MainState) => state.task);

  const onStoreTask = (task: Partial<ITask>) => {
    dispatch(setTask(task));
  };

  const onChangeTaskTitle = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => onStoreTask({ title: value });

  useEffect(() => {
    console.log('CURRENT TASK ::: ', task);
  }, [task]);

  return {
    task,
    onChangeTaskTitle,
    onStoreTask,
  };
};

export default useTask;
