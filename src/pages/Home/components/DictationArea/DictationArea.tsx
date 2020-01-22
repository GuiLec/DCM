import React from 'react';
import {styled} from '../../../../lib/styled';
import {ScrollView, Text} from 'react-native';
import {SlicedDictation} from '../../../../modules/dictation/interface';
import {Guess} from '../../../../components/Guess';

const Container = styled.View`
  padding: ${props => props.theme.gridUnit * 2}px;
  margin: ${props => props.theme.gridUnit * 2}px;
  flex: 1;
  border-color: ${props => props.theme.colors.lightGray};
  border-width: 1px;
`;

const Touchable = styled.TouchableOpacity`
  flex: 1;
`;

const renderDictation = (
  slicedDictation: SlicedDictation,
  selectChoiceInput: (choiceInputID: string) => () => void,
  selectedChoiceInputID: string | null,
  selectedChoiceID: string | null,
) => {
  return (
    <Text>
      {slicedDictation.map(element => {
        if (element.type === 'hard') return element.text;
        if (element.type === 'choice')
          return (
            <Guess
              key={element.choiceInputID}
              onPress={selectChoiceInput(element.choiceInputID)}
              isSelected={selectedChoiceInputID === element.choiceInputID}
              element={element}
              selectedChoiceID={selectedChoiceID}
            />
          );
        return;
      })}
    </Text>
  );
};

interface Props {
  slicedDictation: SlicedDictation | null;
  selectChoiceInput: (choiceInputID: string | null) => () => void;
  selectedChoiceInputID: string | null;
  selectedChoiceID: string | null;
}

export const DictationArea = (props: Props) => {
  return (
    <Container>
      <ScrollView style={{flex: 1}}>
        <Touchable onPress={props.selectChoiceInput(null)} activeOpacity={1}>
          {!!props.slicedDictation &&
            renderDictation(
              props.slicedDictation,
              props.selectChoiceInput,
              props.selectedChoiceInputID,
              props.selectedChoiceID,
            )}
        </Touchable>
      </ScrollView>
    </Container>
  );
};
