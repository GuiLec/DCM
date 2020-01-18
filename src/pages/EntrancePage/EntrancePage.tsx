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
  const {
    isLoginDisplayed,
    toggleLogin,
    handleSignUp,
    handleLogin,
    enterWithoutLogin,
  } = useEntrancePage();
  return (
    <SafeAreaViewComponent>
      {isLoginDisplayed ? (
        <Login
          handleLogin={handleLogin}
          toggleLogin={toggleLogin}
          enterWithoutLogin={enterWithoutLogin}
        />
      ) : (
        <SignUp
          toggleLogin={toggleLogin}
          handleSignUp={handleSignUp}
          enterWithoutLogin={enterWithoutLogin}
        />
      )}
    </SafeAreaViewComponent>
  );
};
