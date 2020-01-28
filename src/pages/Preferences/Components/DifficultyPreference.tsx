import React from 'react';
import {styled} from '../../../lib/styled';
import {StarPicker} from '../../../components/StarPicker';

const Touchable = styled.TouchableOpacity<{selected?: boolean}>`
  flex-direction: row;
  align-items: center;
  align-self: baseline;
  padding-horizontal: ${props => props.theme.gridUnit * 3}px;
  padding-vertical: ${props => props.theme.gridUnit}px;
  margin-vertical: ${props => props.theme.gridUnit}px;
  ${props =>
    props.selected && `background-color:${props.theme.colors.lightGray}`}
    border-radius:${props => props.theme.gridUnit * 2}
`;

const Label = styled.Text`
  font-weight: bold;
  margin-left: ${props => props.theme.gridUnit * 3}px;
`;

interface Props {
  difficulty: number;
  label: string;
  selected?: boolean;
}

export const DifficultyPreference = (props: Props) => {
  return (
    <Touchable selected={props.selected}>
      <StarPicker disabled difficulty={props.difficulty} />
      <Label>{props.label}</Label>
    </Touchable>
  );
};
