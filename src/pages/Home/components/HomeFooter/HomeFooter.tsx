import React from 'react';
import {styled} from '../../../../lib/styled';
import {ValidationButton} from '../../../../components/ValidationButton';

const Container = styled.View`
  background-color: ${props => props.theme.colors.charcoalGray};
  padding: ${props => props.theme.gridUnit * 4}px;
  flex-direction: row;
  align-content: center;
  justify-content: center;
`;

interface Props {
  onPress: () => void;
  isValidationDisabled: boolean;
}

export const HomeFooter = (props: Props) => (
  <Container>
    <ValidationButton
      disabled={props.isValidationDisabled}
      title="corriger"
      onPress={props.onPress}
      buttonIconName="pen"
    />
  </Container>
);
