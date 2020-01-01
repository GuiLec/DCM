import React from 'react';
import {styled} from '../../../lib/styled';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Container = styled.TouchableOpacity`
  padding: ${props => props.theme.gridUnit * 4}px;
  border-bottom-width: 1px;
  border-color: ${props => props.theme.colors.gray};
  flex-direction: row;
  justify-content: space-between;
`;

const TitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
  flex: 1;
`;

const ItemIcon = styled(Icon)`
  color: ${props => props.theme.colors.white};
  margin-right: ${props => props.theme.gridUnit}px;
`;

const NavigateIcon = styled(Icon)`
  color: ${props => props.theme.colors.lightGray};
`;

const Title = styled.Text`
  font-size: ${props => props.theme.fontSizes.medium};
  color: ${props => props.theme.colors.white};
  font-weight: bold;
  flex: 1;
`;

interface Props {
  onPress?: () => void;
  title: string;
  itemLogoName?: string;
  hasRightArrow?: boolean;
}

export const DrawerMenuItem = (props: Props) => {
  return (
    <Container onPress={props.onPress}>
      <TitleContainer>
        {props.itemLogoName && <ItemIcon name={props.itemLogoName} size={16} />}
        <Title numberOfLines={1}>{props.title}</Title>
      </TitleContainer>
      {props.hasRightArrow && <NavigateIcon name="chevron-right" size={20} />}
    </Container>
  );
};
