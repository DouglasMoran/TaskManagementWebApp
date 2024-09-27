import { useState } from 'react';

import { Checkbox } from '@headlessui/react';

import { BsCheck } from 'react-icons/bs';

import { ITaskLabel } from '@interfaces/app';

import { LABEL_LIST } from '@mocks/task';

const LabelList = () => {
  const [labelsSelected, setLabelsSelected] = useState<string[]>([]);

  const handleSelectLabel = (labelId: string) => {
    const labelSelectedId = labelsSelected.find((itemId) => itemId === labelId);

    if (labelSelectedId) {
      // Remove prev label selected
      setLabelsSelected((prevLabels) =>
        prevLabels.filter((id) => id !== labelId),
      );
      return;
    }

    // Add label selected
    setLabelsSelected((prevLabels) => prevLabels.concat(labelId));
  };

  return (
    <div className="mt-2 flex flex-col gap-2">
      {LABEL_LIST.map(({ id, value, label }: ITaskLabel) => {
        const prevLabelSelectedId = labelsSelected.find(
          (itemId) => itemId === id,
        );

        const isLabelChecked = prevLabelSelectedId === id;
        return (
          <div
            key={id}
            className="flex w-full flex-row gap-4 text-neutral-1 hover:bg-neutral-6"
          >
            <Checkbox
              checked={isLabelChecked}
              onChange={() => handleSelectLabel(id)}
              value={value}
              className="group size-6 rounded-sm bg-white/10 p-1 ring-1 ring-inset ring-white/15 hover:border hover:border-neutral-1 data-[checked]:bg-white"
            >
              {isLabelChecked && <BsCheck className="text-neutral-4" />}
            </Checkbox>
            <p>{label}</p>
          </div>
        );
      })}
    </div>
  );
};

export default LabelList;
