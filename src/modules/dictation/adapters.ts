import {Dictation, SlicedDictation, AnswersState} from './interface';

export const sliceDication = (dictation: Dictation): SlicedDictation => {
  let slicedDictation: SlicedDictation = [];
  let dictationText = dictation.text;
  let hardSlice: string;
  let spentTextLength = 0;

  const orderedChoiceInputs = dictation.choiceInputs.sort(
    (choiceA, choiceB) => choiceA.position - choiceB.position,
  );
  orderedChoiceInputs.forEach(choiceInput => {
    hardSlice = dictationText.slice(0, choiceInput.position - spentTextLength);
    slicedDictation.push({
      text: hardSlice,
      type: 'hard',
    });
    dictationText = dictationText.slice(choiceInput.position - spentTextLength);
    slicedDictation.push({
      choices: choiceInput.choices,
      type: 'choice',
      originalTextLength: choiceInput.originalTextLength,
      choiceInputID: choiceInput.choiceInputID,
    });
    dictationText = dictationText.slice(choiceInput.originalTextLength);
    spentTextLength =
      spentTextLength + choiceInput.originalTextLength + hardSlice.length;
  });
  slicedDictation.push({
    text: dictationText,
    type: 'hard',
  });

  return slicedDictation;
};

export const getInitialAnswersState = (dication: Dictation): AnswersState => {
  let answerState = {};
  dication.choiceInputs.forEach(choiceInput => {
    answerState[choiceInput.choiceInputID] = null;
  });
  return answerState;
};

export const getCorrectAnswersState = (dication: Dictation): AnswersState => {
  let answerState = {};
  dication.choiceInputs.forEach(choiceInput => {
    answerState[choiceInput.choiceInputID] = choiceInput.correctChoiceID;
  });
  return answerState;
};
