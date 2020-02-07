import {
  Dictation,
  SlicedDictation,
  AnswersState,
  RawDictation,
} from './interface';
import {DEFAULT_DIFFICULTY, defaultAppLanguage} from '../../environment/app';

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

export const getInitialAnswersState = (
  dictation: Dictation | null,
): AnswersState => {
  let answerState: AnswersState = {};
  if (dictation)
    dictation.choiceInputs.forEach(choiceInput => {
      answerState[choiceInput.choiceInputID] = null;
    });
  return answerState;
};

export const getCorrectAnswersState = (
  dictation: Dictation | null,
): AnswersState => {
  let answerState: AnswersState = {};
  if (dictation)
    dictation.choiceInputs.forEach(choiceInput => {
      answerState[choiceInput.choiceInputID] = choiceInput.correctChoiceID;
    });
  return answerState;
};

export const getScore = (
  correctAnswersState: AnswersState,
  answersState: AnswersState,
): string => {
  let numberOfChoiceInputs = 0;
  let numberOfCorrectAnswers = 0;
  Object.keys(correctAnswersState).forEach(choiceInputID => {
    if (correctAnswersState[choiceInputID] === answersState[choiceInputID])
      numberOfCorrectAnswers = numberOfCorrectAnswers + 1;
    numberOfChoiceInputs = numberOfChoiceInputs + 1;
  });

  return `${numberOfCorrectAnswers}/${numberOfChoiceInputs}`;
};

export const sliceText = (
  text: string,
): {text: string; position: number}[][] => {
  let position = 0;
  let words;
  let slicedText: {text: string; position: number}[][] = [];
  const lines = text.split(`\n`);
  lines.forEach(line => {
    let slicedLine: {text: string; position: number}[] = [];
    words = line.split(' ');
    words.forEach(word => {
      slicedLine.push({text: word, position});
      position = position + word.length + 1;
    });
    slicedText.push(slicedLine);
  });
  return slicedText;
};

export const adaptDictations = (rawDictations: RawDictation[]): Dictation[] => {
  return rawDictations.map(rawDictation => ({
    ...rawDictation,
    difficulty: rawDictation.difficulty || DEFAULT_DIFFICULTY,
    language: rawDictation.language || defaultAppLanguage,
  }));
};

export const adaptDictationToSave = (dictation: Dictation): RawDictation => {
  return {...dictation};
};
