import React, { useState } from 'react';

import { Dialog, DialogPanel } from '@headlessui/react';

import { RiCalendarCheckLine } from 'react-icons/ri';
import { RiPriceTag3Fill } from 'react-icons/ri';
import { FaCarBattery } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa6';

import { CalendarDemo } from '@components/atoms/Calendar';
import Popover from '@components/molecules/Popover';
import Button from '@components/atoms/Button';

import EstimateList from './partials/EstimateList';
import AssigneeList from './partials/AssigneeList';
import LabelList from './partials/LabelList';

type TaskDialogProps = {
  isOpen: boolean;
  onClose: () => void;
};

const TaskDialog = ({ isOpen, onClose }: TaskDialogProps) => {
  const [taskTitle, setTaskTitle] = useState<string>('');

  const handleTaskTitle = (event: React.ChangeEvent<HTMLInputElement>) =>
    setTaskTitle(event.target.value);

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 flex w-screen items-center justify-center bg-neutral-6 p-4">
        <DialogPanel className="w-5/12 space-y-4 rounded-lg bg-neutral-3 p-6">
          <input
            placeholder="Task title"
            value={taskTitle}
            onChange={handleTaskTitle}
            className="flex w-full flex-1 bg-transparent px-4 py-3 text-2xl text-neutral-1 placeholder:text-neutral-2 focus:outline-none focus:ring-transparent"
          />
          <div className="flex flex-wrap items-center justify-around gap-y-4 py-4">
            <Popover
              buttonTitle="Estimate"
              contentTitle="Estimate"
              buttonIcon={<FaCarBattery className="h-6 w-6 text-neutral-1" />}
            >
              <EstimateList />
            </Popover>
            <Popover
              buttonTitle="Assignee"
              contentTitle="Assignee"
              buttonIcon={<FaUser className="h-6 w-6 text-neutral-1" />}
            >
              <AssigneeList />
            </Popover>
            <Popover
              buttonTitle="Label"
              contentTitle="Label"
              buttonIcon={
                <RiPriceTag3Fill className="h-6 w-6 text-neutral-1" />
              }
            >
              <LabelList />
            </Popover>
            <Popover
              buttonTitle="Due date"
              buttonIcon={
                <RiCalendarCheckLine className="h-6 w-6 text-neutral-1" />
              }
              classContent="!max-h-96 !p-0"
            >
              <CalendarDemo />
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
