export interface Dictation {
  id: string;
  name: string;
  text: string;
  choiceInputs?: ChoiceInput[];
}

interface ChoiceInput {
  position: number;
  choices: Choice[];
  originalTextLength: number;
}

interface Choice {
  text: string;
}

export type DictationTextElement = HardTextElement | MultipleChoiceElement;

interface HardTextElement {
  type: 'hard';
  text: string;
}

interface MultipleChoiceElement {
  type: 'choice';
  choices: Choice[];
  originalTextLength: number;
}
