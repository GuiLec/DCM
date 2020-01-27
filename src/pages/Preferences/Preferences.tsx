import React from 'react';
import {SafeAreaView} from 'react-native';
import {styled} from '../../lib/styled';
import {PageHeader} from '../../components/PageHeader';

import {ScrollView} from 'react-native';

const SafeAreaViewComponent = styled(SafeAreaView)`
  flex: 1;
  background-color: ${props => props.theme.colors.charcoalGray};
`;

const PageContainer = styled.View`
  background-color: ${props => props.theme.colors.gray};
  flex: 1;
`;

export const Preferences = () => {
  return (
    <SafeAreaViewComponent>
      <PageContainer>
        <PageHeader title={'Mes préférences'} />
        <ScrollView></ScrollView>
      </PageContainer>
    </SafeAreaViewComponent>
  );
};
