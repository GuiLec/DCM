import React from 'react';
import {styled} from '../../../../lib/styled';
import {ScrollView, StyleSheet} from 'react-native';
import {sliceText} from '../../../../modules/dictation/adapters';
import {useWrittingChoicesArea} from './useWrittingChoicesArea';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Collapsible from 'react-native-collapsible';
import {Answer} from '../../../../components/Answer';
import {PlusButton} from '../../../../components/PlusButton';
import {AuthorPageFooter} from '../AuthorPageFooter';

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
  margin-bottom: ${props => props.theme.gridUnit * 2}px;
`;

const Paragraph = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;

const Word = styled.Text<{isSelected: boolean; isWordAGuess: boolean}>`
  margin-right: ${props => props.theme.gridUnit};
  background-color: ${props =>
    props.isSelected
      ? props.theme.colors.gray
      : props.isWordAGuess
      ? props.theme.colors.lightGray
      : props.theme.colors.white};
`;

const InputContainer = styled.View`
  padding: ${props => props.theme.gridUnit * 4}px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const NewGuessLabelIcon = styled(Icon)`
  color: ${props => props.theme.colors.gray};
  margin-right: ${props => props.theme.gridUnit * 2}px;
`;

const GuessesContainer = styled.ScrollView`
  padding-horizontal: ${props => props.theme.gridUnit * 6}px;
  padding-top: ${props => props.theme.gridUnit}px;
  background-color: ${props => props.theme.colors.white};
  flex-wrap: wrap;
  max-height: ${props => props.theme.gridUnit * 30}px;
`;

const NewGuessInput = styled.TextInput`
  border-color: ${props => props.theme.colors.gray};
  border-width: 1px;
  padding: ${props => props.theme.gridUnit}px;
  flex: 1;
`;

const styles = StyleSheet.create({
  guessContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

interface Props {
  text: string;
}

export const WrittingChoicesArea = (props: Props) => {
  const {
    setSelectedWord,
    onWordPress,
    selectedWord,
    inputText,
    changeInputText,
    onAddButtonPress,
    choiceInputs,
    isWordAGuess,
  } = useWrittingChoicesArea();
  return (
    <>
      <Container
        style={{flex: 1}}
        onPress={() => setSelectedWord(null)}
        activeOpacity={1}>
        <Title>Je sélectionne les mots à deviner :</Title>
        <ScrollView style={{flex: 1}}>
          {sliceText(props.text).map((paragraph, index) => (
            <Paragraph key={index}>
              {paragraph.map((word: {text: string; position: number}, i) => {
                const id = `${index}_${i}`;
                return (
                  <Word
                    isSelected={selectedWord && id === selectedWord.id}
                    isWordAGuess={isWordAGuess(id)}
                    onPress={onWordPress({
                      ...word,
                      id: id,
                    })}
                    key={i}>
                    {word.text}
                  </Word>
                );
              })}
            </Paragraph>
          ))}
        </ScrollView>
      </Container>
      <Collapsible collapsed={!selectedWord}>
        <GuessesContainer contentContainerStyle={styles.guessContainer}>
          {!!selectedWord &&
            choiceInputs[selectedWord.id] &&
            choiceInputs[selectedWord.id].choices.map(choice => (
              <Answer key={choice.choiceID} answer={choice.text} />
            ))}
        </GuessesContainer>
        <InputContainer>
          <NewGuessLabelIcon size={16} name="edit" />
          <NewGuessInput
            value={inputText}
            onChangeText={changeInputText}
            placeholder="J'écris un nouveau choix"
          />
          <PlusButton onPress={onAddButtonPress} />
        </InputContainer>
      </Collapsible>
      <Collapsible collapsed={!!selectedWord}>
        <AuthorPageFooter
          title="Je valide cette dictée"
          isValidationDisabled={Object.keys(choiceInputs).length === 0}
          onPress={() => {}}
        />
      </Collapsible>
    </>
  );
};
