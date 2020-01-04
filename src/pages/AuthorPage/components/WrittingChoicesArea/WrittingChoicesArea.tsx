import React from 'react';
import {styled} from '../../../../lib/styled';
import {ScrollView} from 'react-native';
import {sliceText} from '../../../../modules/dictation/adapters';
import {useWrittingChoicesArea} from './useWrittingChoicesArea';

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

interface Props {
  text: string;
}

export const WrittingChoicesArea = (props: Props) => {
  const {selectedWordId, onWordPress} = useWrittingChoicesArea();
  return (
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
  );
};
