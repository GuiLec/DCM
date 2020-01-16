import React from 'react';
import {View, TextInput, Text, Button, StyleSheet} from 'react-native';
import {styled} from '../../lib/styled';
import {useLogin} from './useLogin';

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
}

export const Login = (props: Props) => {
  const {
    errorMessage,
    email,
    password,
    setEmail,
    setPassword,
    handleLogin,
  } = useLogin();
  return (
    <Container>
      <View style={styles.container}>
        <Text>Login</Text>
        {!!errorMessage && <Text style={{color: 'red'}}>{errorMessage}</Text>}
        <TextInput
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Email"
          onChangeText={email => setEmail(email)}
          value={email}
        />
        <TextInput
          secureTextEntry
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Password"
          onChangeText={password => setPassword(password)}
          value={password}
        />
        <Button title="Login" onPress={handleLogin} />
        <Button
          title="Don't have an account? Sign Up"
          onPress={props.toggleLogin}
        />
      </View>
    </Container>
  );
};
