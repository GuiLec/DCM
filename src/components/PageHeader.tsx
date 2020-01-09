import React from 'react';
import {styled} from '../lib/styled';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {TouchableOpacity, View} from 'react-native';
import {computeUniformHitSlop} from '../lib/utils';
import {openDrawer} from '../navigation/actions';

const Container = styled.View`
  background-color: ${props => props.theme.colors.charcoalGray};
  padding: ${props => props.theme.gridUnit * 4}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const HeaderIcon = styled(Icon)`
  color: ${props => props.theme.colors.lightGray};
`;

const HeaderTitle = styled.Text`
  font-weight: bold;
  font-size: ${props => props.theme.fontSizes.big};
  color: ${props => props.theme.colors.white};
`;

const CancelText = styled.Text`
  font-weight: bold;
  font-size: ${props => props.theme.fontSizes.medium};
  color: ${props => props.theme.colors.white};
`;

interface Props {
  title: string;
  onCancel?: () => void;
}

export const PageHeader = (props: Props) => (
  <Container>
    <View>
      <TouchableOpacity
        onPress={openDrawer}
        hitSlop={computeUniformHitSlop(20)}>
        <HeaderIcon name="bars" size={20} />
      </TouchableOpacity>
    </View>
    <HeaderTitle>{props.title}</HeaderTitle>
    <View>
      {props.onCancel && (
        <TouchableOpacity
          onPress={props.onCancel}
          hitSlop={computeUniformHitSlop(20)}>
          <CancelText>Annuler</CancelText>
        </TouchableOpacity>
      )}
    </View>
  </Container>
);
