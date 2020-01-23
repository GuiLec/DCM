import React from 'react';
import {SafeAreaView} from 'react-native';
import {styled} from '../../lib/styled';
import {PageHeader} from '../../components/PageHeader';
import {useDictationsHistory} from './useDictationsHistory';
import {DictationEvent} from './components/DictationEvent';
import {ScrollView} from 'react-native';

const SafeAreaViewComponent = styled(SafeAreaView)`
  flex: 1;
  background-color: ${props => props.theme.colors.charcoalGray};
`;

const PageContainer = styled.View`
  background-color: ${props => props.theme.colors.gray};
  flex: 1;
`;

export const DictationsHistory = () => {
  const {dictationEvents} = useDictationsHistory();
  return (
    <SafeAreaViewComponent>
      <PageContainer>
        <PageHeader title={'Mon historique'} />
        <ScrollView>
          {dictationEvents.map(dictationEvent => (
            <DictationEvent
              key={dictationEvent.id}
              dictationEvent={dictationEvent}
            />
          ))}
        </ScrollView>
      </PageContainer>
    </SafeAreaViewComponent>
  );
};
