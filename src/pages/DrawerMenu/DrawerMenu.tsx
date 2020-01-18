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
`;

const UserSectionContainer = styled.View`
  align-items: center;
  padding: ${props => props.theme.gridUnit * 4}px;
  margin-bottom: ${props => props.theme.gridUnit * 8}px;
  flex-direction: row;
`;

const ToLoginContainer = styled.View`
  align-items: center;
  flex: 1;
`;

const ToLoginButton = styled.TouchableOpacity`
  border-width: 1px;
  padding-right: ${props => props.theme.gridUnit * 4}px;
  padding-vertical: ${props => props.theme.gridUnit * 2}px;
  border-color: ${props => props.theme.colors.gray};
  border-radius: ${props => props.theme.gridUnit};
  flex-direction: row;
`;

const ToLoginTitle = styled.Text`
  font-size: ${props => props.theme.fontSizes.big};
  color: ${props => props.theme.colors.white};
  font-weight: bold;
`;

export const DrawerMenu = () => {
  const {menutItems, user, goToEntrance} = useDrawerMenu();
  return (
    <SafeAreaViewComponent>
      <CrossIconContainer onPress={closeDrawer}>
        <CrossIcon name="times" size={25} />
      </CrossIconContainer>
      <UserSectionContainer>
        {!!user ? (
          <>
            <ItemIcon name="user" size={30} />
            <UserTitle>{user.email}</UserTitle>
          </>
        ) : (
          <ToLoginContainer>
            <ToLoginButton onPress={goToEntrance}>
              <ItemIcon name="user" size={20} />
              <ToLoginTitle>Je me connecte</ToLoginTitle>
            </ToLoginButton>
          </ToLoginContainer>
        )}
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
