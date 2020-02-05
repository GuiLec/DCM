import React from 'react';
import {SafeAreaView} from 'react-native';
import {styled} from '../../lib/styled';
import {PageHeader} from '../../components/PageHeader';
import {ScrollView} from 'react-native';
import {availableDictationLanguages} from '../../environment/app';
import {FlagButton} from '../../components/FlagButton';
import {DifficultyPreference} from './Components/DifficultyPreference';
import {usePreferences} from './usePreferences';
import {ValidationButton} from '../../components/ValidationButton';

const SafeAreaViewComponent = styled(SafeAreaView)`
  flex: 1;
  background-color: ${props => props.theme.colors.charcoalGray};
`;

const PageContainer = styled.View`
  background-color: ${props => props.theme.colors.gray};
  flex: 1;
`;

const ContentContainer = styled.View`
  flex: 1;
  padding: ${props => props.theme.gridUnit * 6}px;
`;

const FlagContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-bottom: ${props => props.theme.gridUnit * 6}px;
`;

const Label = styled.Text`
  color: ${props => props.theme.colors.darkGray};
  margin: ${props => props.theme.gridUnit * 2}px;
  font-weight: bold;
  font-size: ${props => props.theme.fontSizes.big};
`;

const ValidationButtonContainer = styled.View`
  align-items: center;
  padding-top: ${props => props.theme.gridUnit * 10}px;
`;

export const Preferences = () => {
  const {
    selectedLanguage,
    selectLanguage,
    selectedDifficulties,
    toggleDifficulty,
  } = usePreferences();
  return (
    <SafeAreaViewComponent>
      <PageContainer>
        <PageHeader title={'Mes préférences'} />
        <ScrollView>
          <ContentContainer>
            <Label>Je sélectionne la langue de mes dictées :</Label>
            <FlagContainer>
              {availableDictationLanguages.map(language => (
                <FlagButton
                  isSelected={selectedLanguage === language}
                  onPress={selectLanguage(language)}
                  key={language}
                  code={language}
                  size={32}
                />
              ))}
            </FlagContainer>
            <Label>Difficulté des dictées :</Label>
            <DifficultyPreference
              selected={selectedDifficulties.includes(1)}
              difficulty={1}
              onPress={toggleDifficulty(1)}
              label="débutant"
            />
            <DifficultyPreference
              selected={selectedDifficulties.includes(2)}
              onPress={toggleDifficulty(2)}
              difficulty={2}
              label="facile"
            />
            <DifficultyPreference
              selected={selectedDifficulties.includes(3)}
              onPress={toggleDifficulty(3)}
              difficulty={3}
              label="intermédiaire"
            />
            <DifficultyPreference
              selected={selectedDifficulties.includes(4)}
              onPress={toggleDifficulty(4)}
              difficulty={4}
              label="difficile"
            />
            <DifficultyPreference
              selected={selectedDifficulties.includes(5)}
              onPress={toggleDifficulty(5)}
              difficulty={5}
              label="expert"
            />
            <ValidationButtonContainer>
              <ValidationButton title="Je valide mes préférences" />
            </ValidationButtonContainer>
          </ContentContainer>
        </ScrollView>
      </PageContainer>
    </SafeAreaViewComponent>
  );
};
