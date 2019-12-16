import React from 'react';
import {styled} from '../../../../lib/styled';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {ScrollView, Text} from 'react-native';
import {Dictation} from '../../../../modules/dictation/interface';

const Container = styled.View`
  padding: ${props => props.theme.gridUnit * 2}px;
  margin: ${props => props.theme.gridUnit * 2}px;
  flex: 1;
  border-color: ${props => props.theme.colors.lightGray};
  border-width: 1px;
`;

interface Props {
  dictation: Dictation;
}

export const DictationArea = (props: Props) => {
  return (
    <Container>
      <ScrollView style={{flex: 1}}>
        <Text>{props.dictation.text}</Text>
      </ScrollView>
    </Container>
  );
};
