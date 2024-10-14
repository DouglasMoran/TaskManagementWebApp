import {
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from '@dnd-kit/core';
import {
  arrayMove,
  // sortableKeyboardCoordinates,
} from '@dnd-kit/sortable';
import { useSelector } from 'react-redux';

import {
  setPreventRefreshTasks,
  setTaskSections,
} from '@store/slices/task/taskSlice';
import { MainState, useAppDispatch } from '@store/index';

const useDnd = () => {
  const dispatch = useAppDispatch();

  const { columnTaskStatus: columns } = useSelector(
    (state: MainState) => state.task,
  );

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
  );

  const onPreventRefreshTasks = () => dispatch(setPreventRefreshTasks());

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) return;

    const sourceColumnId = active?.data?.current?.sortable.containerId;
    const targetColumnId = over?.data?.current?.sortable.containerId;

    const sourceColumn = columns?.find((col) => col.id === sourceColumnId);
    const targetColumn = columns?.find((col) => col.id === targetColumnId);

    if (!sourceColumn || !targetColumn) {
      return;
    }

    if (sourceColumnId === targetColumnId) {
      // Reordering within the same column
      const updatedColumns = columns?.map((column) => {
        if (column.id === sourceColumnId) {
          return {
            ...column,
            tasks: arrayMove(
              column.tasks ?? [],
              active?.data?.current?.sortable.index,
              over.data.current?.sortable.index,
            ),
          };
        }
        return column;
      });

      dispatch(setTaskSections(updatedColumns));
    } else {
      // Moving between columns
      const sourceColumn = columns?.find((col) => col.id === sourceColumnId);
      const targetColumn = columns?.find((col) => col.id === targetColumnId);

      const srcColumnsTasks = Array.isArray(sourceColumn?.tasks)
        ? sourceColumn.tasks
        : [];
      const targetColumnsTasks = Array.isArray(targetColumn?.tasks)
        ? targetColumn.tasks
        : [];

      const sourceItems = [...srcColumnsTasks];
      const targetItems = [...targetColumnsTasks];

      const [movedTask] = sourceItems.splice(
        active.data.current?.sortable.index,
        1,
      );
      targetItems.splice(over.data.current?.sortable.index, 0, movedTask);

      const updatedColumns = columns?.map((column) => {
        if (column.id === sourceColumnId) {
          return { ...column, tasks: sourceItems };
        }
        if (column.id === targetColumnId) {
          return {
            ...column,

            tasks: targetItems.map((task) => {
              return {
                ...task,
                // Update the task's status
                status: column.id,
              };
            }),
          };
        }
        return column;
      });

      dispatch(setTaskSections(updatedColumns));
    }
  };

  return {
    sensors,
    columns,
    onPreventRefreshTasks,
    handleDragEnd,
  };
};

export default useDnd;
