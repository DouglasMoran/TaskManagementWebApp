import Button from '@components/atoms/Button';

import { LiaPaperclipSolid } from 'react-icons/lia';
import { PiChatCircle } from 'react-icons/pi';
import { PiGitBranch } from 'react-icons/pi';

const TaskActionButtons = () => {
  return (
    <div className="flex flex-row">
      <Button
        config={{ variant: 'ghost' }}
        className="rounded-md bg-transparent p-2 hover:bg-neutral-6"
      >
        <LiaPaperclipSolid className="h-5 w-5 text-neutral-1" />
      </Button>

      <Button
        config={{ variant: 'ghost' }}
        className="gap-1 rounded-md bg-transparent p-2  hover:bg-neutral-6"
      >
        <p className="font-sf text-base font-normal text-neutral-1">5</p>
        <PiGitBranch className="h-5 w-5 text-neutral-1" />
      </Button>

      <Button
        config={{ variant: 'ghost' }}
        className="gap-1 rounded-md bg-transparent p-2  hover:bg-neutral-6"
      >
        <p className="font-sf text-base font-normal text-neutral-1">3</p>
        <PiChatCircle className="h-5 w-5 text-neutral-1" />
      </Button>
    </div>
  );
};

export default TaskActionButtons;
