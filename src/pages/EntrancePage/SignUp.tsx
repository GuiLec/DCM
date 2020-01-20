import React from 'react';
import {Text, Keyboard, TouchableOpacity} from 'react-native';
import {styled} from '../../lib/styled';
import {useSignUp} from './useSignUp';
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

const CrossButtonContainer = styled.View`
  margin: ${props => props.theme.gridUnit * 2}px;
  padding: ${props => props.theme.gridUnit * 2}px;
  top: 0;
  right: 0;
  position: absolute;
`;

const LoginText = styled.Text`
  font-size: ${props => props.theme.fontSizes.big};
  color: ${props => props.theme.colors.skyBlue};
  font-weight: bold;
  text-align: center;
`;

interface Props {
  toggleLogin: () => void;
  handleSignUp: (
    email: string,
    password: string,
    name: string,
    setErrorMessage: (message: string) => void,
  ) => () => void;
  enterWithoutLogin: () => void;
}

export const SignUp = (props: Props) => {
  const {
    errorMessage,
    email,
    password,
    name,
    setEmail,
    setPassword,
    setErrorMessage,
    setName,
  } = useSignUp();
  return (
    <KeyboardAwareWrapper>
      <Container onPress={Keyboard.dismiss} activeOpacity={1}>
        <CrossButtonContainer>
          <CrossButton onPress={props.enterWithoutLogin} />
        </CrossButtonContainer>
        <TextInputsContainer>
          <Title>Login</Title>
          <TextInputComponent
            autoCapitalize="sentences"
            placeholder="Pseudo"
            onChangeText={name => setName(name)}
            value={name}
          />
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
            onPress={props.handleSignUp(email, password, setErrorMessage)}
            title="Je m'inscris"></Button>
        </TextInputsContainer>
        <TouchableOpacity onPress={props.toggleLogin}>
          <LoginText>J'ai un compte ? Je me login !</LoginText>
        </TouchableOpacity>
      </Container>
    </KeyboardAwareWrapper>
  );
};
