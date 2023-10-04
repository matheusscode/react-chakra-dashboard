import React from "react";

export default function useLoading() {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return { isLoading };
}
