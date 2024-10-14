import { useSelector } from 'react-redux';

import { Checkbox } from '@headlessui/react';

import { BsCheck } from 'react-icons/bs';

import { ITask, TaskTag } from '@interfaces/app';

import { MainState } from '@store/index';

import { TASK_TAGS } from '@mocks/task';

type LabelListtProps = {
  data?: TaskTag[];
  onSelect: (task: Partial<ITask>) => void;
};

const LabelList = ({ data = TASK_TAGS, onSelect }: LabelListtProps) => {
  const { task } = useSelector((state: MainState) => state.task);

  const prevLabelsSelectedId = Array.isArray(task?.tags)
    ? task?.tags.map((item) => item)
    : [];

  // Label Item is wrapped like array because the logic is controlle on the store
  const handleSelectLabel = (tag: TaskTag) => onSelect({ tags: [tag] });

  return (
    <div className="mt-2 flex flex-col gap-2">
      {data.map((tag: TaskTag) => {
        const isLabelChecked =
          prevLabelsSelectedId.length > 0 && prevLabelsSelectedId.includes(tag);

        return (
          <div
            key={tag}
            className="flex w-full flex-row gap-4 text-neutral-1 hover:bg-neutral-6"
          >
            <Checkbox
              checked={isLabelChecked}
              onChange={() => handleSelectLabel(tag)}
              value={tag}
              className="group size-6 rounded-sm bg-white/10 p-1 ring-1 ring-inset ring-white/15 hover:border hover:border-neutral-1 data-[checked]:bg-white"
            >
              {isLabelChecked && <BsCheck className="text-neutral-4" />}
            </Checkbox>
            <p>{tag}</p>
          </div>
        );
      })}
    </div>
  );
};

export default LabelList;
