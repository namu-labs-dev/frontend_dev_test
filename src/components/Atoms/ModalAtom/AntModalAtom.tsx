import React, { useState, useEffect, type PropsWithChildren } from "react";
import { Modal } from "antd";
import SVGAtom from "../SVGAtom/SVGAtom";

type Props = {
  isModalOpen: boolean;
  setModalOpen: (value: boolean) => void;
};

const AntModalAtom = (props: PropsWithChildren<Props>) => {
  const [isMounted, setIsMounted] = useState(false); // Track whether the component is mounted

  useEffect(() => {
    setIsMounted(true); // Set to true once the component is mounted (only on client-side)
  }, []);

  if (!isMounted) {
    return null; // Prevent rendering on the server side
  }

  return (
    <Modal
      centered
      open={props.isModalOpen}
      onCancel={() => props.setModalOpen(false)}
      footer={null} // Disable default OK and Cancel buttons
      width={400}
      style={{ height: "500px" }}
      closable={false}
    >
      <div className='cursor-pointer' onClick={() => props.setModalOpen(false)}>
        <SVGAtom
          iconName='closeCircle'
          className='absolute right-3 z-10'
          width={40}
          height={40}
        />
      </div>
      {props.children}
    </Modal>
  );
};

export default AntModalAtom;
