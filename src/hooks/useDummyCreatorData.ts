import { useMemo } from "react";

export type Creator = {
  name: string;
  imageLink: string;
};

const useDummyCreatorData = () => {
  const creators: Creator[] = useMemo(() => {
    return Array.from({ length: 20 }, (_, index) => {
      const id = String(index).padStart(2, "0");
      return {
        name: `Creator ${index + 1}`,
        imageLink: `http://www.iqandreas.com/sample-images/100-100-color/${id}.jpg`,
      };
    });
  }, []);

  return creators;
};

export default useDummyCreatorData;
