import React from 'react';
import {Text, Keyboard, TouchableOpacity} from 'react-native';
import {styled} from '../../lib/styled';
import {useLogin} from './useLogin';
import {KeyboardAwareWrapper} from '../../components/KeyboardAwareWrapper';
import {Button} from '../../components/Button';
import {CrossButton} from '../../components/CrossButton';

const Container = styled.TouchableOpacity`
  flex: 1;
  background-color: ${props => props.theme.colors.white};
  justify-content: center;
`;

const TextInputsContainer = styled.View`
  margin: ${props => props.theme.gridUnit * 2}px;
  padding: ${props => props.theme.gridUnit * 2}px;
  border-color: ${props => props.theme.colors.gray};
  border-width: 1;
  ${props => props.theme.shadows.banner}
  background-color: ${props => props.theme.colors.white};
`;

const CrossButtonContainer = styled.View`
  margin: ${props => props.theme.gridUnit * 2}px;
  padding: ${props => props.theme.gridUnit * 2}px;
  top: 0;
  right: 0;
  position: absolute;
`;

const TextInputComponent = styled.TextInput`
  border-color: ${props => props.theme.colors.gray};
  border-width: 1;
  margin-vertical: ${props => props.theme.gridUnit};
  padding: ${props => props.theme.gridUnit * 2}px;
`;

const Title = styled.Text`
  font-size: ${props => props.theme.fontSizes.big};
  color: ${props => props.theme.colors.white};
  font-weight: bold;
  text-align: center;
  margin: ${props => props.theme.gridUnit * 2}px;
`;

const SignUpText = styled.Text`
  font-size: ${props => props.theme.fontSizes.big};
  color: ${props => props.theme.colors.skyBlue};
  font-weight: bold;
  text-align: center;
`;

interface Props {
  toggleLogin: () => void;
  handleLogin: (
    email: string,
    password: string,
    setErrorMessage: (message: string) => void,
  ) => () => void;
}

export const Login = (props: Props) => {
  const {
    errorMessage,
    email,
    password,
    setEmail,
    setPassword,
    setErrorMessage,
  } = useLogin();
  return (
    <KeyboardAwareWrapper>
      <Container onPress={Keyboard.dismiss} activeOpacity={1}>
        <CrossButtonContainer>
          <CrossButton onPress={() => {}} />
        </CrossButtonContainer>
        <TextInputsContainer>
          <Title>Login</Title>
          <TextInputComponent
            autoCapitalize="none"
            placeholder="Email"
            onChangeText={email => setEmail(email)}
            value={email}
          />
          <TextInputComponent
            secureTextEntry
            autoCapitalize="none"
            placeholder="Password"
            onChangeText={password => setPassword(password)}
            value={password}
          />
          {!!errorMessage && <Text style={{color: 'red'}}>{errorMessage}</Text>}
          <Button
            onPress={props.handleLogin(email, password, setErrorMessage)}
            title="Login"></Button>
        </TextInputsContainer>
        <TouchableOpacity onPress={props.toggleLogin}>
          <SignUpText>Pas de compte ? Je m'inscris !</SignUpText>
        </TouchableOpacity>
      </Container>
    </KeyboardAwareWrapper>
  );
};
