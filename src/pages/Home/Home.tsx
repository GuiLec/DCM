import React from 'react';
import {SafeAreaView} from 'react-native';
import {HomeHeader} from './components/HomeHeader/HomeHeader';
import {DictationArea} from './components/DictationArea/DictationArea';
import {styled} from '../../lib/styled';

const SafeAreaViewComponent = styled(SafeAreaView)`
  flex: 1;
`;

export const Home = () => (
  <SafeAreaViewComponent>
    <HomeHeader />
    <DictationArea />
  </SafeAreaViewComponent>
);
