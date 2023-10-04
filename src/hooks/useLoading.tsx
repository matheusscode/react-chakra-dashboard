import React from "react";

export default function useLoading() {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(true);
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  return { isLoading };
}
