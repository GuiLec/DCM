import React, {ReactNode} from 'react';
import {KeyboardAvoidingView, NativeModules, Platform} from 'react-native';
//import {Header} from 'react-navigation-stack';

import {styled} from '../lib/styled';

interface Props {
  children: ReactNode | ReactNode[];
}

const StyledKeyboardAvoidingView = styled(KeyboardAvoidingView)`
  flex: 1;
`;

let statusBarHeight = 0;

/**
 * StatusBarManager.getHeight is not a function on android
 */
if (Platform.OS === 'ios') {
  NativeModules.StatusBarManager.getHeight(({height}: {height: number}) => {
    statusBarHeight = height;
  });
}

/**
 * Keyboard avoiding view is not aware of react navigation header and status bar.
 * We have to put an offset equal to the header height and the status bar height
 */
export const KeyboardAwareWrapper = (props: Props) =>
  Platform.OS === 'ios' ? (
    <StyledKeyboardAvoidingView
      behavior="padding"
      keyboardVerticalOffset={statusBarHeight}>
      {props.children}
    </StyledKeyboardAvoidingView>
  ) : (
    <>{props.children}</>
  );
