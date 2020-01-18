import React from 'react';
import {styled} from '../lib/styled';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Touchable = styled.TouchableOpacity`
  padding: ${props => props.theme.gridUnit * 2}px;
`;

const IconComponent = styled(Icon)`
  color: ${props => props.theme.colors.darkGray};
`;

interface Props {
  onPress?: () => void;
}

export const CrossButton = (props: Props) => (
  <Touchable onPress={props.onPress}>
    <IconComponent name="times" size={30} />
  </Touchable>
);
