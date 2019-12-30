import React from 'react';
import {SafeAreaView} from 'react-native';
import {styled} from '../../lib/styled';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useDrawerMenu} from './useDrawerMenu';
import {closeDrawer} from '../../navigation/actions';

const SafeAreaViewComponent = styled(SafeAreaView)`
  flex: 1;
  background-color: ${props => props.theme.colors.charcoalGray};
`;

const CrossIcon = styled(Icon)`
  color: ${props => props.theme.colors.lightGray};
`;

const CrossIconContainer = styled.TouchableOpacity`
  margin: ${props => props.theme.gridUnit * 4}px;
`;

export const DrawerMenu = () => {
  const {} = useDrawerMenu();
  return (
    <SafeAreaViewComponent>
      <CrossIconContainer onPress={closeDrawer}>
        <CrossIcon name="times" size={25} />
      </CrossIconContainer>
    </SafeAreaViewComponent>
  );
};
