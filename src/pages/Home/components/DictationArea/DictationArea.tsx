import React from 'react';
import {styled} from '../../../../lib/styled';
import {ScrollView, Text} from 'react-native';
import {Dictation} from '../../../../modules/dictation/interface';
import {useDictationArea} from './useDictationArea';

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
  const {sliceDication} = useDictationArea();
  console.log(sliceDication(props.dictation));
  return (
    <Container>
      <ScrollView style={{flex: 1}}>
        <Text>{props.dictation.text}</Text>
      </ScrollView>
    </Container>
  );
};
