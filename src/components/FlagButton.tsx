import React from 'react';
import {styled} from '../lib/styled';
// @ts-ignore
import Flag from 'react-native-flags';

const Touchable = styled.TouchableOpacity<{isSelected: boolean}>`
  padding-horizontal: ${props => props.theme.gridUnit}px;
  border-radius: ${props => props.theme.gridUnit};
  ${props =>
    props.isSelected && `background-color: ${props.theme.colors.lightGray}`};
`;

interface Props {
  code: string;
  onPress?: () => void;
  size: number;
  isSelected?: boolean;
}

export const FlagButton = (props: Props) => {
  return (
    <Touchable onPress={props.onPress} isSelected={!!props.isSelected}>
      <Flag code={props.code} size={props.size} />
    </Touchable>
  );
};
