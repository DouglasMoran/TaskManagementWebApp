import { useCallback } from 'react';

import { FaCarBattery } from 'react-icons/fa';

import { ITask, PopoverType, TaskPointEstimate } from '@interfaces/app';

import { TASK_POINT_ESTIMATES } from '@mocks/task';

type EstimateListProps = {
  data?: PopoverType<TaskPointEstimate>[];
  onSelect: (task: Partial<ITask>) => void;
};

const EstimateList = ({
  data = TASK_POINT_ESTIMATES,
  onSelect,
}: EstimateListProps) => {
  const handleSelectMember = useCallback(
    (pointEstimate: PopoverType<TaskPointEstimate>) => {
      if (pointEstimate) {
        onSelect({ pointEstimate });
      }
    },
    [onSelect],
  );

  return (
    <div className="mt-2 flex flex-col gap-2">
      {data.map((item: PopoverType<TaskPointEstimate>) => {
        const { label, value } = item ?? {};
        return (
          <div
            key={value}
            onClick={() => handleSelectMember(item)}
            className="flex w-full flex-row gap-4 text-neutral-1 hover:bg-neutral-2"
          >
            <FaCarBattery className="h-6 w-6 text-neutral-1" />
            <p>{label}</p>
          </div>
        );
      })}
    </div>
  );
};

export default EstimateList;
