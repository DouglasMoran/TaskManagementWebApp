import React from 'react';

import { Dialog, DialogPanel } from '@headlessui/react';

import { RiCalendarCheckLine } from 'react-icons/ri';
import { RiPriceTag3Fill } from 'react-icons/ri';
import { FaCarBattery } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa6';

import Calendar from '@components/atoms/Calendar';
import Popover from '@components/molecules/Popover';
import Button from '@components/atoms/Button';

import EstimateList from './partials/EstimateList';
import AssigneeList from './partials/AssigneeList';
import LabelList from './partials/LabelList';
import useTask from '@hooks/useTask';

type TaskDialogProps = {
  isOpen: boolean;
  onClose: () => void;
};

const TaskDialog = ({ isOpen, onClose }: TaskDialogProps) => {
  const { task, onStoreTask } = useTask();

  const hasDatePrevSelect = !!task?.date;

  const handleTaskTitle = (event: React.ChangeEvent<HTMLInputElement>) =>
    onStoreTask({ title: event.target.value });

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 flex w-screen items-center justify-center bg-neutral-6 p-4">
        <DialogPanel className="w-5/12 space-y-4 rounded-lg bg-neutral-3 p-6">
          <input
            placeholder="Task title"
            value={task?.title ?? ''}
            onChange={handleTaskTitle}
            className="flex w-full flex-1 bg-transparent px-4 py-3 text-2xl text-neutral-1 placeholder:text-neutral-2 focus:outline-none focus:ring-transparent"
          />
          <div className="flex flex-wrap items-center justify-around gap-y-4 py-4">
            <Popover
              buttonTitle="Estimate"
              contentTitle="Estimate"
              buttonIcon={<FaCarBattery className="h-6 w-6 text-neutral-1" />}
            >
              <EstimateList onSelect={onStoreTask} />
            </Popover>
            <Popover
              buttonTitle="Assignee"
              contentTitle="Assignee"
              buttonIcon={<FaUser className="h-6 w-6 text-neutral-1" />}
            >
              <AssigneeList onSelect={onStoreTask} />
            </Popover>
            <Popover
              buttonTitle="Label"
              contentTitle="Label"
              buttonIcon={
                <RiPriceTag3Fill className="h-6 w-6 text-neutral-1" />
              }
            >
              <LabelList onSelect={onStoreTask} />
            </Popover>
            <Popover
              buttonTitle="Due date"
              buttonIcon={
                <RiCalendarCheckLine className="h-6 w-6 text-neutral-1" />
              }
              classContent="!max-h-96 !p-0"
            >
              <Calendar
                date={hasDatePrevSelect ? task?.date : new Date()}
                onSelect={(date) => onStoreTask({ date })}
              />
            </Popover>
          </div>
          {/* Actions */}
          <div className="flex flex-1 items-center justify-end gap-4">
            <Button
              variant="ghost"
              className="text-neutral-1 hover:bg-neutral-6 hover:text-primary-1"
            >
              Cancel
            </Button>
            <Button
              disabled
              className="bg-primary-4 hover:bg-primary-3 disabled:bg-primary-2"
            >
              Create
            </Button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default TaskDialog;
