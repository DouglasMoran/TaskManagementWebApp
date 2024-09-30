import { LiaPlusSolid } from 'react-icons/lia';

import { AndroidNavbar, FabButton, TaskTabs } from './components';

const AndroidLayout = () => {
  return (
    <div className="h-screen w-screen overflow-hidden">
      <div className="flex h-full w-full flex-1 flex-col bg-neutral-5">
        <AndroidNavbar />
        <TaskTabs />
        <FabButton onClick={() => null}>
          <LiaPlusSolid className="h-8 w-8 text-neutral-1" />
        </FabButton>
      </div>
    </div>
  );
};

export default AndroidLayout;
