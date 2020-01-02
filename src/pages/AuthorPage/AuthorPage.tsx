import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {styled} from '../../lib/styled';
import {PageHeader} from '../../components/PageHeader';
import {TextInputArea} from './components/TextInputArea';

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
        <PageHeader title="Je crée ma dictée" />
        <TextInputArea />
      </PageContainer>
    </SafeAreaViewComponent>
  );
};
