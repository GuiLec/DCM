import React from 'react';
import {styled} from '../../../../lib/styled';
import Collapsible from 'react-native-collapsible';
import {Answer} from '../../../../components/Answer';
import {Choice} from '../../../../modules/dictation/interface';
import {DictationPick} from '../../../../components/DictationPick';
import {usePickDictationArea} from './usePickDictationArea';
import {ScrollView} from 'react-native';

const Container = styled.View`
  padding-horizontal: ${props => props.theme.gridUnit * 4}px;
  padding-top: ${props => props.theme.gridUnit * 2}px;
  background-color: ${props => props.theme.colors.white};
  max-height: ${props => props.theme.gridUnit * 60};
`;

interface Props {
  iscollapsed: boolean;
  pickDictation: (dictationId?: string) => void;
}

export const PickDictationArea = (props: Props) => {
  const {dictations} = usePickDictationArea();
  return (
    <Collapsible collapsed={props.iscollapsed}>
      <Container>
        <ScrollView>
          {dictations.map(dictation => (
            <DictationPick
              key={dictation.id}
              dictationTitle={dictation.name}
              onPress={() => props.pickDictation(dictation.id)}
              difficulty={dictation.difficulty}
            />
          ))}
        </ScrollView>
      </Container>
    </Collapsible>
  );
};
