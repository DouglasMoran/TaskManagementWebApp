import React, { useEffect } from 'react';

import { useSelector } from 'react-redux';
import { useMutation, useQuery } from '@apollo/client';

import { MainState, useAppDispatch } from '@store/index';

import {
  onClearTask,
  onDeleteTask,
  onUpdateTask,
  onToggleTaskModal,
  setTask,
  onToggleTaskUpdate,
  setTaskSectionIdSelected,
  filterTasksByStatus,
} from '@store/slices/task/taskSlice';

import { GET_ALL_TASK } from '@services/graphql/queries/tasks';
import { CREATE_TASK } from '@services/graphql/mutations/task';

import { validationTaskSchema } from '@utils/validations';

import { ICreateTaskInput, ITask } from '@interfaces/app';

type QueryTask = {
  tasks: ITask[];
};

type TaskActionProps = {
  sectionId: string;
  taskId: string;
  taskUpdated?: ITask;
};

const useTask = () => {
  const dispatch = useAppDispatch();

  const [
    createTask,
    { loading: isLoadingCreation, error: errorCreation, data: dataCreation },
  ] = useMutation(CREATE_TASK);
  const { loading: isLoading, error, data } = useQuery<QueryTask>(GET_ALL_TASK);

  const { task, isTaskModalOpen, isTaskUpdate, taskSectionIdSelected } =
    useSelector((state: MainState) => state.task);

  const isTaskValid = validationTaskSchema.isValidSync(task);

  const onToggleModal = () => dispatch(onToggleTaskModal());

  const onToggleEditMode = () => dispatch(onToggleTaskUpdate());

  const onUpdate = ({ sectionId, taskId, taskUpdated }: TaskActionProps) => {
    dispatch(onUpdateTask({ sectionId, taskId, taskUpdated }));
    onToggleEditMode();
    onToggleModal();
    dispatch(setTaskSectionIdSelected(sectionId));
  };

  const onDelete = ({ sectionId, taskId }: TaskActionProps) => {
    dispatch(onDeleteTask({ sectionId, taskId }));
  };

  const onStoreTask = (task: Partial<ITask>) => {
    dispatch(setTask(task));
  };

  const onChangeTaskTitle = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => onStoreTask({ name: value });

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
    } catch (error) {
      console.log('ERROR ::: CREATE TASK ::: ', error);
    }
  };

  const handleSubmitTask = async () => {
    if (task) {
      if (isTaskUpdate) {
        onUpdate({
          sectionId: taskSectionIdSelected,
          taskId: task.id,
          taskUpdated: task,
        });
        dispatch(setTaskSectionIdSelected(null));
      } else {
        await handleCreateTask();
        onToggleModal();
      }

      dispatch(onClearTask());
    }
  };

  useEffect(() => {
    if (data?.tasks) {
      dispatch(filterTasksByStatus(data.tasks));
    }
  }, [data, dispatch]);

  return {
    isLoadingCreation,
    errorCreation,
    dataCreation,
    isTaskModalOpen,
    isTaskUpdate,
    isTaskValid,
    isLoading,
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
