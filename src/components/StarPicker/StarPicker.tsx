import React from 'react';
import {styled} from '../../lib/styled';
import {StarButton} from './StarButton';
import {useStarPicker} from './useStarPicker';

const Container = styled.View`
  flex-direction: row;
`;

export interface Props {
  onChange?: (difficulty: number | null) => void;
  small?: boolean;
  disabled?: boolean;
  difficulty: number | null;
}

export const StarPicker = (props: Props) => {
  const {starSelection, selectStar} = useStarPicker(props);
  return (
    <Container>
      {starSelection.map((star: boolean, index) => (
        <StarButton
          disabled={props.disabled}
          key={index}
          size={props.small ? 15 : 20}
          isSelected={star}
          onPress={selectStar(index)}
        />
      ))}
    </Container>
  );
};
