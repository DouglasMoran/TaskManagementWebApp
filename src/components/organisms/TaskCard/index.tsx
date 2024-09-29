import React from 'react';

import { BsThreeDots } from 'react-icons/bs';
import { CgAlarm } from 'react-icons/cg';

import TaskActionButtons from '@components/molecules/TaskActionButtons';
import { Button } from '@components/ui/button';
import Badge from '@components/atoms/Badge';
import Avatar from '@components/atoms/Avatar';

type TaskCardProps = {
  children: React.ReactNode;
  draggableProps?: React.HTMLAttributes<HTMLDivElement>; // Props for draggable
  dragHandleProps?: React.HTMLAttributes<HTMLDivElement>; // Props for drag handle
};

// Use forwardRef to pass ref to the root div element
const TaskCard = ({ children }: TaskCardProps) => {
  return (
    <div className="w-full overflow-hidden rounded-lg bg-neutral-4 py-4 pe-3 ps-4">
      {children}
    </div>
  );
};

// Defining the static sub-components (Header, Content, Footer) as properties of TaskCard
TaskCard.Header = () => (
  <div className="flex w-full flex-row items-center justify-between">
    <p className="text-neutral-1">Slack</p>
    <Button variant="ghost" className="p-2 hover:bg-neutral-6">
      <BsThreeDots className="h-8 w-8 text-neutral-2" />
    </Button>
  </div>
);

TaskCard.Content = () => (
  <div className="mt-4 flex flex-1 flex-col">
    <div className="flex flex-row items-center justify-between">
      <p className="font-sf text-base font-semibold text-neutral-1">4 Points</p>
      <Badge
        title="YESTERDAY"
        icon={<CgAlarm className="h-6 w-6 text-neutral-1" />}
        containerClass="text-neutral-1"
      />
    </div>
    <div className="my-4 flex flex-1 flex-row gap-2">
      <Badge
        title="IOS APP"
        containerClass="!bg-secondary-5 text-secondary-4"
      />
      <Badge title="ANDROID" containerClass="!bg-tertiary-5 text-tertiary-4" />
    </div>
  </div>
);

TaskCard.Footer = () => (
  <div className="flex flex-1 flex-row items-center justify-between">
    <Avatar url="" classContainer="!h-8 !w-8" />
    <TaskActionButtons />
  </div>
);

export default TaskCard;
