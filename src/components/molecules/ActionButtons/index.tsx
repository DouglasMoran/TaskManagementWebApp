import { LiaPlusSolid } from 'react-icons/lia';

import TaskDialog from '@components/organisms/TaskDialog';
import ToggleButton from '@components/atoms/ToggleButton';
import Button from '@components/atoms/Button';

import useTask from '@hooks/useTask';

const ActionButtons = () => {
  const { isTaskModalOpen, onToggleModal } = useTask();

  return (
    <div className="flex w-full flex-row justify-between">
      {/* Toggle buttons view board  */}
      <ToggleButton />
      {/* Add task button */}
      <Button
        variant="default"
        className="h-10 w-10 rounded-md bg-primary-4 p-2 hover:bg-primary-3"
        onClick={onToggleModal}
      >
        <LiaPlusSolid className="h-8 w-8 text-neutral-1" />
      </Button>
      <TaskDialog isOpen={isTaskModalOpen} onClose={onToggleModal}>
        <TaskDialog.EstimateButton />
        <TaskDialog.AssigneeButton />
        <TaskDialog.LabelButton />
        <TaskDialog.CalendarButton />
        <TaskDialog.TaskStatusButton />
      </TaskDialog>
    </div>
  );
};

export default ActionButtons;
