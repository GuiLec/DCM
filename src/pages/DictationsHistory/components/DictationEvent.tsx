import React from 'react';
import {styled} from '../../../lib/styled';

const Container = styled.View`
  background-color: ${props => props.theme.colors.white};
  padding: ${props => props.theme.gridUnit * 4}px;
  margin: ${props => props.theme.gridUnit * 2}px;
  border-radius: ${props => props.theme.gridUnit};
`;

const DictationTitle = styled.Text``;

export const DictationEvent = () => {
  return (
    <Container>
      <DictationTitle>Hello</DictationTitle>
    </Container>
  );
};
