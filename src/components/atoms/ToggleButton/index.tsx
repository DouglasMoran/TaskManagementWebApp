import IconButton from '@components/atoms/IconButton';

import HamburgerMenuIcon from '@utils/icons/HamburgerMenuIcon';
import GridIcon from '@utils/icons/GridIcon';

type ToggleButtonPropsType = {
  value: number;
  // eslint-disable-next-line no-unused-vars
  onSelect: (value: number) => void;
};

const ToggleButton = ({ value, onSelect }: ToggleButtonPropsType) => {
  const [selected, unselected] = [1, 0];

  return (
    <div className="flex flex-row">
      <IconButton
        type="outline"
        contentStyles={`${value === unselected && 'border'} border-primary-4`}
        icon={
          <HamburgerMenuIcon
            svgClassName={
              value === unselected
                ? 'text-primary-4 hover:text-neutral-1'
                : 'text-neutral-1'
            }
          />
        }
        onClick={() => onSelect(0)}
      />
      <IconButton
        type="outline"
        contentStyles={`${value === selected && 'border'} border-primary-4 hover:border-neutral-1`}
        icon={
          <GridIcon
            svgClassName={
              value === selected
                ? 'text-primary-4 hover:text-neutral-1'
                : 'text-neutral-1'
            }
          />
        }
        onClick={() => onSelect(1)}
      />
    </div>
  );
};

export default ToggleButton;
