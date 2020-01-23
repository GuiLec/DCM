import React from 'react';
import {styled} from '../../../lib/styled';
import {DictationEvent as DictationEventType} from '../../../modules/user/interface';
import moment from 'moment';

const Container = styled.View`
  background-color: ${props => props.theme.colors.white};
  padding-horizontal: ${props => props.theme.gridUnit * 4}px;
  padding-vertical: ${props => props.theme.gridUnit * 2}px;
  margin: ${props => props.theme.gridUnit * 2}px;
  border-radius: ${props => props.theme.gridUnit};
  border-color: ${props => props.theme.colors.charcoalGray};
  border-width: 1px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const InfoContainer = styled.View``;

const DictationTitle = styled.Text`
  font-weight: bold;
  font-size: ${props => props.theme.fontSizes.large};
`;

const DateText = styled.Text`
  font-size: ${props => props.theme.fontSizes.tiny};
  color: ${props => props.theme.colors.gray};
`;

const MarkContainer = styled.View``;

const ScoreText = styled.Text`
  font-weight: bold;
  font-size: ${props => props.theme.fontSizes.big};
  color: ${props => props.theme.colors.gray};
`;

interface Props {
  dictationEvent: DictationEventType;
}

export const DictationEvent = (props: Props) => {
  return (
    <Container>
      <InfoContainer>
        <DictationTitle>{props.dictationEvent.dictationName}</DictationTitle>
        <DateText>
          {moment.unix(props.dictationEvent.date).format('DD-MM-YYYY HH:mm:ss')}
        </DateText>
      </InfoContainer>
      <MarkContainer>
        <ScoreText>{props.dictationEvent.score}</ScoreText>
      </MarkContainer>
    </Container>
  );
};
