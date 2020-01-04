import React from 'react';
import {styled} from '../../../../lib/styled';
import {ScrollView, TouchableOpacity} from 'react-native';
import {sliceText} from '../../../../modules/dictation/adapters';
import {useWrittingChoicesArea} from './useWrittingChoicesArea';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Container = styled.View`
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

const Word = styled.Text<{isSelected: boolean}>`
  margin-right: ${props => props.theme.gridUnit};
  background-color: ${props =>
    props.isSelected ? props.theme.colors.gray : props.theme.colors.white};
`;

const InputContainer = styled.View`
  padding: ${props => props.theme.gridUnit * 4}px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const NewGuessLabelIcon = styled(Icon)`
  margin-right: ${props => props.theme.gridUnit * 2}px;
`;

const NewGuessInput = styled.TextInput`
  border-color: ${props => props.theme.colors.lightGray};
  border-width: 1px;
  padding: ${props => props.theme.gridUnit}px;
  flex: 1;
`;

interface Props {
  text: string;
}

export const WrittingChoicesArea = (props: Props) => {
  const {
    selectedWordId,
    setSelectedWordId,
    onWordPress,
  } = useWrittingChoicesArea();
  return (
    <>
      <TouchableOpacity
        style={{flex: 1}}
        onPress={() => setSelectedWordId(null)}
        activeOpacity={1}>
        <Container>
          <Title>Je sélectionne les mots à deviner :</Title>
          <ScrollView style={{flex: 1}}>
            {sliceText(props.text).map((paragraph, index) => (
              <Paragraph key={index}>
                {paragraph.map((word, i) => (
                  <Word
                    isSelected={`${index}_${i}` === selectedWordId}
                    onPress={onWordPress(`${index}_${i}`)}
                    key={i}>
                    {word}
                  </Word>
                ))}
              </Paragraph>
            ))}
          </ScrollView>
        </Container>
        {!!selectedWordId && (
          <InputContainer>
            <NewGuessLabelIcon size={16} name="edit" />
            <NewGuessInput placeholder="J'écris un nouveau choix" />
          </InputContainer>
        )}
      </TouchableOpacity>
    </>
  );
};
