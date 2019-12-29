import React from 'react';
import {styled} from '../../../../lib/styled';
import Collapsible from 'react-native-collapsible';
import {Answer} from '../../../../components/Answer';
import {Choice} from '../../../../modules/dictation/interface';
import {DictationPick} from '../../../../components/DictationPick';

const Container = styled.View`
  padding-horizontal: ${props => props.theme.gridUnit * 4}px;
  padding-top: ${props => props.theme.gridUnit * 2}px;
  background-color: ${props => props.theme.colors.white};
`;

interface Props {
  iscollapsed: boolean;
}

export const PickDictationArea = (props: Props) => {
  return (
    <Collapsible collapsed={props.iscollapsed}>
      <Container>
        <DictationPick dictationTitle="Demain dès l'aube" />
        <DictationPick dictationTitle="Pivot" />
        <DictationPick dictationTitle="Demain dès l'aube" />
      </Container>
    </Collapsible>
  );
};
