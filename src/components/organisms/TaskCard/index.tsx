import React from 'react';

import { BsThreeDots } from 'react-icons/bs';
import { CgAlarm } from 'react-icons/cg';

import TaskActionButtons from '@components/molecules/TaskActionButtons';
import { Button } from '@components/ui/button';
import Badge from '@components/atoms/Badge';
import Avatar from '@components/atoms/Avatar';

import { ITask, ITaskLabel } from '@interfaces/app';

import { formatDate } from '@utils/date-format';

type TaskCardProps = {
  children: React.ReactNode;
};

const TaskCard = ({ children }: TaskCardProps) => {
  return (
    <div className="w-full overflow-hidden rounded-lg bg-neutral-4 py-4 pe-3 ps-4">
      {children}
    </div>
  );
};

TaskCard.Header = ({ title }: Pick<ITask, 'title'>) => (
  <div className="flex w-full flex-row items-center justify-between">
    <p className="text-neutral-1">{title}</p>
    <Button variant="ghost" className="p-2 hover:bg-neutral-6">
      <BsThreeDots className="h-8 w-8 text-neutral-2" />
    </Button>
  </div>
);

TaskCard.Content = ({
  points,
  labels,
  date,
}: Pick<ITask, 'points' | 'date' | 'labels'>) => (
  <div className="mt-4 flex flex-1 flex-col">
    <div className="flex flex-row items-center justify-between">
      <p className="font-sf text-base font-semibold text-neutral-1">
        {points.label}
      </p>
      <Badge
        title={formatDate(date)}
        icon={<CgAlarm className="h-6 w-6 text-neutral-1" />}
        containerClass="text-neutral-1"
      />
    </div>
    <div className="my-4 flex flex-1 flex-row gap-2">
      {labels?.map(({ label, id }: ITaskLabel) => {
        return (
          <Badge
            key={id}
            title={label}
            containerClass="!bg-secondary-5 text-secondary-4"
          />
        );
      })}
    </div>
  </div>
);

TaskCard.Footer = ({ member: { profileUrl } }: Pick<ITask, 'member'>) => (
  <div className="flex flex-1 flex-row items-center justify-between">
    <Avatar url={profileUrl} classContainer="!h-8 !w-8" />
    <TaskActionButtons />
  </div>
);

export default TaskCard;
