import React from 'react';
import {styled} from '../../lib/styled';
import {StarButton} from './StarButton';
import {useStarPicker} from './useStarPicker';

const Container = styled.View`
  flex-direction: row;
`;

interface Props {}

export const StarPicker = (props: Props) => {
  const {starSelection} = useStarPicker();
  return (
    <Container>
      {starSelection.map((star: boolean, index) => (
        <StarButton key={index} size={20} isSelected={star} />
      ))}
    </Container>
  );
};
