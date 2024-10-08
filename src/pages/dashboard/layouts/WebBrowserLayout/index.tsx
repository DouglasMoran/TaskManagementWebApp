import { useSelector } from 'react-redux';

import ActionButtons from '@components/molecules/ActionButtons';
import TaskList from '@components/templates/TaskList/iindex';
import MainContainer from '@components/atoms/MainContainer';
import TaskBoard from '@components/templates/TaskBoard';
import Sidebar from '@components/templates/Sidebar';
import Navbar from '@components/templates/Navbar';

import { MainState } from '@store/index';

import { TASK_VIEW } from '@constants/app';

const WebBrowserLayout = () => {
  const { viewType } = useSelector((state: MainState) => state.task);

  return (
    <MainContainer>
      <div className="flex h-full w-full flex-row">
        <Sidebar />
        <div className="mb-4 flex w-full flex-1 flex-col gap-6 ps-8 md:w-8/12">
          <Navbar />{' '}
          {/* Action buttons: Handles of make the key action like create a new task or toggle the board view like grid columns or simple list */}
          <ActionButtons />
          {/* Board */}
          {viewType === TASK_VIEW.BOARD && <TaskBoard />}
          {viewType === TASK_VIEW.LIST && <TaskList />}
        </div>
      </div>
    </MainContainer>
  );
};

export default WebBrowserLayout;
