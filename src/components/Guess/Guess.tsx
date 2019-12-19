import React from 'react';
import {styled} from '../../lib/styled';
import {useGuess} from './useGuess';
import {MultipleChoiceElement} from '../../modules/dictation/interface';

const GuessText = styled.Text<{isSelected: boolean}>`
  background-color: ${props =>
    props.isSelected ? props.theme.colors.gray : props.theme.colors.lightGray};
  color: ${props => props.theme.colors.darkGray};
  overflow: hidden;
  border-radius: ${props => props.theme.borderRadius.small};
`;

export interface Props {
  onPress: () => void;
  isSelected: boolean;
  element: MultipleChoiceElement;
  selectedChoiceID: string | null;
}

export const Guess = (props: Props) => {
  const {guessText} = useGuess(props);
  return (
    <GuessText onPress={props.onPress} isSelected={props.isSelected}>
      {` ${guessText} `}
    </GuessText>
  );
};
