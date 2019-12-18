import React from 'react';
import {styled} from '../../../../lib/styled';
import Collapsible from 'react-native-collapsible';

const Container = styled.View`
  height: 100;
`;

interface Props {
  iscollapsed: boolean;
}

export const AnswersArea = (props: Props) => {
  return (
    <Collapsible collapsed={props.iscollapsed}>
      <Container />
    </Collapsible>
  );
};
