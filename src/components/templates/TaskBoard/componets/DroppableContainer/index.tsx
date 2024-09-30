import { PropsWithChildren } from 'react';

import { useDroppable } from '@dnd-kit/core';

type DroppableContainerProps = PropsWithChildren<{
  title: string;
  id: string;
  classContainer?: string;
}>;

export const DroppableContainer = ({
  id,
  title,
  children,
  classContainer,
}: DroppableContainerProps) => {
  const { setNodeRef } = useDroppable({ id });

  return (
    <div
      ref={setNodeRef}
      className={'flex h-full w-4/12 flex-shrink-0 flex-col gap-4 sm:min-w-96 md:min-w-80 '.concat(
        classContainer ?? '',
      )}
    >
      <div>
        <p className="font-sf text-xl font-semibold text-neutral-1">{title}</p>
      </div>
      <div className="flex-1 space-y-4 overflow-y-auto pb-40">{children}</div>
    </div>
  );
};
