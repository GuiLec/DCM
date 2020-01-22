import React from 'react';
import {StyleSheet} from 'react-native';
import {styled} from '../../../../lib/styled';
import Collapsible from 'react-native-collapsible';
import {Answer} from '../../../../components/Answer';
import {Choice} from '../../../../modules/dictation/interface';

const Container = styled.ScrollView`
  padding-horizontal: ${props => props.theme.gridUnit * 6}px;
  padding-bottom: ${props => props.theme.gridUnit * 3}px;
  padding-top: ${props => props.theme.gridUnit}px;
  background-color: ${props => props.theme.colors.white};
  max-height: ${props => props.theme.gridUnit * 30}px;
`;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

interface Props {
  iscollapsed: boolean;
  selectedChoiceInputID: string | null;
  selectedChoiceInputChoices: Choice[] | undefined | null;
  selectChoice: (choiceID: string) => () => void;
  setAnswer: (choiceInputID: string | null, choiceID: string) => () => void;
}

export const AnswersArea = (props: Props) => {
  return (
    <Collapsible collapsed={props.iscollapsed}>
      <Container contentContainerStyle={styles.container}>
        {props.selectedChoiceInputChoices &&
          props.selectedChoiceInputChoices.map(selectedChoiceInputChoice => (
            <Answer
              onPress={() => {
                props.selectChoice(selectedChoiceInputChoice.choiceID)();
                props.setAnswer(
                  props.selectedChoiceInputID,
                  selectedChoiceInputChoice.choiceID,
                )();
              }}
              key={selectedChoiceInputChoice.choiceID}
              answer={selectedChoiceInputChoice.text}
            />
          ))}
      </Container>
    </Collapsible>
  );
};
