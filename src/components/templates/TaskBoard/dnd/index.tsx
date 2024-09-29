import { PropsWithChildren } from 'react';

import { useSortable } from '@dnd-kit/sortable';
import { useDroppable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';

import TaskCard from '@components/organisms/TaskCard';

type DroppableContainerProps = PropsWithChildren<{
  id: string;
}>;

export const DroppableContainer = ({
  id,
  children,
}: DroppableContainerProps) => {
  const { setNodeRef } = useDroppable({ id });

  return (
    <div ref={setNodeRef} className="flex h-full w-4/12 flex-col gap-4">
      <div>
        <p className="font-sf text-xl font-semibold text-neutral-1">
          'column.title'
        </p>
      </div>
      <div className="flex-1 space-y-4 overflow-y-auto pb-40">{children}</div>
    </div>
  );
};

export const SortableItem = ({
  id,
}: {
  id: string;
  index: number | string;
}) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <TaskCard>
        <TaskCard.Header />
        <TaskCard.Content />
        <TaskCard.Footer />
      </TaskCard>
    </div>
  );
};
