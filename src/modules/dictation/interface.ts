export interface Dictation {
  id: string;
  name: string;
  text: string;
  choiceInputs?: ChoiceInput[];
}

export interface ChoiceInput {
  choiceInputID: string;
  position: number;
  choices: Choice[];
  originalTextLength: number;
}

export interface Choice {
  choiceID: string;
  text: string;
}

export type SlicedDictation = DictationTextElement[];

export type DictationTextElement = HardTextElement | MultipleChoiceElement;

interface HardTextElement {
  type: 'hard';
  text: string;
}

export interface MultipleChoiceElement {
  type: 'choice';
  choices: Choice[];
  originalTextLength: number;
  choiceInputID: string;
}
