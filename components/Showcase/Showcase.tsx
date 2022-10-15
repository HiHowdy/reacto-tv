import { useMediaQuery } from '@chakra-ui/react';
import { useRef } from 'react';
import { IResult } from '../../types/api';
import Styled from '../../styles/styled/showcase';

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import useStore from '../../store';
import ShowcaseSkeleton from './ShowcaseSkeleton';

interface IProps {
  results?: IResult[] | undefined;
  title: string;
}

const Showcase = ({ results, title }: IProps) => {
  const { setSelected } = useStore((state) => state);
  const showcaseRef = useRef<HTMLDivElement>(null);
  const [isMobileSize] = useMediaQuery('(max-width: 500px)');

  const scroll = (direction: 'left' | 'right') => {
    const amount = isMobileSize ? 184 : 880;

    if (showcaseRef.current) {
      const scrollAmount = direction === 'left' ? -amount : amount;
      showcaseRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const handleMouseClick = (type: 'movie' | 'tv' | 'people', result: IResult) =>
    setSelected(result.id, type);

  return results !== undefined ? (
    <Styled.Wrapper>
      <Styled.Title>{title}</Styled.Title>
      <Styled.Showcase>
        <Styled.Arrow onClick={() => scroll('left')}>
          <FaChevronLeft />
        </Styled.Arrow>
        <Styled.ShowcaseItems ref={showcaseRef}>
          {results.map((result) => (
            <Styled.ShowcaseItem
              key={result.id}
              onClick={() => handleMouseClick(result.type, result)}
            >
              <Styled.ShowcaseItemImg
                src={`https://image.tmdb.org/t/p/w500${result.poster_path}`}
                alt={result.title}
              />
            </Styled.ShowcaseItem>
          ))}
        </Styled.ShowcaseItems>
        <Styled.Arrow onClick={() => scroll('right')}>
          <FaChevronRight />
        </Styled.Arrow>
      </Styled.Showcase>
    </Styled.Wrapper>
  ) : (
    <ShowcaseSkeleton title={title} />
  );
};

export default Showcase;
