import React from 'react';
import {styled} from '../../../lib/styled';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Container = styled.TouchableOpacity`
  padding: ${props => props.theme.gridUnit * 4}px;
  border-bottom-width: 1px;
  border-color: ${props => props.theme.colors.gray};
`;

const Title = styled.Text`
  font-size: ${props => props.theme.fontSizes.medium};
  color: ${props => props.theme.colors.white};
  font-weight: bold;
`;

interface Props {
  onPress?: () => void;
  title: string;
}

export const DrawerMenuItem = (props: Props) => {
  return (
    <Container onPress={props.onPress}>
      <Title>{props.title}</Title>
    </Container>
  );
};
