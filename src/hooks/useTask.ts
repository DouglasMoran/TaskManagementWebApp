import React from 'react';

import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { MainState, useAppDispatch } from '@store/index';

import {
  addTaskToSection,
  onClearTask,
  onDeleteTask,
  onUpdateTask,
  onToggleTaskModal,
  setTask,
  onToggleTaskUpdate,
  setTaskSectionIdSelected,
} from '@store/slices/task/taskSlice';

import { ITask } from '@interfaces/app';
import { validationTaskSchema } from '@utils/validations';

import { STATUS_COLUMN_ID } from '@constants/app';

type TaskActionProps = {
  sectionId: string;
  taskId: string;
  taskUpdated?: ITask;
};

const useTask = () => {
  const dispatch = useAppDispatch();

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
  }: React.ChangeEvent<HTMLInputElement>) => onStoreTask({ title: value });

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
        dispatch(
          addTaskToSection({
            sectionId: STATUS_COLUMN_ID.WORKING,
            task: {
              ...task,
              id: uuidv4(),
            },
          }),
        );
        onToggleModal();
      }

      dispatch(onClearTask());
    }
  };

  return {
    isTaskModalOpen,
    isTaskUpdate,
    isTaskValid,
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
