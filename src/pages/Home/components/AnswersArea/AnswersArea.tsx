import React from 'react';
import {styled} from '../../../../lib/styled';
import Collapsible from 'react-native-collapsible';
import {Answer} from '../../../../components/Answer';

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
}

export const AnswersArea = (props: Props) => {
  return (
    <Collapsible collapsed={props.iscollapsed}>
      <Container>
        <Answer />
        <Answer />
        <Answer />
        <Answer />
        <Answer />
        <Answer />
        <Answer />
        <Answer />
        <Answer />
      </Container>
    </Collapsible>
  );
};
