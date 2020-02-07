import {User} from '../user/interface';

export interface Dictation extends RawDictation {
  difficulty: number;
  language: string;
}

export interface RawDictation {
  id: string;
  name: string;
  text: string;
  choiceInputs: ChoiceInput[];
  author?: User;
}

export interface ChoiceInput {
  choiceInputID: string;
  position: number;
  choices: Choice[];
  correctChoiceID: string;
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

export interface AnswersState {
  [AnswerChoiceID: string]: string | null;
}
