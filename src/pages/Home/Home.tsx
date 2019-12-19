import React from 'react';
import {SafeAreaView} from 'react-native';
import {HomeHeader} from './components/HomeHeader/HomeHeader';
import {DictationArea} from './components/DictationArea';
import {styled} from '../../lib/styled';
import {HomeFooter} from './components/HomeFooter';
import {useHome} from './useHome';
import {AnswersArea} from './components/AnswersArea';

const SafeAreaViewComponent = styled(SafeAreaView)`
  flex: 1;
  background-color: ${props => props.theme.colors.charcoalGray};
`;

const PageContainer = styled.View`
  background-color: ${props => props.theme.colors.white};
  flex: 1;
`;

export const Home = () => {
  const {
    activeSlicedDictation,
    isAnswersAreaVisible,
    selectChoiceInput,
    selectedChoiceInputID,
    selectedChoiceInputChoices,
  } = useHome();
  return (
    <SafeAreaViewComponent>
      <PageContainer>
        <HomeHeader />
        <DictationArea
          slicedDictation={activeSlicedDictation}
          selectChoiceInput={selectChoiceInput}
          selectedChoiceInputID={selectedChoiceInputID}
        />
        <AnswersArea
          iscollapsed={!isAnswersAreaVisible}
          selectedChoiceInputID={selectedChoiceInputID}
          selectedChoiceInputChoices={selectedChoiceInputChoices}
        />
        <HomeFooter />
      </PageContainer>
    </SafeAreaViewComponent>
  );
};
