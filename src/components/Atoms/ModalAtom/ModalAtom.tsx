import {
  memo,
  type PropsWithChildren,
  useCallback,
  useEffect,
  useState,
} from "react";
import ReactDOM from "react-dom";
import { ModalContainer } from "../ModalContainer/ModalContainer";

type Props = {
  setModalOpen: (value: boolean) => void;
  containerClassName?: string;
  isModalOpen: boolean;
};

const Modal = (props: PropsWithChildren<Props>) => {
  const [modalContainer, setModalContainer] = useState<HTMLDivElement | null>(
    null
  );

  useEffect(() => {
    const container = document.createElement("div");
    const modalRoot = document.getElementById("custom-modal");
    if (modalRoot) {
      modalRoot?.appendChild(container);
      setModalContainer(container);
    }

    return () => {
      if (modalRoot) {
        modalRoot?.removeChild(container);
      }
    };
  }, []);

  const onClose = useCallback(() => {
    if (props.isModalOpen) {
      props.setModalOpen(false);
    }
  }, [props]);

  return (
    modalContainer &&
    ReactDOM.createPortal(
      <>
        {props.isModalOpen ? (
          <div className='box-borderoverflow-auto fixed inset-0 z-[1000] mx-auto text-center'>
            <div
              className='pointer fixed h-full w-full bg-black opacity-50'
              onClick={onClose}
            />
            <ModalContainer className={props.containerClassName}>
              {props.children}
            </ModalContainer>
          </div>
        ) : null}
      </>,
      modalContainer
    )
  );
};

export default memo(Modal);
