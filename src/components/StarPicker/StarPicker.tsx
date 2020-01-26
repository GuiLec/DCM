import React from 'react';
import {styled} from '../../lib/styled';
import {StarButton} from './StarButton';
import {useStarPicker} from './useStarPicker';

const Container = styled.View`
  flex-direction: row;
`;

interface Props {
  onChange: (difficulty: number | null) => void;
}

export const StarPicker = (props: Props) => {
  const {starSelection, selectStar} = useStarPicker(props.onChange);
  return (
    <Container>
      {starSelection.map((star: boolean, index) => (
        <StarButton
          key={index}
          size={20}
          isSelected={star}
          onPress={selectStar(index)}
        />
      ))}
    </Container>
  );
};
