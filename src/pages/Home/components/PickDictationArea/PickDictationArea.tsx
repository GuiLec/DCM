import React from 'react';
import {styled} from '../../../../lib/styled';
import Collapsible from 'react-native-collapsible';
import {DictationPick} from '../../../../components/DictationPick';
import {usePickDictationArea} from './usePickDictationArea';
import {ScrollView, ActivityIndicator} from 'react-native';

const Container = styled.View`
  padding-horizontal: ${props => props.theme.gridUnit * 4}px;
  padding-top: ${props => props.theme.gridUnit * 2}px;
  background-color: ${props => props.theme.colors.white};
  max-height: ${props => props.theme.gridUnit * 60};
  flex-direction: row;
`;

const NoPicksMessage = styled.Text`
  font-style: italic;
  text-align: center;
  font-size: ${props => props.theme.fontSizes.small};
`;

const NoPickContainer = styled.View`
  align-items: center;
`;

const ButtonTouchable = styled.TouchableOpacity`
  background-color: ${props => props.theme.colors.gray};
  padding-horizontal: ${props => props.theme.gridUnit * 4};
  padding-vertical: ${props => props.theme.gridUnit * 2};
  border-radius: ${props => props.theme.borderRadius.small};
  margin-vertical: ${props => props.theme.gridUnit * 2};
`;

const ButtonTitle = styled.Text`
  font-size: ${props => props.theme.fontSizes.medium};
`;

const LoaderContainer = styled.View`
  padding-top: ${props => props.theme.gridUnit * 2}px;
`;

interface Props {
  iscollapsed: boolean;
  pickDictation: (dictationId?: string) => void;
}

export const PickDictationArea = (props: Props) => {
  const {
    dictations,
    navigateToPreferences,
    areDictationsLoading,
  } = usePickDictationArea();
  if (areDictationsLoading)
    return (
      <LoaderContainer>
        <ActivityIndicator />
      </LoaderContainer>
    );

  const renderContent = () =>
    dictations.length > 0 ? (
      dictations.map(dictation => (
        <DictationPick
          key={dictation.id}
          dictationTitle={dictation.name}
          onPress={() => props.pickDictation(dictation.id)}
          difficulty={dictation.difficulty}
        />
      ))
    ) : (
      <NoPickContainer>
        <NoPicksMessage>
          Aucune dictée ne correspond aux préférences
        </NoPicksMessage>
        <ButtonTouchable onPress={navigateToPreferences}>
          <ButtonTitle>Modifier mes préférences</ButtonTitle>
        </ButtonTouchable>
      </NoPickContainer>
    );

  return (
    <Collapsible collapsed={props.iscollapsed}>
      <Container>
        <ScrollView>{renderContent()}</ScrollView>
      </Container>
    </Collapsible>
  );
};
