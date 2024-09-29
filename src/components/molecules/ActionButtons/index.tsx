import { LiaPlusSolid } from 'react-icons/lia';

import TaskDialog from '@components/organisms/TaskDialog';
import ToggleButton from '@components/atoms/ToggleButton';
import Button from '@components/atoms/Button';
import useTask from '@hooks/useTask';

const ActionButtons = () => {
  const { isTaskModalOpen, onCloseTaskModal } = useTask();

  return (
    <div className="flex w-full flex-row justify-between">
      {/* Toggle buttons view board  */}
      <ToggleButton />
      {/* Add task button */}
      <Button
        variant="default"
        className="h-10 w-10 rounded-md bg-primary-4 p-2 hover:bg-primary-3"
        onClick={onCloseTaskModal}
      >
        <LiaPlusSolid className="h-8 w-8 text-neutral-1" />
      </Button>
      <TaskDialog isOpen={isTaskModalOpen} onClose={onCloseTaskModal}>
        <TaskDialog.EstimateButton />
        <TaskDialog.AssigneeButton />
        <TaskDialog.LabelButton />
        <TaskDialog.CalendarButton />
      </TaskDialog>
    </div>
  );
};

export default ActionButtons;
