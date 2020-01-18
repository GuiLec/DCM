import React from 'react';
import {SafeAreaView} from 'react-native';
import {styled} from '../../lib/styled';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useDrawerMenu} from './useDrawerMenu';
import {closeDrawer} from '../../navigation/actions';
import {DrawerMenuItem} from './components/DrawerMenuItem';

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

const ItemIcon = styled(Icon)`
  color: ${props => props.theme.colors.white};
  margin-right: ${props => props.theme.gridUnit * 3}px;
  margin-left: ${props => props.theme.gridUnit * 5}px;
`;

const UserTitle = styled.Text`
  font-size: ${props => props.theme.fontSizes.big};
  color: ${props => props.theme.colors.white};
  font-weight: bold;
  flex: 1;
  margin-right: ${props => props.theme.gridUnit}px;
`;

const UserSectionContainer = styled.View`
  align-items: center;
  padding: ${props => props.theme.gridUnit * 4}px;
  margin-bottom: ${props => props.theme.gridUnit * 8}px;
  flex-direction: row;
  justify-content: space-between;
`;

export const DrawerMenu = () => {
  const {menutItems} = useDrawerMenu();
  return (
    <SafeAreaViewComponent>
      <CrossIconContainer onPress={closeDrawer}>
        <CrossIcon name="times" size={25} />
      </CrossIconContainer>
      <UserSectionContainer>
        <ItemIcon name="user" size={30} />
        <UserTitle>Guilec</UserTitle>
      </UserSectionContainer>
      {menutItems.map(item => (
        <DrawerMenuItem
          key={item.title}
          title={item.title}
          onPress={item.onPress}
          hasRightArrow={item.hasRightArrow}
          itemLogoName={item.itemLogoName}
        />
      ))}
    </SafeAreaViewComponent>
  );
};
