import React from 'react';
import {SafeAreaView} from 'react-native';
import {styled} from '../../lib/styled';
import {PageHeader} from '../../components/PageHeader';
import {ScrollView} from 'react-native';
import {availableDictationLanguages} from '../../environment/app';
import {FlagButton} from '../../components/FlagButton';
import {DifficultyPreference} from './Components/DifficultyPreference';

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

export const Preferences = () => {
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
                  isSelected={false}
                  key={language}
                  code={language}
                  size={32}
                />
              ))}
            </FlagContainer>
            <Label>Difficulté des dictées :</Label>
            <DifficultyPreference difficulty={1} label="débutant" />
            <DifficultyPreference selected difficulty={2} label="facile" />
            <DifficultyPreference
              selected
              difficulty={3}
              label="intermédiaire"
            />
            <DifficultyPreference difficulty={4} label="difficile" />
            <DifficultyPreference difficulty={5} label="expert" />
          </ContentContainer>
        </ScrollView>
      </PageContainer>
    </SafeAreaViewComponent>
  );
};
