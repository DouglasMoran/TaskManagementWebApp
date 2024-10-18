import React from 'react';

import { BsThreeDots } from 'react-icons/bs';
import { CgAlarm } from 'react-icons/cg';
import { RiPencilLine } from 'react-icons/ri';
import { PiTrashLight } from 'react-icons/pi';

import TaskActionButtons from '@components/molecules/TaskActionButtons';
import Popover from '@components/molecules/Popover';
import Avatar from '@components/atoms/Avatar';
import Badge from '@components/atoms/Badge';

import {
  ITask,
  PopoverType,
  TaskPointEstimate,
  TaskTag,
} from '@interfaces/app';

import { formatDate } from '@utils/date-format';

import { TASK_POINT_ESTIMATES, TASK_TAGS } from '@mocks/task';

import useTask from '@hooks/useTask';

type TaskCardProps = {
  children: React.ReactNode;
};

type TaskHeaderProps = {
  title: ITask['name'];
  taskId: string;
};

type ContentProps = {
  dueDate: ITask['dueDate'];
  tags: ITask['tags'];
  pointEstimate: PopoverType<TaskPointEstimate> | TaskPointEstimate | null;
};

const TaskCard = ({ children }: TaskCardProps) => {
  return (
    <div className="flex h-52 max-h-60 w-full flex-col justify-between overflow-hidden rounded-lg bg-neutral-4 py-4 pe-3 ps-4 sm:h-[208px] sm:w-[340px] md:min-w-72 lg:h-72 2xl:h-72 2xl:max-h-80 2xl:w-[400px] 2xl:max-w-3xl">
      {children}
    </div>
  );
};

const Header = ({ title, taskId }: TaskHeaderProps) => {
  const { onUpdate, onDelete } = useTask();

  return (
    <div className="flex h-1/3 w-full flex-row items-start justify-between lg:mb-4">
      <p className="line-clamp-2 h-14 text-neutral-1 md:max-w-48 lg:me-6 lg:line-clamp-1 lg:text-base 2xl:text-2xl 2xl:leading-7">
        {title}
      </p>
      <Popover
        contentTitle=""
        buttonTitle=""
        buttonIcon={
          <BsThreeDots className="h-8 w-8 text-neutral-2 lg:h-6 lg:w-6" />
        }
        classContent="!p-2 !hover:bg-neutral-6"
        classBagde=" !lg:ps-2 !p-[2px] lg:bg-transparent lg:hover:bg-neutral-6"
      >
        <div className="flex flex-col space-y-2">
          <Badge
            title="Edit"
            icon={<RiPencilLine className="h-5 w-5 text-neutral-1" />}
            containerClass="text-base text-neutral-1 font-normal font-sf justify-start gap-4 bg-neutral-6 hover:bg-neutral-2"
            onClick={() => onUpdate(taskId)}
          />
          <Badge
            title="Delete"
            icon={<PiTrashLight className="h-5 w-5 text-neutral-1" />}
            containerClass="text-base text-neutral-1 font-normal font-sf justify-between bg-neutral-6 hover:bg-neutral-2"
            onClick={() => onDelete(taskId)}
          />
        </div>
      </Popover>
    </div>
  );
};

TaskCard.Content = ({
  pointEstimate = 'ZERO',
  tags,
  dueDate,
}: ContentProps) => {
  const pointSelected = TASK_POINT_ESTIMATES.find(
    (p) => p.value === pointEstimate,
  );

  return (
    <div className=" flex-grow">
      <div className="flex flex-row items-center justify-between 2xl:mt-8">
        <p className="font-sf text-base font-semibold text-neutral-1 lg:text-sm 2xl:text-lg">
          {pointSelected?.label}
        </p>
        <Badge
          title={formatDate(dueDate)}
          icon={
            <CgAlarm className="h-6 w-6 text-neutral-1 lg:h-4 lg:w-4 2xl:h-6 2xl:w-6" />
          }
          containerClass="text-neutral-1 !p-2"
          textClass="lg:text-xs 2xl:text-lg font-sf flex"
        />
      </div>
      <div className="my-4 flex flex-row gap-2 2xl:mt-8">
        {tags?.map((tag: TaskTag) => {
          return (
            <Badge
              key={tag}
              title={tag}
              textClass={'lg:text-[10px] 2xl:text-lg font-sf '.concat(
                tag === TASK_TAGS[0] ? 'text-secondary-4' : 'text-tertiary-4',
              )}
              containerClass={
                tag === TASK_TAGS[0]
                  ? '!bg-secondary-5 !text-secondary-4 lg:p-2 2xl:p-4'
                  : '!bg-tertiary-5  lg:p-2 2xl:p-4'
              }
            />
          );
        })}
      </div>
    </div>
  );
};

TaskCard.Footer = ({ assignee }: Pick<ITask, 'assignee'>) => (
  <div className="flex h-1/3 w-full flex-row items-end justify-between">
    <Avatar
      url={assignee?.avatar ?? ''}
      classContainer="!h-8 !w-8 lg:h-6 lg:w-6 2xl:h-12 2xl:w-12 overflow-hidden"
    />
    <TaskActionButtons />
  </div>
);

TaskCard.Header = Header;

export default TaskCard;
