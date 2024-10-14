import { useCallback } from 'react';

import { ColumnTaskStatusKeys, ITask, PopoverType } from '@interfaces/app';

import { TASK_STATUS } from '@mocks/task';

type StatusListProps = {
  onSelect: (task: Partial<ITask>) => void;
};

const StatusList = ({ onSelect }: StatusListProps) => {
  const handleSelectMember = useCallback(
    (status: ColumnTaskStatusKeys) => {
      if (status) {
        onSelect({ status });
      }
    },
    [onSelect],
  );

  return (
    <div className="mt-2 flex flex-col gap-2">
      {TASK_STATUS.map((item: PopoverType<ColumnTaskStatusKeys>) => {
        const { label, value } = item ?? {};
        return (
          <div
            key={value}
            onClick={() => handleSelectMember(value)}
            className="flex w-full flex-row gap-4 text-neutral-1 hover:bg-neutral-2"
          >
            <p>{label}</p>
          </div>
        );
      })}
    </div>
  );
};

export default StatusList;
