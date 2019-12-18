import React from 'react';
import {styled} from '../../../../lib/styled';
import {ScrollView, Text} from 'react-native';
import {SlicedDictation} from '../../../../modules/dictation/interface';

const Container = styled.View`
  padding: ${props => props.theme.gridUnit * 2}px;
  margin: ${props => props.theme.gridUnit * 2}px;
  flex: 1;
  border-color: ${props => props.theme.colors.lightGray};
  border-width: 1px;
`;

const Guess = styled.Text`
  color: ${props => props.theme.colors.darkGray};
  background-color: ${props => props.theme.colors.lightGray};
  overflow: hidden;
  border-radius: ${props => props.theme.borderRadius.small};
`;

const renderDictation = (
  slicedDictation: SlicedDictation,
  selectChoiceInput: (choiceInputID: string) => () => void,
) => (
  <Text>
    {slicedDictation.map(element => {
      if (element.type === 'hard') return element.text;
      if (element.type === 'choice')
        return (
          <Guess
            onPress={selectChoiceInput(element.choiceInputID)}>{`${' '.repeat(
            element.originalTextLength / 2,
          )} ? ${' '.repeat(element.originalTextLength / 2)}`}</Guess>
        );
    })}
  </Text>
);

interface Props {
  slicedDictation: SlicedDictation;
  selectChoiceInput: (choiceInputID: string) => () => void;
}

export const DictationArea = (props: Props) => {
  return (
    <Container>
      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{flexDirection: 'row'}}>
        {renderDictation(props.slicedDictation, props.selectChoiceInput)}
      </ScrollView>
    </Container>
  );
};
