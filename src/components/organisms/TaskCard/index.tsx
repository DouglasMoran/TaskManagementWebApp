import React from 'react';

import { BsThreeDots } from 'react-icons/bs';
import { CgAlarm } from 'react-icons/cg';
import { RiPencilLine } from 'react-icons/ri';
import { PiTrashLight } from 'react-icons/pi';

import TaskActionButtons from '@components/molecules/TaskActionButtons';
import Popover from '@components/molecules/Popover';
import Avatar from '@components/atoms/Avatar';
import Badge from '@components/atoms/Badge';

import { ITask, ITaskLabel } from '@interfaces/app';

import { formatDate } from '@utils/date-format';

import { LABEL_LIST } from '@mocks/task';

import useTask from '@hooks/useTask';

type TaskCardProps = {
  children: React.ReactNode;
};

type TaskHeaderProps = {
  title: ITask['title'];
  sectionId: string;
  taskId: string;
};

const TaskCard = ({ children }: TaskCardProps) => {
  return (
    <div className="w-full overflow-hidden rounded-lg bg-neutral-4 py-4 pe-3 ps-4">
      {children}
    </div>
  );
};

const Header = ({ title, ...metadataActions }: TaskHeaderProps) => {
  const { onUpdate, onDelete } = useTask();

  return (
    <div className="flex w-full flex-row items-center justify-between">
      <p className="text-neutral-1">{title}</p>
      <Popover
        contentTitle=""
        buttonTitle=""
        buttonIcon={<BsThreeDots className="h-8 w-8 text-neutral-2" />}
        classContent="!p-2 !hover:bg-neutral-6"
      >
        <div className="flex flex-col ">
          <Badge
            title="Edit"
            icon={<RiPencilLine className="h-5 w-5 text-neutral-1" />}
            containerClass="text-base text-neutral-1 font-normal font-sf justify-start gap-4 bg-neutral-6 hover:bg-neutral-2"
            onClick={() => onUpdate({ ...metadataActions })}
          />
          <Badge
            title="Delete"
            icon={<PiTrashLight className="h-5 w-5 text-neutral-1" />}
            containerClass="text-base text-neutral-1 font-normal font-sf justify-between bg-neutral-6 hover:bg-neutral-2"
            onClick={() => onDelete({ ...metadataActions })}
          />
        </div>
      </Popover>
    </div>
  );
};

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
            containerClass={
              label === LABEL_LIST[0].label
                ? '!bg-secondary-5 !text-secondary-4'
                : '!bg-tertiary-5 text-tertiary-4'
            }
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

TaskCard.Header = Header;

export default TaskCard;
