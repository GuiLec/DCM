import React from 'react';
import {SafeAreaView} from 'react-native';
import {styled} from '../../lib/styled';
import {SignUp} from './SignUp';
import {Login} from './Login';
import {useEntrancePage} from './useEntrancePage';

const SafeAreaViewComponent = styled(SafeAreaView)`
  flex: 1;
`;

export const EntrancePage = () => {
  const {isLoginDisplayed, toggleLogin, handleSignUp} = useEntrancePage();
  return (
    <SafeAreaViewComponent>
      {isLoginDisplayed ? (
        <Login toggleLogin={toggleLogin} />
      ) : (
        <SignUp toggleLogin={toggleLogin} handleSignUp={handleSignUp} />
      )}
    </SafeAreaViewComponent>
  );
};
