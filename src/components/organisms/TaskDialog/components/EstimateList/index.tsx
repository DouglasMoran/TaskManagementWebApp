import { useCallback } from 'react';

import { ITask, ITaskEstimate } from '@interfaces/app';

import { ESTIMATES_LIST } from '@mocks/task';

type EstimateListProps = {
  data?: ITaskEstimate[];
  onSelect: (task: Partial<ITask>) => void;
};

const EstimateList = ({
  data = ESTIMATES_LIST,
  onSelect,
}: EstimateListProps) => {
  const handleSelectMember = useCallback(
    (member: Pick<ITaskEstimate, 'id' | 'value' | 'label'>) => {
      if (member) {
        onSelect({ points: member });
      }
    },
    [onSelect],
  );

  return (
    <div className="mt-2 flex flex-col gap-2">
      {data.map((item: ITaskEstimate) => {
        const { id, label, icon, value } = item ?? {};
        return (
          <div
            key={id}
            onClick={() => handleSelectMember({ id, label, value })}
            className="flex w-full flex-row gap-4 text-neutral-1 hover:bg-neutral-2"
          >
            {icon}
            <p>{label}</p>
          </div>
        );
      })}
    </div>
  );
};

export default EstimateList;
