import React from 'react';
import {SafeAreaView} from 'react-native';
import {styled} from '../../lib/styled';
import {PageHeader} from '../../components/PageHeader';
import {TextInputArea} from './components/TextInputArea';
import {AuthorPageFooter} from './components/AuthorPageFooter';
import {useAuthorPage} from './components/useAuthorPage';
import {WrittingChoicesArea} from './components/WrittingChoicesArea';
import {KeyboardAwareWrapper} from '../../components/KeyboardAwareWrapper';

const SafeAreaViewComponent = styled(SafeAreaView)`
  flex: 1;
  background-color: ${props => props.theme.colors.charcoalGray};
`;

const PageContainer = styled.View`
  background-color: ${props => props.theme.colors.white};
  flex: 1;
`;

export const AuthorPage = () => {
  const {
    showConfirmationMessage,
    text,
    updateText,
    isWrittingChoices,
    cancelNewDictation,
  } = useAuthorPage();
  return (
    <SafeAreaViewComponent>
      <KeyboardAwareWrapper>
        <PageContainer>
          <PageHeader
            title={
              isWrittingChoices
                ? "J'écris les choix multiples"
                : 'Je crée ma dictée'
            }
            onCancel={isWrittingChoices && cancelNewDictation}
          />
          {isWrittingChoices ? (
            <WrittingChoicesArea text={text} />
          ) : (
            <>
              <TextInputArea updateText={updateText} />
              <AuthorPageFooter
                isValidationDisabled={text === ''}
                onPress={showConfirmationMessage}
              />
            </>
          )}
        </PageContainer>
      </KeyboardAwareWrapper>
    </SafeAreaViewComponent>
  );
};
