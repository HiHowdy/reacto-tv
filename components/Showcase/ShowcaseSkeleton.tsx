import { Skeleton } from '@chakra-ui/react';
import Styled from '../../styles/styled/showcase';

interface IProps {
  title: string;
}

const ShowcaseSkeleton = ({ title }: IProps) => {
  return (
    <Styled.Wrapper>
      <Styled.Title>{title}</Styled.Title>
      <Styled.ShowcaseSkeleton>
        <Styled.ShowCaseItems>
          {[...Array(25)].map((_, i) => (
            <Skeleton key={String(i)} flexShrink="0" w="10rem" h="100%" />
          ))}
        </Styled.ShowCaseItems>
      </Styled.ShowcaseSkeleton>
    </Styled.Wrapper>
  );
};

export default ShowcaseSkeleton;
