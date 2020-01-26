import React from 'react';
import {styled} from '../lib/styled';
// @ts-ignore
import Flag from 'react-native-flags';

const Touchable = styled.TouchableOpacity`
  padding: ${props => props.theme.gridUnit * 2}px;
`;

interface Props {
  code: string;
  onPress?: () => void;
  size: number;
}

export const FlagButton = (props: Props) => {
  return (
    <Touchable>
      <Flag code={props.code} size={props.size} />
    </Touchable>
  );
};
