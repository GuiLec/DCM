import React from 'react';
import {SafeAreaView} from 'react-native';
import {styled} from '../../lib/styled';
import {PageHeader} from '../../components/PageHeader';
import {TextInputArea} from './components/TextInputArea';
import {AuthorPageFooter} from './components/AuthorPageFooter';
import {useAuthorPage} from './components/useAuthorPage';

const SafeAreaViewComponent = styled(SafeAreaView)`
  flex: 1;
  background-color: ${props => props.theme.colors.charcoalGray};
`;

const PageContainer = styled.View`
  background-color: ${props => props.theme.colors.white};
  flex: 1;
`;

export const AuthorPage = () => {
  const {showConfirmationMessage, text, updateText} = useAuthorPage();
  return (
    <SafeAreaViewComponent>
      <PageContainer>
        <PageHeader title="Je crée ma dictée" />
        <TextInputArea updateText={updateText} />
        <AuthorPageFooter
          isValidationDisabled={text === ''}
          onPress={showConfirmationMessage}
        />
      </PageContainer>
    </SafeAreaViewComponent>
  );
};
