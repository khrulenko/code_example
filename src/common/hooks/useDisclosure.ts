import { useState } from 'react';

const useDisclosure = () => {
  const [isOpen, isOpenSet] = useState<boolean>(false);

  const onClose = () => isOpenSet(false);
  const onOpen = () => isOpenSet(true);
  const onToggle = () => isOpenSet((prev) => !prev);

  return { isOpen, onClose, onOpen, onToggle };
};

export default useDisclosure;
