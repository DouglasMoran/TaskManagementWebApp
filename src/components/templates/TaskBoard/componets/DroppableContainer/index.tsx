import { PropsWithChildren } from 'react';

import { useDroppable } from '@dnd-kit/core';

type DroppableContainerProps = PropsWithChildren<{
  title: string;
  id: string;
}>;

export const DroppableContainer = ({
  id,
  title,
  children,
}: DroppableContainerProps) => {
  const { setNodeRef } = useDroppable({ id });

  return (
    <div
      ref={setNodeRef}
      className="flex h-full w-4/12 flex-shrink-0 flex-col gap-4 md:min-w-80 "
    >
      <div>
        <p className="font-sf text-xl font-semibold text-neutral-1">{title}</p>
      </div>
      <div className="flex-1 space-y-4 overflow-y-auto pb-40">{children}</div>
    </div>
  );
};
