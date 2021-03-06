import React from 'react';
import {styled} from '../../../lib/styled';
import {ValidationButton} from '../../../components/ValidationButton';

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
  title: string;
}

export const AuthorPageFooter = (props: Props) => (
  <Container>
    <ValidationButton
      title={props.title}
      onPress={props.onPress}
      buttonIconName="check"
      disabled={props.isValidationDisabled}
    />
  </Container>
);
