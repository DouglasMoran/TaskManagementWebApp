import { PropsWithChildren } from 'react';

const MainContainer = ({ children }: PropsWithChildren) => {
  return (
    <div className="h-screen w-screen overflow-hidden">
      <div className="h-screen w-screen flex-row px-8 pt-6">{children}</div>
    </div>
  );
};

export default MainContainer;
