import React from 'react';
import {styled} from '../../lib/styled';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Touchable = styled.TouchableOpacity`
  padding: ${props => props.theme.gridUnit}px;
`;

interface Props {
  onPress?: () => void;
  size: number;
  isSelected?: boolean;
}

export const StarButton = (props: Props) => {
  return (
    <Touchable onPress={props.onPress}>
      <Icon size={props.size} name="star" solid={!!props.isSelected} />
    </Touchable>
  );
};
