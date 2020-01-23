import {DictationEvent} from '../../modules/user/interface';

const dictationEvents: DictationEvent[] = [
  {
    id: '678',
    dictationName: 'My old dictation',
    score: '17/20',
    date: 1579767270,
  },
];

export const useDictationsHistory = () => {
  return {dictationEvents};
};
