import {MultipleChoiceElement} from '../../modules/dictation/interface';

const getGuessText = (element: MultipleChoiceElement) => {
  return `${' '.repeat(element.originalTextLength / 2)} ? ${' '.repeat(
    element.originalTextLength / 2,
  )}`;
};

export const useGuess = () => {
  return {getGuessText};
};
