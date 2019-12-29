import React from 'react';
import {styled} from '../lib/styled';

const Touchable = styled.TouchableOpacity`
  border-radius: ${props => props.theme.borderRadius.small};
  border-color: ${props => props.theme.colors.gray};
  border-width: 1px;
  background-color: ${props => props.theme.colors.lightGray};
  padding-horizontal: ${props => props.theme.gridUnit * 2}px;
  padding-vertical: ${props => props.theme.gridUnit}px;
  margin-vertical: ${props => props.theme.gridUnit}px;
`;

const Text = styled.Text`
  color: ${props => props.theme.colors.darkGray};
  font-size: ${props => props.theme.fontSizes.medium};
  font-weight: 700;
`;

interface Props {
  dictationTitle: string;
  onPress?: () => void;
}

export const DictationPick = (props: Props) => (
  <Touchable onPress={props.onPress}>
    <Text>{props.dictationTitle}</Text>
  </Touchable>
);
