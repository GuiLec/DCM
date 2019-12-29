import React from 'react';
import {styled} from '../../../../lib/styled';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {TouchableOpacity, View} from 'react-native';
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

const CaretDownIcon = styled(Icon)`
  color: ${props => props.theme.colors.lightGray};
  position: absolute;
  right: -5;
  bottom: -5;
`;

const HeaderTitle = styled.Text`
  font-family: Pacifico;
  font-size: ${props => props.theme.fontSizes.big};
  color: ${props => props.theme.colors.white};
`;

interface Props {
  pickDictation: () => void;
  showPickDictationArea: () => void;
}

export const HomeHeader = (props: Props) => (
  <Container>
    <View>
      <TouchableOpacity onPress={() => {}} hitSlop={computeUniformHitSlop(20)}>
        <HeaderIcon name="bars" size={20} />
      </TouchableOpacity>
    </View>
    <HeaderTitle>DCM</HeaderTitle>
    <View>
      <TouchableOpacity
        onPress={props.pickDictation}
        onLongPress={props.showPickDictationArea}
        hitSlop={computeUniformHitSlop(20)}>
        <HeaderIcon name="play" size={20} />
        <CaretDownIcon name="caret-down" size={10} />
      </TouchableOpacity>
    </View>
  </Container>
);
