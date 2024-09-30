import { useNavigate } from 'react-router-dom';
import { Button } from '@components/atoms';

const ErrorBoundaryFallback = () => {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen w-full flex-1 flex-col place-items-center items-center justify-center bg-neutral-5 px-6">
      <div className="flex flex-col space-y-4 sm:w-9/12 sm:px-6 md:w-10/12 lg:w-6/12 xl:w-4/12 2xl:w-4/12">
        <h1 className="font-sf text-3xl font-bold text-neutral-1 sm:text-lg xl:text-3xl">
          Mistakes are proof that you are trying
        </h1>
        <p className="text-justify text-neutral-2 sm:text-sm xl:text-base">
          In life, every misstep, every failure, and every moment of doubt
          serves as a testament to our willingness to step out of our comfort
          zones and embrace new challenges. It’s easy to shy away from risks, to
          play it safe, and to avoid the possibility of failure. However, it’s
          in the act of trying that we truly grow and evolve. Each mistake we
          make is not just a blemish on our record but rather a stepping stone
          on the path to success.
        </p>
        <Button
          variant="ghost"
          className="text-primary-4"
          onClick={() => navigate('/dashboard')}
        >
          Try again
        </Button>
      </div>
    </div>
  );
};

export default ErrorBoundaryFallback;
