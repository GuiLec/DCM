import {
  Dictation,
  DictationTextElement,
} from '../../../../modules/dictation/interface';

const sliceDication = (dictation: Dictation): DictationTextElement[] => {
  let slicedDictation: DictationTextElement[] = [];
  let dictationText = dictation.text;
  let hardSlice: string;

  const orderedChoiceInputs = dictation.choiceInputs.sort(
    (choiceA, choiceB) => choiceA.position - choiceB.position,
  );
  orderedChoiceInputs.forEach(choiceInput => {
    hardSlice = dictationText.slice(0, choiceInput.position);
    slicedDictation.push({
      text: hardSlice,
      type: 'hard',
    });
    dictationText = dictationText.slice(choiceInput.position);
    slicedDictation.push({
      choices: choiceInput.choices,
      type: 'choice',
      originalTextLength: choiceInput.originalTextLength,
    });
    dictationText = dictationText.slice(choiceInput.originalTextLength);
  });
  console.log('dictationText', dictationText);
  slicedDictation.push({
    text: dictationText,
    type: 'hard',
  });

  return slicedDictation;
};

export const useDictationArea = () => {
  return {sliceDication};
};
