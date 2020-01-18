import React from 'react';
import {styled} from '../lib/styled';

const ButtonComponent = styled.TouchableOpacity`
  background-color: ${props => props.theme.colors.lightGray};
  padding: ${props => props.theme.gridUnit * 2}px;
  margin-horizontal: ${props => props.theme.gridUnit * 6}px;
  margin-vertical: ${props => props.theme.gridUnit * 2}px;
  border-color: ${props => props.theme.colors.gray};
  border-width: 1;
`;

const ButtonTitle = styled.Text`
  font-size: ${props => props.theme.fontSizes.big};
  color: ${props => props.theme.colors.charcoalGray};
  font-weight: bold;
  text-align: center;
`;

interface Props {
  onPress?: () => void;
  title: string;
}

export const Button = (props: Props) => (
  <ButtonComponent onPress={props.onPress}>
    <ButtonTitle>{props.title}</ButtonTitle>
  </ButtonComponent>
);
