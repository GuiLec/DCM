export interface User extends RawUser {}

export interface RawUser {
  email: string;
  name: string;
  id: string;
  dictationsHistory: DictationEvent[];
  dictationsDifficulties: number[];
  selectedLanguage: string;
}

export interface DictationEvent {
  id: string;
  dictationName: string;
  score: string;
  date: number;
}
