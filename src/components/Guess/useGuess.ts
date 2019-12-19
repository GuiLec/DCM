import {MultipleChoiceElement} from '../../modules/dictation/interface';
import {Props} from './Guess';
import {useState, useEffect} from 'react';

const getUnguessedText = (element: MultipleChoiceElement) => {
  return `${' '.repeat(element.originalTextLength / 2)} ? ${' '.repeat(
    element.originalTextLength / 2,
  )}`;
};

export const useGuess = (props: Props) => {
  const [guessText, setGuessText] = useState<string>(
    getUnguessedText(props.element),
  );

  useEffect(() => {
    if (props.isSelected) {
      const selectedChoice = props.element.choices.find(
        choice => choice.choiceID === props.selectedChoiceID,
      );
      setGuessText(
        selectedChoice ? selectedChoice.text : getUnguessedText(props.element),
      );
    }
  }, [props.selectedChoiceID, props.isSelected]);
  return {guessText};
};
