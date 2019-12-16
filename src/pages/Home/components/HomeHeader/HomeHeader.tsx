import React from 'react';
import {styled} from '../../../../lib/styled';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {TouchableOpacity} from 'react-native';
import {computeUniformHitSlop} from '../../../../lib/utils';

const Container = styled.View`
  background-color: ${props => props.theme.colors.charcoalGray};
  padding: ${props => props.theme.gridUnit * 4}px;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
`;

const HeaderIcon = styled(Icon)`
  color: ${props => props.theme.colors.lightGray};
`;

export const HomeHeader = () => (
  <Container>
    <TouchableOpacity onPress={() => {}} hitSlop={computeUniformHitSlop(20)}>
      <HeaderIcon name="bars" size={20} />
    </TouchableOpacity>
    <TouchableOpacity onPress={() => {}} hitSlop={computeUniformHitSlop(20)}>
      <HeaderIcon name="play" size={20} />
    </TouchableOpacity>
  </Container>
);
