import { PropsWithChildren } from 'react';

import { ButtonType } from '@interfaces/components.types';

type ButtonPropsType = PropsWithChildren<{
  color?: string;
  type?: ButtonType;
  icon: JSX.Element;
  contentStyles: string;
  onClick: () => void;
}>;

const IconButton = ({ icon, contentStyles, onClick }: ButtonPropsType) => {
  const defaultStyles = 'rounded-lg p-2 ';

  return (
    <button className={defaultStyles.concat(contentStyles)} onClick={onClick}>
      {icon}
    </button>
  );
};

export default IconButton;
