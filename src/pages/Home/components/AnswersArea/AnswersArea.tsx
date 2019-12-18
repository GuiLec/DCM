import React from 'react';
import {styled} from '../../../../lib/styled';
import Collapsible from 'react-native-collapsible';

const Container = styled.View`
  height: 100;
`;

export const AnswersArea = () => {
  return (
    <Collapsible collapsed={false}>
      <Container />
    </Collapsible>
  );
};
