import React from 'react';
import {styled} from '../../../../lib/styled';
import {ScrollView, TextInput} from 'react-native';

const Container = styled.View`
  padding: ${props => props.theme.gridUnit * 2}px;
  margin: ${props => props.theme.gridUnit * 2}px;
  flex: 1;
  border-color: ${props => props.theme.colors.lightGray};
  border-width: 1px;
`;

interface Props {}

export const TextInputArea = (props: Props) => {
  return (
    <Container>
      <ScrollView style={{flex: 1}}>
        <TextInput
          multiline={true}
          numberOfLines={4}
          placeholder="J'écris mon text ici..."
        />
      </ScrollView>
    </Container>
  );
};
