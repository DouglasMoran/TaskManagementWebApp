import { Tabs, TabsContent, TabsList, TabsTrigger } from '@components/ui/tabs';

import { TaskBoard } from '@components/templates';

import { TASK_VIEW } from '@constants/app';

const TaskTabs = () => {
  return (
    <Tabs defaultValue={TASK_VIEW.BOARD} className="w-screen p-0">
      <TabsList className="flex h-11 flex-1 justify-around rounded-none bg-neutral-4">
        <TabsTrigger
          value={TASK_VIEW.BOARD}
          className="flex flex-1 rounded-none text-sm font-normal data-[state=active]:border-b-2 data-[state=active]:border-primary-4 data-[state=active]:bg-transparent data-[state=active]:text-primary-4"
        >
          Dashboard
        </TabsTrigger>
        <TabsTrigger
          value={TASK_VIEW.LIST}
          className="flex flex-1 rounded-none text-sm font-normal data-[state=active]:border-b-2 data-[state=active]:border-primary-4 data-[state=active]:bg-transparent data-[state=active]:text-primary-4"
        >
          Task
        </TabsTrigger>
      </TabsList>
      <TabsContent value={TASK_VIEW.BOARD} className="ps-6">
        <TaskBoard classDroppableContainer="!w-10/12" />
      </TabsContent>
      <TabsContent value={TASK_VIEW.LIST}>
        <div className="flex h-screen flex-1 flex-col items-center justify-center bg-neutral-5">
          Task list view here
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default TaskTabs;
