const ErrorMessage = () => {
  const getErrorMessage = (error: unknown) => {
    if (error instanceof Error) {
      return error.message;
    }
    return String(error);
  };

  const reportError = ({ message }: { message: string }) => {
    console.log("message:", message);
  };

  try {
    throw new Error("oh no");
  } catch (error) {
    reportError({ message: getErrorMessage(error) });
  }

  return <div>error</div>;
};

export default ErrorMessage;
