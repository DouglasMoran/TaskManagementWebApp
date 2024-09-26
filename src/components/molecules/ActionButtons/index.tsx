import { useState } from 'react';

import ToggleButton from '@components/atoms/ToggleButton';
import IconButton from '@components/atoms/IconButton';

import PlusIcon from '@utils/icons/PlusIcon';

const ActionButtons = () => {
  const [valueSelected, setValueSelected] = useState<number>(1);

  return (
    <div className="flex w-full flex-row justify-between">
      {/* Toggle buttons view board  */}
      <ToggleButton value={valueSelected} onSelect={setValueSelected} />
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
