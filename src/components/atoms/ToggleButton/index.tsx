import { useSelector } from 'react-redux';

import { AiOutlineMenu } from 'react-icons/ai';
import { MdGridView } from 'react-icons/md';

import IconButton from '@components/atoms/IconButton';

import { setTaskViewType } from '@store/slices/task/taskSlice';
import { MainState, useAppDispatch } from '@store/index';

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
          <AiOutlineMenu
            className={
              !isBoardView
                ? 'h-6 w-6 text-primary-4 hover:text-neutral-1'
                : 'h-6 w-6 text-neutral-1'
            }
          />
        }
        onClick={() => dispatch(setTaskViewType(TASK_VIEW.LIST))}
      />
      <IconButton
        type="outline"
        contentStyles={`${isBoardView && 'border'} border-primary-4 hover:border-neutral-1`}
        icon={
          <MdGridView
            className={
              isBoardView
                ? 'h-6 w-6 text-primary-4 hover:text-neutral-1'
                : 'h-6 w-6 text-neutral-1'
            }
          />
        }
        onClick={() => dispatch(setTaskViewType(TASK_VIEW.BOARD))}
      />
    </div>
  );
};

export default ToggleButton;
