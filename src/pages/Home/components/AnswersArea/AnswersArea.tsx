import React from 'react';
import {styled} from '../../../../lib/styled';
import Collapsible from 'react-native-collapsible';
import {Answer} from '../../../../components/Answer';
import {Choice} from '../../../../modules/dictation/interface';

const Container = styled.View`
  padding-horizontal: ${props => props.theme.gridUnit * 6}px;
  padding-bottom: ${props => props.theme.gridUnit * 3}px;
  padding-top: ${props => props.theme.gridUnit}px;
  background-color: ${props => props.theme.colors.white};
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
`;

interface Props {
  iscollapsed: boolean;
  selectedChoiceInputID: string | null;
  selectedChoiceInputChoices: Choice[] | undefined;
  selectChoice: (choiceID: string) => () => void;
}

export const AnswersArea = (props: Props) => {
  return (
    <Collapsible collapsed={props.iscollapsed}>
      <Container>
        {props.selectedChoiceInputChoices &&
          props.selectedChoiceInputChoices.map(selectedChoiceInputChoice => (
            <Answer
              onPress={props.selectChoice(selectedChoiceInputChoice.choiceID)}
              key={selectedChoiceInputChoice.choiceID}
              answer={selectedChoiceInputChoice.text}
            />
          ))}
      </Container>
    </Collapsible>
  );
};
