import React from 'react';
import {styled} from '../../../../lib/styled';
import {ScrollView, Text} from 'react-native';
import {SlicedDictation} from '../../../../modules/dictation/interface';
import {Guess} from '../../../../components/Guess';
import {FlagButton} from '../../../../components/FlagButton';

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
      {slicedDictation.elements.map(element => {
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
        return null;
      })}
    </Text>
  );
};

const TitleContainer = styled.View`
  padding: ${props => props.theme.gridUnit * 2}px;
`;

const DictationTitle = styled.Text`
  font-size: ${props => props.theme.fontSizes.big};
  font-weight: bold;
`;

const DetailsContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const AuthorName = styled.Text`
  font-size: ${props => props.theme.fontSizes.medium};
  color: ${props => props.theme.colors.charcoalGray};
`;

interface Props {
  slicedDictation: SlicedDictation | null;
  selectChoiceInput: (choiceInputID: string | null) => () => void;
  selectedChoiceInputID: string | null;
  selectedChoiceID: string | null;
}

export const DictationArea = (props: Props) => {
  return (
    <Container>
      {!!props.slicedDictation && (
        <TitleContainer>
          <DictationTitle>Mon titre</DictationTitle>
          <DetailsContainer>
            <FlagButton code={'FR'} size={24} />
            <AuthorName>Guilec</AuthorName>
          </DetailsContainer>
        </TitleContainer>
      )}
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
