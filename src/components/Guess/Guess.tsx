import React from 'react';
import {styled} from '../../lib/styled';

const GuessText = styled.Text`
  color: ${props => props.theme.colors.darkGray};
  background-color: ${props => props.theme.colors.lightGray};
  overflow: hidden;
  border-radius: ${props => props.theme.borderRadius.small};
`;

interface Props {
  children: string;
  onPress: () => void;
}

export const Guess = (props: Props) => {
  return <GuessText onPress={props.onPress}>{props.children}</GuessText>;
};
