import React from 'react';
import {styled} from '../lib/styled';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Container = styled.TouchableOpacity<{opacity: number}>`
  border-radius: ${props => props.theme.borderRadius.small};
  background-color: ${props => props.theme.colors.white};
  padding-horizontal: ${props => props.theme.gridUnit * 6}px;
  padding-vertical: ${props => props.theme.gridUnit * 2}px;
  flex-direction: row;
  opacity: ${props => props.opacity};
`;

const ValidationText = styled.Text`
  color: ${props => props.theme.colors.darkGray};
  font-size: ${props => props.theme.fontSizes.medium};
  font-weight: 700;
`;

const ButtonIcon = styled(Icon)`
  color: ${props => props.theme.colors.lightGray};
  margin-right: ${props => props.theme.gridUnit * 2};
  color: ${props => props.theme.colors.darkGray};
`;

interface Props {
  onPress?: () => void;
  title: string;
  buttonIconName?: string;
  disabled?: boolean;
}

export const ValidationButton = (props: Props) => (
  <Container
    onPress={props.onPress}
    disabled={props.disabled}
    opacity={props.disabled ? 0.2 : 1}>
    {props.buttonIconName && (
      <ButtonIcon name={props.buttonIconName} size={20} />
    )}
    <ValidationText>{props.title}</ValidationText>
  </Container>
);
