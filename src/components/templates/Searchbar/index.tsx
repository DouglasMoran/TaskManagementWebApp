const Searchbar = () => {
  return (
    <div className="flex h-16 w-full flex-row items-center justify-between rounded-[16px] bg-neutral-4 px-6">
      <div className="flex w-8/12 flex-row items-center gap-4">
        <div className="h-6 w-6 bg-tertiary-1"></div>
        <div className="h-[40px] w-full bg-tertiary-3"></div>
      </div>

      <div className="flex flex-row gap-4">
        <div className="h-[40px] w-[40px] bg-tertiary-1"></div>
        <div className="h-[40px] w-[40px] bg-tertiary-3"></div>
      </div>
    </div>
  );
};

export default Searchbar;
