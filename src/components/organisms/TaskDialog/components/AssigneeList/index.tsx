import Avatar from '@components/atoms/Avatar';
import { ITask, ITaskAssignee } from '@interfaces/app';

import { ASSIGNEE_LIST } from '@mocks/task';
import { useCallback } from 'react';

type EstimateListProps = {
  data?: ITaskAssignee[];
  onSelect: (task: Partial<ITask>) => void;
};

const AssigneeList = ({
  data = ASSIGNEE_LIST,
  onSelect,
}: EstimateListProps) => {
  const handleSelectMember = useCallback(
    (member: ITaskAssignee) => {
      if (member) {
        onSelect({ member });
      }
    },
    [onSelect],
  );

  return (
    <div className="mt-2 flex flex-col gap-2 pt-72">
      {data.map((item: ITaskAssignee) => {
        const { id, name, profileUrl } = item ?? {};
        return (
          <div
            key={id}
            onClick={() => handleSelectMember(item)}
            className="flex w-full flex-row gap-4 text-neutral-1 hover:bg-neutral-2"
          >
            <Avatar url={profileUrl} />
            <p>{name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default AssigneeList;
