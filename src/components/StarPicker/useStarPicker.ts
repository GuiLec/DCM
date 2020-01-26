import {useState} from 'react';

export const useStarPicker = () => {
  const [starSelection, setStarSelection] = useState<
    [boolean, boolean, boolean, boolean, boolean]
  >([false, false, false, false, false]);
  return {starSelection};
};
