import { useMemo } from "react";
import {type  Creator } from "./useDummyCreatorData";


type Quest = {
  points: number;
  endDate: string;
  type: "ranking" | "raffle";
  creator: Creator;
  title: string;
  description: string;
  image: string;
};

const useDummyQuestData = (type: "ranking" | "raffle") => {
  const quests: Quest[] = useMemo(() => {
    return Array.from({ length: 20 }, (_, index) => {
      return {
        points: Math.floor(Math.random() * 100) + 1, // Random points between 1 and 100
        endDate: new Date(
          Date.now() + Math.random() * 7 * 24 * 60 * 60 * 1000
        ).toISOString(), // Random end date within a week
        type: type ?? index % 2 === 0 ? "ranking" : "raffle", // Alternate types
        creator: {
          name: `Creator ${index + 1}`,
          imageLink: `http://www.iqandreas.com/sample-images/100-100-color/${String(index).padStart(2, "0")}.jpg`,
        },
        title: `Quest Title ${index + 1}`,
        description: `This is the description for Quest Title ${index + 1}.`,
        image: `http://www.iqandreas.com/sample-images/400-300-color/${String(index).padStart(2, "0")}.jpg`, // Different image for the quest
      };
    });
  }, []);

  return quests;
};

export default useDummyQuestData;
