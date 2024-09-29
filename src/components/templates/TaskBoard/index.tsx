import { useState } from 'react';

import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
  // sortableKeyboardCoordinates,
} from '@dnd-kit/sortable';

// import TaskCard from '@components/organisms/TaskCard';

import { DroppableContainer, SortableItem } from './dnd';
// import useTask from '@hooks/useTask';

const initialColumns = {
  'column-1': ['Task 1', 'Task 2', 'Task 3'],
  'column-2': ['Task 4', 'Task 5'],
};

const TaskBoard = () => {
  const [columns, setColumns] = useState(initialColumns);

  // Sensors
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
  );
  // const { statusSections, onDragEnd } = useTask();
  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over) return;

    const sourceColumnId = active.data.current.sortable.containerId;
    const targetColumnId = over.data.current.sortable.containerId;

    if (sourceColumnId === targetColumnId) {
      // Reordering within the same column
      const updatedColumn = arrayMove(
        columns[sourceColumnId],
        active.data.current.sortable.index,
        over.data.current.sortable.index,
      );
      setColumns({
        ...columns,
        [sourceColumnId]: updatedColumn,
      });
    } else {
      // Moving between columns
      const sourceItems = [...columns[sourceColumnId]];
      const targetItems = [...columns[targetColumnId]];

      // Remove item from source and add to target
      const [movedItem] = sourceItems.splice(
        active.data.current.sortable.index,
        1,
      );
      targetItems.splice(over.data.current.sortable.index, 0, movedItem);

      setColumns({
        ...columns,
        [sourceColumnId]: sourceItems,
        [targetColumnId]: targetItems,
      });
    }
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <div className="flex flex-1 h-full gap-4">
        {Object.keys(columns).map((columnId) => (
          <DroppableContainer key={columnId} id={columnId}>
            <SortableContext
              id={columnId}
              items={columns[columnId]}
              strategy={verticalListSortingStrategy}
            >
              {columns[columnId].map((task, index) => (
                <SortableItem key={task} id={task} index={index} />
              ))}
            </SortableContext>
          </DroppableContainer>
        ))}
      </div>
    </DndContext>
  );
};

export default TaskBoard;
