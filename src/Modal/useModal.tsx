import { useState } from "react";

interface UseModalReturn {
  isModalOpen: boolean;
  toggleModal: () => void;
}

const useModal = (): UseModalReturn => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return {
    isModalOpen,
    toggleModal,
  };
};

export default useModal;
