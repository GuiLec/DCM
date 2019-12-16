import React from 'react';
import {styled} from '../../../../lib/styled';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {ScrollView, Text} from 'react-native';

const Container = styled.View`
  padding: ${props => props.theme.gridUnit * 2}px;
  margin: ${props => props.theme.gridUnit * 2}px;
  flex: 1;
  border-color: ${props => props.theme.colors.lightGray};
  border-width: 1px;
`;

export const DictationArea = () => (
  <Container>
    <ScrollView style={{flex: 1}}>
      <Text>Hello</Text>
    </ScrollView>
  </Container>
);
