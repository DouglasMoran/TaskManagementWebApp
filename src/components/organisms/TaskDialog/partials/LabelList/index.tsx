import { useSelector } from 'react-redux';

import { Checkbox } from '@headlessui/react';

import { BsCheck } from 'react-icons/bs';

import { ITask, ITaskLabel } from '@interfaces/app';

import { MainState } from '@store/index';

import { LABEL_LIST } from '@mocks/task';

type LabelListtProps = {
  data?: ITaskLabel[];
  onSelect: (task: Partial<ITask>) => void;
};

const LabelList = ({ data = LABEL_LIST, onSelect }: LabelListtProps) => {
  const { task } = useSelector((state: MainState) => state.task);

  const prevLabelsSelectedId = Array.isArray(task?.labels)
    ? task?.labels.map((item) => item.id)
    : [];

  // Label Item is wrapped like array because the logic is controlle on the store
  const handleSelectLabel = (labelItem: ITaskLabel) =>
    onSelect({ labels: [labelItem] });

  return (
    <div className="mt-2 flex flex-col gap-2">
      {data.map((item: ITaskLabel) => {
        const { id, value, label } = item ?? {};

        const isLabelChecked =
          prevLabelsSelectedId.length > 0 && prevLabelsSelectedId.includes(id);

        return (
          <div
            key={id}
            className="flex w-full flex-row gap-4 text-neutral-1 hover:bg-neutral-6"
          >
            <Checkbox
              checked={isLabelChecked}
              onChange={() => handleSelectLabel(item)}
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
