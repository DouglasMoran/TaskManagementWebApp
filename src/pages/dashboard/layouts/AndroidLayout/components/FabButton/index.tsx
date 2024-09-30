import { PropsWithChildren } from 'react';

import { Button } from '@components/atoms';

type FabButtonProps = PropsWithChildren<{
  onClick: () => void;
}>;

const FabButton = ({ onClick, children }: FabButtonProps) => {
  return (
    <Button
      onClick={onClick}
      className="fixed bottom-6 right-6 flex h-16 w-16  items-center justify-center  rounded-full bg-primary-4 text-neutral-1
        shadow-lg transition duration-300 ease-in-out hover:bg-primary-3"
    >
      {children}
    </Button>
  );
};

export default FabButton;
