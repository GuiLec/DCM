import React from 'react';
import {styled} from '../lib/styled';

const Touchable = styled.TouchableOpacity`
  border-radius: ${props => props.theme.borderRadius.small};
  background-color: ${props => props.theme.colors.lightGray};
  padding-horizontal: ${props => props.theme.gridUnit * 2}px;
  padding-vertical: ${props => props.theme.gridUnit}px;
  ${props => props.theme.shadows.medium}
  margin-horizontal: ${props => props.theme.gridUnit * 2}px;
  margin-vertical: ${props => props.theme.gridUnit}px;
`;

const Text = styled.Text`
  color: ${props => props.theme.colors.darkGray};
  font-size: ${props => props.theme.fontSizes.medium};
  font-weight: 700;
`;

interface Props {
  answer: string;
}

export const Answer = (props: Props) => (
  <Touchable>
    <Text>{props.answer}</Text>
  </Touchable>
);
