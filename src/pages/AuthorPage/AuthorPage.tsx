import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {styled} from '../../lib/styled';

const SafeAreaViewComponent = styled(SafeAreaView)`
  flex: 1;
  background-color: ${props => props.theme.colors.charcoalGray};
`;

const PageContainer = styled.View`
  background-color: ${props => props.theme.colors.white};
  flex: 1;
`;

export const AuthorPage = () => {
  return (
    <SafeAreaViewComponent>
      <PageContainer>
        <Text>Author page</Text>
      </PageContainer>
    </SafeAreaViewComponent>
  );
};
