"use client";
import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import DrawerAtom from "~/components/Atoms/DrawerAtom/DrawerAtom";
import { PhilipTransactionAtom } from "~/components/Atoms/EmptyContentAtom/PhilipTransactionAtom";
import { PhilipFooterAtom } from "~/components/Atoms/FooterAtom/PhilipFooterAtom";
import { PhilipHeaderAtom } from "~/components/Atoms/HeaderAtom/PhilipHeaderAtom";
import Modal from "~/components/Atoms/Modal/Modal";

export const PhilipContainer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <Layout style={{ height: "100%" }}>
      <Header style={{ padding: 0, height: 50 }}>
        <PhilipHeaderAtom
          title='Proxima 0S'
          onClickLeftIcon={() => alert("Left icon clicked.")}
          onClickRightIcon={() => alert("Settings icon clicked.")}
        />
      </Header>
      <Content
        style={{
          overflow: "auto",
          paddingLeft: "25px",
          paddingRight: "25px",
          paddingTop: "16px",
          paddingBottom: "16px",
          gap: "20px",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#1F1F1F",
        }}
      >
        <div className='flex flex-col gap-y-[19px] text-white'>
          <h3 className='leading-[33.89px text-[28px] font-semibold'>
            Messages
          </h3>
          <div className='flex flex-row'>
            <div className='flex w-[20%] flex-col gap-y-[9px]'>
              <div className='flex aspect-[1/1] w-full items-center justify-center rounded-full bg-[#2C2D30]'>
                <div className='relative aspect-[1/1] w-[70.77%]'>
                  <Image
                    src={"/svgs/star.svg"}
                    fill
                    className='h-full w-full'
                    alt='Proxima'
                  />
                </div>
              </div>
              <p className='text-center text-[16px] leading-[19.36px]'>
                Proxima
              </p>
            </div>
          </div>
        </div>
        <DrawerAtom
          isDrawerOpen={isDrawerOpen}
          setIsDrawerOpen={setIsDrawerOpen}
          containerClassName='!h-[71.2%] !bg-[#2C2D30] p-5'
        >
          <PhilipTransactionAtom
            logo='/eth.png'
            token='ETH'
            message='User: namulabs is fantasic company'
            time='8:43 PM'
            initial='N'
            onClick={() => setModalOpen(true)}
          />
          <PhilipTransactionAtom
            logo='/nvir.png'
            token='Nvir'
            message='User: namulabs is fantasic company'
            time='8:42 PM'
            onClick={() => setModalOpen(true)}
          />
        </DrawerAtom>
        <Modal
          containerClassName='p-5 !bg-[#2C2D30] rounded-[14px] flex flex-col gap-y-3 text-white max-w-[340px]'
          isModalOpen={modalOpen}
          setModalOpen={setModalOpen}
        >
          <h3 className='text-center text-[24px] leading-[31px]'>
            Transaction
            <br /> processing
          </h3>
          <div className='relative mx-auto h-[154px] w-[267px]'>
            <Image
              src='/blocks.png'
              fill
              className='h-full w-full object-cover'
              alt='Blockchain'
            />
          </div>
          <p className='text- text-center'>
            Uploading your transaction to the node. please wait for a moment...
            <br /> This may take up to 2 minutes.
          </p>
        </Modal>
      </Content>
      <Footer style={{ padding: 0, minHeight: 50, zIndex: 9999 }}>
        <PhilipFooterAtom
          drawerProps={{
            isDrawerOpen,
            setIsDrawerOpen,
          }}
        />
      </Footer>
    </Layout>
  );
};
