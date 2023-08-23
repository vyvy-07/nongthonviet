import { useState } from "react";
import { usePage } from "../../hooks/useContext";

const useHeader = () => {
  const [isModal, setIsModal] = useState(false);

  const { listCategory, setListCategory } = usePage();
  const onChangeModal = () => setIsModal(!isModal);
  //open modal
  const headerMidle = {
    listCategory,
    setListCategory,
    onChangeModal,
    setIsModal,
    isModal,
  };

  return { headerMidle, listCategory };
};

export default useHeader;
