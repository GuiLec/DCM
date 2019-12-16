import React from 'react';
import {styled} from '../../../../lib/styled';
import {ScrollView, Text} from 'react-native';
import {
  Dictation,
  DictationTextElement,
} from '../../../../modules/dictation/interface';
import {useDictationArea} from './useDictationArea';

const Container = styled.View`
  padding: ${props => props.theme.gridUnit * 2}px;
  margin: ${props => props.theme.gridUnit * 2}px;
  flex: 1;
  border-color: ${props => props.theme.colors.lightGray};
  border-width: 1px;
`;

const HardTextElement = styled.Text``;

const renderDictation = (slicedDictation: DictationTextElement[]) => (
  <Text>
    {slicedDictation.map(element => {
      if (element.type === 'hard') return element.text;
      else return <HardTextElement>?</HardTextElement>;
    })}
  </Text>
);

interface Props {
  dictation: Dictation;
}

export const DictationArea = (props: Props) => {
  const {sliceDication} = useDictationArea();
  console.log(sliceDication(props.dictation));
  return (
    <Container>
      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{flexDirection: 'row'}}>
        {renderDictation(sliceDication(props.dictation))}
      </ScrollView>
    </Container>
  );
};
