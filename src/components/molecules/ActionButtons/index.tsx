import ToggleButton from '@components/atoms/ToggleButton';
import IconButton from '@components/atoms/IconButton';

import PlusIcon from '@utils/icons/PlusIcon';

const ActionButtons = () => {
  return (
    <div className="flex w-full flex-row justify-between">
      {/* Toggle buttons view board  */}
      <ToggleButton />
      {/* Add task button */}
      <IconButton
        type="solid"
        contentStyles="bg-primary-4 hover:bg-primary-3"
        icon={<PlusIcon svgClassName="text-neutral-1" />}
        onClick={() => console.log('TESTING BUTTON!!')}
      />
    </div>
  );
};

export default ActionButtons;
