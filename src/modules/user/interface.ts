export interface User extends RawUser {
  dictationsHistory: DictationEvent[];
}

export interface RawUser {
  email: string;
  name: string;
  id: string;
}

export interface DictationEvent {
  id: string;
  dictationName: string;
  score: string;
}
