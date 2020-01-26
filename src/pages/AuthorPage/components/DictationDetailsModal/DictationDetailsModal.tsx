import React from 'react';
import {View} from 'react-native';
import {styled} from '../../../../lib/styled';
import {ValidationButton} from '../../../../components/ValidationButton';
import {CrossButton} from '../../../../components/CrossButton';
import {availableDictationLanguages} from '../../../../environment/app';
import {FlagButton} from '../../../../components/FlagButton';
import {StarPicker} from '../../../../components/StarPicker';

const Overlay = styled.View`
  background-color: rgba(23, 36, 42, 0.8);
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  align-content: center;
  justify-content: center;
  padding: ${props => props.theme.gridUnit * 6}px;
`;

const Container = styled.View`
  background-color: ${props => props.theme.colors.gray};
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-color: ${props => props.theme.colors.black};
  border-width: 1px;
`;
const CrossIconContainer = styled.View`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
`;

const ContentContainer = styled.View`
  flex: 1;
  padding-horizontal: ${props => props.theme.gridUnit * 2}px;
  padding-bottom: ${props => props.theme.gridUnit * 4}px;
  padding-top: ${props => props.theme.gridUnit * 8}px;
`;

const TitleInput = styled.TextInput`
  border-color: ${props => props.theme.colors.black};
  background-color: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.darkGray};
  border-width: 1px;
  padding: ${props => props.theme.gridUnit * 2}px;
`;

const Label = styled.Text`
  color: ${props => props.theme.colors.darkGray};
  margin: ${props => props.theme.gridUnit * 2}px;
  font-weight: bold;
  font-size: ${props => props.theme.fontSizes.big};
`;

const FlagsContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const StarPickerContainer = styled.View`
  justify-content: center;
  flex-direction: row;
`;

const ValidationButtonContainer = styled.View`
  margin-top: ${props => props.theme.gridUnit * 6};
  justify-content: center;
  align-content: center;
  flex-direction: row;
`;

interface Props {
  saveDictation: (title: string) => void;
  disabled?: boolean;
  toggleModal: () => void;
  selectedLanguage: string | null;
  selectLanguage: (langugae: string | null) => () => void;
  difficulty: number | null;
  setDifficulty: (difficulty: number | null) => void;
}

export const DictationDetailsModal = (props: Props) => (
  <Overlay>
    <Container>
      <CrossIconContainer>
        <CrossButton onPress={props.toggleModal} />
      </CrossIconContainer>
      <ContentContainer>
        <View>
          <Label>Le titre de ma dictée :</Label>
          <TitleInput
            autoCapitalize={'sentences'}
            placeholder="J'écris le titre de ma dictée"
          />
        </View>
        <View>
          <Label>Quelle est la langue de ma dictée ?</Label>
          <FlagsContainer>
            {availableDictationLanguages.map(language => (
              <FlagButton
                isSelected={props.selectedLanguage === language}
                onPress={props.selectLanguage(language)}
                key={language}
                code={language}
                size={32}
              />
            ))}
          </FlagsContainer>
        </View>
        <View>
          <Label>J'estime la difficultée de ma dictée :</Label>
          <StarPickerContainer>
            <StarPicker
              onChange={props.setDifficulty}
              difficulty={props.difficulty}
            />
          </StarPickerContainer>
        </View>
        <ValidationButtonContainer>
          <ValidationButton
            title={'Je crée ma dictée !!!'}
            onPress={() => props.saveDictation('Mon Titre')}
            disabled={props.disabled}
          />
        </ValidationButtonContainer>
      </ContentContainer>
    </Container>
  </Overlay>
);
