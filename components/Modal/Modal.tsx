import Styled from '../../styles/styled/modal';
import { SmallCloseIcon } from '@chakra-ui/icons';
import { Flex } from '@chakra-ui/react';
import { useEffect } from 'react';
import Portal from '../Portal/Portal';

interface IProps {
  title?: string;
  children?: any;
  wrapperId?: string;
  isOpen: boolean;
  closeOnBlur?: boolean;
  closeButton?: boolean;
  handleClose: () => void;
}

const Modal = ({
  title,
  children,
  wrapperId = 'portal',
  isOpen,
  closeOnBlur = true,
  closeButton = false,
  handleClose,
}: IProps) => {
  const onHandleClose = () => closeOnBlur && handleClose();

  useEffect(() => {
    if (!isOpen) return;

    const handleScroll = (e: any) => e.preventDefault();

    document.addEventListener('wheel', handleScroll, { passive: false });
    document.addEventListener('touchmove', handleScroll, { passive: false });

    return () => {
      document.removeEventListener('wheel', handleScroll);
      document.removeEventListener('touchmove', handleScroll);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <Portal wrapperId={wrapperId}>
      <Styled.Wrapper>
        <Styled.Overlay onClick={onHandleClose} />
        <Styled.Content>
          <Flex
            justifyContent={title ? 'space-between' : 'end'}
            gap={5}
            w="100%"
            direction="column"
          >
            {title && <Styled.Title>{title}</Styled.Title>}
            {closeButton && (
              <Styled.CloseButton>
                <SmallCloseIcon />
              </Styled.CloseButton>
            )}
            <div>{children}</div>
          </Flex>
        </Styled.Content>
      </Styled.Wrapper>
    </Portal>
  );
};

export default Modal;
