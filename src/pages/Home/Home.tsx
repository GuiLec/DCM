import React from 'react';
import {SafeAreaView} from 'react-native';
import {HomeHeader} from './components/HomeHeader/HomeHeader';
import {DictationArea} from './components/DictationArea/DictationArea';
import {styled} from '../../lib/styled';
import {HomeFooter} from './components/HomeFooter';

const SafeAreaViewComponent = styled(SafeAreaView)`
  flex: 1;
  background-color: ${props => props.theme.colors.charcoalGray};
`;

const PageContainer = styled.View`
  background-color: ${props => props.theme.colors.white};
  flex: 1;
`;

export const Home = () => (
  <SafeAreaViewComponent>
    <PageContainer>
      <HomeHeader />
      <DictationArea />
      <HomeFooter />
    </PageContainer>
  </SafeAreaViewComponent>
);
