import Avatar from '@components/atoms/Avatar';
import { ITaskAssignee } from '@interfaces/app';

import { ASSIGNEE_LIST } from '@mocks/task';
import { useState } from 'react';

const AssigneeList = () => {
  const [memberSelected, setMemberSelected] = useState<string | number>('');

  const handleSelectMember = (memberId: string | number) => {
    setMemberSelected((prevId: string | number) => {
      if (prevId === memberId) {
        return '';
      }

      return memberId;
    });
  };

  console.log('memberSelected ::: ', memberSelected);
  return (
    <div className="mt-2 flex flex-col gap-2">
      {ASSIGNEE_LIST.map(({ id, name, profileUrl }: ITaskAssignee) => {
        return (
          <div
            key={id}
            onClick={() => handleSelectMember(id)}
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
