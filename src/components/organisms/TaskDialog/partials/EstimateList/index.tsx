import { useState } from 'react';

import { ITaskEstimate } from '@interfaces/app';

import { ESTIMATES_LIST } from '@mocks/task';

const EstimateList = () => {
  const [estimatePointsSelected, setEstimatePointsSelected] =
    useState<string>('');

  const handleSelectMember = (memberId: string) => {
    setEstimatePointsSelected((prevId: string) => {
      if (prevId === memberId) {
        return '';
      }

      return memberId;
    });
  };

  console.log('estimatePointsSelected ::: ', estimatePointsSelected);

  return (
    <div className="mt-2 flex flex-col gap-2">
      {ESTIMATES_LIST.map(({ id, label, icon }: ITaskEstimate) => {
        return (
          <div
            key={id}
            onClick={() => handleSelectMember(id)}
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
