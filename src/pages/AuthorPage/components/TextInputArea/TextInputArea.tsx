import React from 'react';
import {styled} from '../../../../lib/styled';
import {TextInput, Keyboard} from 'react-native';

const Container = styled.TouchableOpacity`
  padding: ${props => props.theme.gridUnit * 2}px;
  margin: ${props => props.theme.gridUnit * 2}px;
  flex: 1;
  border-color: ${props => props.theme.colors.lightGray};
  border-width: 1px;
`;

const Title = styled.Text`
  font-size: ${props => props.theme.fontSizes.large};
  font-weight: bold;
`;

const TextArea = styled(TextInput)`
  min-height: ${props => props.theme.gridUnit * 20}px;
  margin: ${props => props.theme.gridUnit * 4}px;
  background-color: ${props => props.theme.colors.white};
  flex: 1;
`;

interface Props {
  updateText: (text: string) => void;
}

export const TextInputArea = (props: Props) => {
  return (
    <Container onPress={Keyboard.dismiss} activeOpacity={1}>
      <Title>Le texte de ma nouvelle dictée</Title>
      <TextArea
        onChangeText={props.updateText}
        multiline={true}
        placeholder="J'écris mon text ici..."
      />
    </Container>
  );
};
