import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

import { PropsWithChildren } from 'react';

type SortableItemProps = PropsWithChildren<{
  id: string | number;
  index: number | string;
}>;
export const SortableItem = ({ id, children }: SortableItemProps) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {children}
    </div>
  );
};
