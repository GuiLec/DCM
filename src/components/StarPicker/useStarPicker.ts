import {useState} from 'react';
import {Props} from './StarPicker';

export const useStarPicker = (props: Props) => {
  const [starSelection, setStarSelection] = useState<
    [boolean, boolean, boolean, boolean, boolean]
  >([
    !!props.difficulty && props.difficulty > 0,
    !!props.difficulty && props.difficulty > 1,
    !!props.difficulty && props.difficulty > 2,
    !!props.difficulty && props.difficulty > 3,
    !!props.difficulty && props.difficulty > 4,
  ]);

  const selectStar = (index: number) => () => {
    let difficulty = 0;
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
    props.onChange(difficulty);
  };

  return {starSelection, selectStar};
};
