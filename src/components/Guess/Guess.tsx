import React from 'react';
import {styled} from '../../lib/styled';

const GuessText = styled.Text<{isSelected: boolean}>`
  background-color: ${props =>
    props.isSelected ? props.theme.colors.gray : props.theme.colors.lightGray};
  color: ${props => props.theme.colors.darkGray};
  overflow: hidden;
  border-radius: ${props => props.theme.borderRadius.small};
`;

interface Props {
  children: string;
  onPress: () => void;
  isSelected: boolean;
}

export const Guess = (props: Props) => {
  return (
    <GuessText onPress={props.onPress} isSelected={props.isSelected}>
      {props.children}
    </GuessText>
  );
};
