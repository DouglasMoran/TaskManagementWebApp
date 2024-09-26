import { useSelector } from 'react-redux';

import IconButton from '@components/atoms/IconButton';

import HamburgerMenuIcon from '@utils/icons/HamburgerMenuIcon';

import { setTaskViewType } from '@store/slices/task/taskSlice';
import { MainState, useAppDispatch } from '@store/index';

import GridIcon from '@utils/icons/GridIcon';

import { TASK_VIEW } from '@constants/app';

const ToggleButton = () => {
  const dispatch = useAppDispatch();

  const { viewType } = useSelector((state: MainState) => state.task);

  const isBoardView = viewType === TASK_VIEW.BOARD;

  return (
    <div className="flex flex-row">
      <IconButton
        type="outline"
        contentStyles={`${!isBoardView && 'border'} border-primary-4 hover:border-neutral-1`}
        icon={
          <HamburgerMenuIcon
            svgClassName={
              !isBoardView
                ? 'text-primary-4 hover:text-neutral-1'
                : 'text-neutral-1'
            }
          />
        }
        onClick={() => dispatch(setTaskViewType(TASK_VIEW.LIST))}
      />
      <IconButton
        type="outline"
        contentStyles={`${isBoardView && 'border'} border-primary-4 hover:border-neutral-1`}
        icon={
          <GridIcon
            svgClassName={
              isBoardView
                ? 'text-primary-4 hover:text-neutral-1'
                : 'text-neutral-1'
            }
          />
        }
        onClick={() => dispatch(setTaskViewType(TASK_VIEW.BOARD))}
      />
    </div>
  );
};

export default ToggleButton;
