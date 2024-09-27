const ErrorBoundaryFallback = (): JSX.Element => {
  return (
    <div>
      <p>Sorry, something went wrong!</p>
      <p>
        Please try it out again. But don't worry we're handling of this error
        right now!
      </p>
    </div>
  );
};

export default ErrorBoundaryFallback;
