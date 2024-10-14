import { useCallback } from 'react';

import Avatar from '@components/atoms/Avatar';

import { ITask, IUser } from '@interfaces/app';

import useUsers from '@hooks/useUsers';

type EstimateListProps = {
  onSelect: (task: Partial<ITask>) => void;
};

const AssigneeList = ({ onSelect }: EstimateListProps) => {
  const { users } = useUsers();

  const handleSelectMember = useCallback(
    (user: IUser) => {
      if (user) {
        onSelect({ assignee: user });
      }
    },
    [onSelect],
  );

  return (
    <div className="mt-2 flex flex-col gap-2 pt-4">
      {users?.map((item: IUser) => {
        const { id, fullName, avatar } = item ?? {};
        return (
          <div
            key={id}
            onClick={() => handleSelectMember(item)}
            className="flex w-full flex-row items-center justify-start gap-4 text-neutral-1 hover:bg-neutral-2"
          >
            <Avatar url={avatar ?? ''} />
            <p>{fullName}</p>
          </div>
        );
      })}
    </div>
  );
};

export default AssigneeList;
