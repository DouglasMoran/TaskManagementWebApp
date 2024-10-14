import React, { useEffect } from 'react';

import { useSelector } from 'react-redux';
import { useLazyQuery, useMutation } from '@apollo/client';

import { MainState, useAppDispatch } from '@store/index';

import {
  enableRefreshTasks,
  onToggleTaskModal,
  setTaskById,
  setTask,
  filterTasksByStatus,
} from '@store/slices/task/taskSlice';

import {
  CREATE_TASK,
  UPDATE_TASK,
  DELETE_TASK,
} from '@services/graphql/mutations/task';
import { GET_ALL_TASK } from '@services/graphql/queries/tasks';

import { validationTaskSchema } from '@utils/validations';

import { ICreateTaskInput, ITask, IUpdateTaskInput } from '@interfaces/app';

type QueryTask = {
  tasks: ITask[];
};

const useTask = () => {
  const dispatch = useAppDispatch();

  // Delete a task
  const [
    deleteTask,
    { loading: isDeleting, error: errrorDeleting, data: dataDeleting },
  ] = useMutation(DELETE_TASK);
  // Update a task
  const [
    updateTask,
    { loading: isLoadingUpdating, error: errorUpdating, data: dataUpdating },
  ] = useMutation(UPDATE_TASK);
  // Create new task
  const [
    createTask,
    { loading: isLoadingCreation, error: errorCreation, data: dataCreation },
  ] = useMutation(CREATE_TASK);
  // Get all taks
  const [getTasks, { loading: isLoading, error, data, refetch: refreshTasks }] =
    useLazyQuery<QueryTask>(GET_ALL_TASK);

  const { task, isTaskModalOpen, isTaskUpdate, allowRefreshTasks } =
    useSelector((state: MainState) => state.task);

  const isTaskValid = validationTaskSchema.isValidSync(task);

  const onToggleModal = () => dispatch(onToggleTaskModal());

  const onStoreTask = (task: Partial<ITask>) => {
    dispatch(setTask(task));
  };

  const onChangeTaskTitle = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => onStoreTask({ name: value });

  const allowRefreshTask = () => dispatch(enableRefreshTasks());

  const onUpdate = (taskId: string) => {
    dispatch(setTaskById({ taskId }));
    onToggleModal();
  };

  const onDelete = async (taskId: string) => {
    try {
      const deleteTaskInput = {
        id: taskId,
      };

      await deleteTask({
        variables: {
          input: deleteTaskInput,
        },
      });

      // Refetch task list
      await refreshTasks();
    } catch (error) {
      // Here the error will be reported using Sentry integration for example
      console.log('::: ERROR :::: DELETING TASK ::: ', error);
    } finally {
      allowRefreshTask();
    }
  };

  const handleCreateTask = async () => {
    if (!task) return;

    try {
      const taskInput: ICreateTaskInput = {
        assigneeId: task.assignee?.id ?? '',
        dueDate: task.date,
        tags: task.tags,
        name: task.name,
        pointEstimate: task.pointEstimate?.value ?? 'ZERO',
        status: task.status,
      };

      await createTask({
        variables: {
          input: taskInput,
        },
      });

      // Refetch task list
      await refreshTasks();
    } catch (error) {
      // Here the error will be reported using Sentry integration for example
      console.log('::: ERROR :::: CREATE TASK ::: ', error);
    } finally {
      allowRefreshTask();
    }
  };

  const handleUpdateTask = async () => {
    if (!task) return;

    try {
      const updateTaskInput: IUpdateTaskInput = {
        id: task.id,
        assigneeId: task.assignee?.id ?? '',
        dueDate: task.date,
        tags: task.tags,
        name: task.name,
        status: task.status,
        pointEstimate: task.pointEstimate?.value ?? 'ZERO',
      };

      await updateTask({
        variables: {
          input: updateTaskInput,
        },
      });

      // Refetch task list
      await refreshTasks();
    } catch (error) {
      // Here the error will be reported using Sentry integration for example
      console.log('::: ERROR :::: UPDATE TASK ::: ', error);
    } finally {
      allowRefreshTask();
    }
  };

  const handleSubmitTask = async () => {
    if (task) {
      if (isTaskUpdate) {
        await handleUpdateTask();
      } else {
        await handleCreateTask();
      }

      onToggleModal();
    }
  };

  useEffect(() => {
    if (allowRefreshTasks) {
      getTasks();
      if (data) {
        dispatch(filterTasksByStatus(data.tasks));
      }
    }
  }, [allowRefreshTasks, getTasks, dispatch, data]);

  return {
    isLoadingUpdating,
    isLoadingCreation,
    isDeleting,
    isLoading,
    errrorDeleting,
    errorUpdating,
    errorCreation,
    dataUpdating,
    dataDeleting,
    dataCreation,
    isTaskModalOpen,
    isTaskUpdate,
    isTaskValid,
    error,
    data,
    task,
    onToggleModal,
    onChangeTaskTitle,
    handleSubmitTask,
    onStoreTask,
    onUpdate,
    onDelete,
  };
};

export default useTask;
