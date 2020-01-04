import React from 'react';
import {styled} from '../lib/styled';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Touchable = styled.TouchableOpacity`
  margin: ${props => props.theme.gridUnit}px;
`;

const IconComponent = styled(Icon)`
  color: ${props => props.theme.colors.gray};
  background-color: ${props => props.theme.colors.white};
`;

interface Props {
  onPress?: () => void;
}

export const PlusButton = (props: Props) => (
  <Touchable onPress={props.onPress}>
    <IconComponent name="plus-circle" size={20} />
  </Touchable>
);
