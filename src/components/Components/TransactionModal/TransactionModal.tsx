import React from "react";
import Modal from "~/components/Atoms/Modal/Modal";
import { Typography } from "antd";
import Image from "next/image";
import ProcessingImage from "public/images/processing.png";

const { Title } = Typography;

type Props = {
  modalProps: React.ComponentProps<typeof Modal>;
  title: string;
  description: string;
};

export const TransactionModal = (props: Props) => {
  console.log("Modal state:", props.modalProps.isModalOpen);

  return (
    <Modal
      {...props.modalProps}
      containerClassName='!bg-[#2C2D30] border-transparent'
    >
      <div className='h-[358px] w-[340px] rounded-xl border-transparent bg-[#2C2D30] p-5'>
        <Title
          style={{
            lineHeight: "31px",
            color: "white",
            fontSize: "24px",
            fontWeight: "700",
            width: "250px",
            borderColor: "white",
            margin: "0 auto",
          }}
        >
          {props.title}
        </Title>

        <Image
          src={ProcessingImage}
          alt='processing'
          width={267}
          height={250}
          className='mx-auto my-3'
        />

        <p className='text-white'>{props.description}</p>
      </div>
    </Modal>
  );
};
