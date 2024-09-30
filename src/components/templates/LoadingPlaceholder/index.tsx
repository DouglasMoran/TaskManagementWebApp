import BrandIcon from '@utils/icons/BrandIcon';

const LoadingPlaceholder = () => {
  return (
    <div className="flex h-screen w-screen flex-1 flex-col place-content-center place-items-center gap-6 bg-neutral-5 text-neutral-2">
      <BrandIcon svgClassName="text-neutral-1" />
      <p>Hold tight, magic is happening behind the scenes...!</p>
    </div>
  );
};

export default LoadingPlaceholder;
