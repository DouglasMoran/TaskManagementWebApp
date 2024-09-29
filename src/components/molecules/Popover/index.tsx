import {
  Popover as ShadcnPopover,
  PopoverContent,
  PopoverTrigger,
} from '@components/ui/popover';

import Badge from '@components/atoms/Badge';
import { PropsWithChildren } from 'react';

type PopoverProps = PropsWithChildren<{
  contentTitle?: string;
  buttonTitle: string;
  buttonIcon?: JSX.Element;
  classContent?: string;
  classBagde?: string;
}>;

const Popover = ({
  buttonIcon,
  buttonTitle,
  contentTitle,
  children,
  classContent,
  classBagde,
}: PopoverProps) => {
  return (
    <ShadcnPopover>
      <PopoverTrigger>
        <Badge
          title={buttonTitle}
          icon={buttonIcon}
          containerClass={'text-neutral-1 hover:bg-neutral-2 !p-[18px] '.concat(
            classBagde ?? '',
          )}
        />
      </PopoverTrigger>
      <PopoverContent
        className={'flex max-h-72 w-full flex-1 flex-col overflow-hidden border border-neutral-2 bg-neutral-3 '.concat(
          classContent ?? '',
        )}
      >
        <p className="font-sf text-xl font-semibold text-neutral-2">
          {!!contentTitle && contentTitle}
        </p>
        <div className="flex max-h-full flex-col justify-center overflow-y-auto">
          {children}
        </div>
      </PopoverContent>
    </ShadcnPopover>
  );
};

export default Popover;
