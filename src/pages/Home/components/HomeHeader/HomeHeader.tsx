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

const HeaderTitle = styled.Text`
  font-family: Pacifico;
  font-size: ${props => props.theme.fontSizes.big};
  color: ${props => props.theme.colors.white};
`;

interface Props {
  pickDictation: () => void;
}

export const HomeHeader = (props: Props) => (
  <Container>
    <TouchableOpacity onPress={() => {}} hitSlop={computeUniformHitSlop(20)}>
      <HeaderIcon name="bars" size={20} />
    </TouchableOpacity>
    <HeaderTitle>DCM</HeaderTitle>
    <TouchableOpacity
      onPress={props.pickDictation}
      hitSlop={computeUniformHitSlop(20)}>
      <HeaderIcon name="play" size={20} />
    </TouchableOpacity>
  </Container>
);
