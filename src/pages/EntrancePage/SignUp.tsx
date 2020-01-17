import React from 'react';
import {View, TextInput, Text, Button, StyleSheet} from 'react-native';
import {styled} from '../../lib/styled';
import {useSignUp} from './useSignUp';

const Container = styled.View`
  flex: 1;
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8,
  },
});

interface Props {
  toggleLogin: () => void;
  handleSignUp: (
    email: string,
    password: string,
    setErrorMessage: (message: string) => void,
  ) => () => void;
}

export const SignUp = (props: Props) => {
  const {
    errorMessage,
    email,
    password,
    setEmail,
    setPassword,
    setErrorMessage,
  } = useSignUp();
  return (
    <Container>
      <View style={styles.container}>
        <Text>Sign Up</Text>
        {!!errorMessage && <Text style={{color: 'red'}}>{errorMessage}</Text>}
        <TextInput
          placeholder="Email"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={email => setEmail(email)}
          value={email}
        />
        <TextInput
          secureTextEntry
          placeholder="Password"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={password => setPassword(password)}
          value={password}
        />
        <Button
          title="Sign Up"
          onPress={props.handleSignUp(email, password, setErrorMessage)}
        />
        <Button
          title="Already have an account? Login"
          onPress={props.toggleLogin}
        />
      </View>
    </Container>
  );
};
