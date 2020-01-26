import {useState} from 'react';

export const useStarPicker = (
  onChange: (difficulty: number | null) => void,
) => {
  let difficulty = 0;
  const [starSelection, setStarSelection] = useState<
    [boolean, boolean, boolean, boolean, boolean]
  >([false, false, false, false, false]);

  const selectStar = (index: number) => () => {
    let newStarSelection = [];
    for (let i = 0; i < index + 1; i++) {
      difficulty++;
      newStarSelection[i] = true;
    }
    for (let j = index + 1; j < 5; j++) {
      newStarSelection[j] = false;
    }
    // @ts-ignore
    setStarSelection(newStarSelection);
    onChange(difficulty);
  };

  return {starSelection, selectStar};
};
