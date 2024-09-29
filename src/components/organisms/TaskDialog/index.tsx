import { PropsWithChildren } from 'react';

import { Dialog, DialogPanel } from '@headlessui/react';

import { RiCalendarCheckLine } from 'react-icons/ri';
import { RiPriceTag3Fill } from 'react-icons/ri';
import { FaCarBattery } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa6';

import { Calendar, Button, Avatar } from '@components/atoms';
import { Popover } from '@components/molecules';

import { EstimateList, AssigneeList, LabelList } from './components';

import { formatDate } from '@utils/date-format';

import { ITaskLabel } from '@interfaces/app';

import useTask from '@hooks/useTask';

type TaskDialogProps = PropsWithChildren<{
  isOpen: boolean;
  onClose: () => void;
}>;

const TaskDialog = ({ isOpen, onClose, children }: TaskDialogProps) => {
  const { task, onChangeTaskTitle } = useTask();
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 flex w-screen items-center justify-center bg-neutral-6 p-4">
        <DialogPanel className="w-5/12 space-y-4 rounded-lg bg-neutral-3 p-6">
          <input
            placeholder="Task title"
            value={task?.title ?? ''}
            onChange={onChangeTaskTitle}
            className="flex w-full flex-1 bg-transparent px-4 py-3 text-2xl text-neutral-1 placeholder:text-neutral-2 focus:outline-none focus:ring-transparent"
          />
          <div className="flex flex-wrap items-center justify-around gap-y-4 py-4">
            {children}
          </div>
          <Footer onClose={onClose} />
        </DialogPanel>
      </div>
    </Dialog>
  );
};

const EstimateButton = () => {
  const { task, onStoreTask } = useTask();
  const { points } = task ?? {};
  return (
    <Popover
      contentTitle="Estimate"
      buttonTitle={points ? points.label : 'Estimate'}
      buttonIcon={<FaCarBattery className="h-6 w-6 text-neutral-1" />}
    >
      <EstimateList onSelect={onStoreTask} />
    </Popover>
  );
};

const AssigneeButton = () => {
  const { task, onStoreTask } = useTask();
  const { member } = task ?? {};
  return (
    <Popover
      contentTitle="Assignee"
      buttonTitle={member ? member.name : 'Assignee'}
      buttonIcon={
        member ? (
          <Avatar url={member.profileUrl} classContainer="!h-8 !w-8" />
        ) : (
          <FaUser className="h-6 w-6 text-neutral-1" />
        )
      }
      classBagde="!bg-transparent"
    >
      <AssigneeList onSelect={onStoreTask} />
    </Popover>
  );
};

const LabelButton = () => {
  const { task, onStoreTask } = useTask();

  const { labels } = task ?? {};

  return (
    <>
      {[!labels, Array.isArray(labels) && labels.length === 0].includes(
        true,
      ) && (
        <Popover
          buttonTitle="Label"
          contentTitle="Label"
          buttonIcon={<RiPriceTag3Fill className="h-6 w-6 text-neutral-1" />}
        >
          <LabelList onSelect={onStoreTask} />
        </Popover>
      )}
      {Array.isArray(labels) &&
        labels.map(({ label, id }: ITaskLabel) => {
          return (
            <div key={id} className="flex flex-row">
              <Popover buttonTitle={label} contentTitle="Label">
                <LabelList onSelect={onStoreTask} />
              </Popover>
            </div>
          );
        })}
    </>
  );
};

const CalendarButton = () => {
  const { task, onStoreTask } = useTask();

  const { date } = task ?? {};

  return (
    <Popover
      buttonTitle={date ? formatDate(date) : 'Due date'}
      buttonIcon={<RiCalendarCheckLine className="h-6 w-6 text-neutral-1" />}
      classContent="!max-h-96 !p-0"
    >
      <Calendar
        date={date ? date : new Date()}
        onSelect={(date) => onStoreTask({ date })}
      />
    </Popover>
  );
};

const Footer = ({ onClose }: Pick<TaskDialogProps, 'onClose'>) => {
  const { isTaskValid, isTaskUpdate, handleSubmitTask } = useTask();

  return (
    <div className="flex flex-1 items-center justify-end gap-4">
      <Button
        variant="ghost"
        className="text-neutral-1 hover:bg-neutral-6 hover:text-primary-1"
        onClick={onClose}
      >
        Cancel
      </Button>
      <Button
        disabled={!isTaskValid}
        className="bg-primary-4 hover:bg-primary-3 disabled:bg-primary-2"
        onClick={handleSubmitTask}
      >
        {isTaskUpdate ? 'Update' : 'Create'}
      </Button>
    </div>
  );
};

TaskDialog.EstimateButton = EstimateButton;
TaskDialog.AssigneeButton = AssigneeButton;
TaskDialog.LabelButton = LabelButton;
TaskDialog.CalendarButton = CalendarButton;
TaskDialog.Footer = Footer;

export default TaskDialog;
