import TaskCard from '@components/organisms/TaskCard';

const TaskBoard = () => {
  return (
    <div className="flex flex-1 gap-6 pt-6">
      <TaskCard>
        <TaskCard.Header />
        <TaskCard.Content />
        <TaskCard.Footer />
      </TaskCard>

      <TaskCard>
        <TaskCard.Header />
        <TaskCard.Content />
        <TaskCard.Footer />
      </TaskCard>

      <TaskCard>
        <TaskCard.Header />
        <TaskCard.Content />
        <TaskCard.Footer />
      </TaskCard>
    </div>
  );
};

export default TaskBoard;
