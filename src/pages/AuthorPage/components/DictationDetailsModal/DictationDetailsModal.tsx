import React from 'react';
import {styled} from '../../../../lib/styled';
import {ValidationButton} from '../../../../components/ValidationButton';
import {CrossButton} from '../../../../components/CrossButton';

const Overlay = styled.View`
  background-color: rgba(23, 36, 42, 0.8);
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  align-content: center;
  justify-content: center;
  padding: ${props => props.theme.gridUnit * 6}px;
`;

const Container = styled.View`
  background-color: ${props => props.theme.colors.gray};
  padding: ${props => props.theme.gridUnit * 4}px;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  border-color: ${props => props.theme.colors.black};
  border-width: 1px;
`;

interface Props {
  saveDictation: (title: string) => void;
  disabled?: boolean;
  toggleModal: () => void;
}

export const DictationDetailsModal = (props: Props) => (
  <Overlay>
    <Container>
      <CrossButton onPress={props.toggleModal} />
      <ValidationButton
        title={'Je crée ma dictée'}
        onPress={() => props.saveDictation('Mon Titre')}
        disabled={props.disabled}
      />
    </Container>
  </Overlay>
);
