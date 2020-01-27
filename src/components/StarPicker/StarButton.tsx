import React from 'react';
import {styled} from '../../lib/styled';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Touchable = styled.TouchableOpacity`
  padding: ${props => props.theme.gridUnit}px;
`;

const IconComponent = styled(Icon)`
  color: ${props => props.theme.colors.yellow};
`;

interface Props {
  onPress?: () => void;
  size: number;
  isSelected?: boolean;
  disabled?: boolean;
}

export const StarButton = (props: Props) => {
  return (
    <Touchable onPress={props.onPress} disabled={props.disabled}>
      <IconComponent size={props.size} name="star" solid={!!props.isSelected} />
    </Touchable>
  );
};
