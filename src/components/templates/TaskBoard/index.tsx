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

type TaskBoardProps = {
  classDroppableContainer?: string;
};

const TaskBoard = ({ classDroppableContainer }: TaskBoardProps) => {
  const { sensors, columns, handleDragEnd } = useDnd();

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <div className="flex h-screen space-x-4 overflow-x-auto">
        {columns?.map((section) => (
          <DroppableContainer
            key={section.id}
            id={section.id}
            title={section.title}
            classContainer={classDroppableContainer}
          >
            <SortableContext
              id={section.id}
              items={section.tasks ? section.tasks.map((task) => task.id) : []}
              strategy={verticalListSortingStrategy}
            >
              {section.tasks?.map(
                ({ id, name, assignee, tags, date, pointEstimate }, index) => (
                  <SortableItem key={id} id={id} index={index}>
                    <TaskCard>
                      <TaskCard.Header title={name} taskId={id} />
                      <TaskCard.Content
                        tags={tags}
                        dueDate={date}
                        pointEstimate={pointEstimate}
                      />
                      <TaskCard.Footer assignee={assignee} />
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
