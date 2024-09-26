import { PropsWithChildren } from 'react';

const MainContainer = ({ children }: PropsWithChildren) => {
  return (
    <body className="h-screen w-screen overflow-hidden">
      <div className="h-screen w-screen flex-row px-4 pt-6">{children}</div>
    </body>
  );
};

export default MainContainer;
