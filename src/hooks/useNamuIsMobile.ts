import { useState, useEffect } from "react";

export const useNamuIsMobile = (): boolean => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkIfMobile = (): void => {
      const match = window.matchMedia("(max-width: 600px)").matches;
      setIsMobile(match);
    };

    checkIfMobile();

    window.addEventListener("resize", checkIfMobile);

    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  return isMobile;
};
