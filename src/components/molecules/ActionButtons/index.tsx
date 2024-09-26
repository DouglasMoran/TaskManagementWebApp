import ToggleButton from '@components/atoms/ToggleButton';
import IconButton from '@components/atoms/IconButton';

const ActionButtons = () => {
  return (
    <div className="flex w-full flex-row justify-between bg-neutral-3">
      {/* Toggle buttons view board  */}
      <ToggleButton />
      {/* Add task button */}
      <IconButton />
    </div>
  );
};

export default ActionButtons;
