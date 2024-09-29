import { DndContext, closestCenter } from '@dnd-kit/core';
import {
  SortableContext,
  verticalListSortingStrategy,
  // sortableKeyboardCoordinates,
} from '@dnd-kit/sortable';

import TaskCard from '@components/organisms/TaskCard';

import { DroppableContainer } from './componets/DroppableContainer';
import { SortableItem } from './componets/SortableItem';

import useDnd from '@hooks/useDnd';

const TaskBoard = () => {
  const { sensors, columns, handleDragEnd } = useDnd();

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <div className="flex h-full space-x-4 overflow-x-auto">
        {columns?.map((section) => (
          <DroppableContainer
            key={section.id}
            id={section.id}
            title={section.title}
          >
            <SortableContext
              id={section.id}
              items={section.tasks ? section.tasks.map((task) => task.id) : []}
              strategy={verticalListSortingStrategy}
            >
              {section.tasks?.map(
                ({ id, title, member, ...restTaskData }, index) => (
                  <SortableItem key={id} id={id} index={index}>
                    <TaskCard>
                      <TaskCard.Header
                        title={title}
                        sectionId={section.id}
                        taskId={id}
                      />
                      <TaskCard.Content {...restTaskData} />
                      <TaskCard.Footer member={member} />
                    </TaskCard>
                  </SortableItem>
                ),
              )}
            </SortableContext>
          </DroppableContainer>
        ))}
      </div>
    </DndContext>
  );
};

export default TaskBoard;
