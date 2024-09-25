import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FooterAtom } from '~/components/Atoms/FooterAtom/FooterAtom';
import { HeaderAtom } from '~/components/Atoms/HeaderAtom/HeaderAtom';
import DrawerAtom from '~/components/Atoms/DrawerAtom/DrawerAtom';
import Modal from '~/components/Atoms/Modal/Modal';
import { walletData } from '../../../../utils/wallet';

export default function TestPage1Container() {
    const router = useRouter();
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handlePricingClick = () => {
        console.log('Pricing clicked');
    };

    const handleMessageClick = () => {
        console.log('Message clicked');
    };

    const handleWalletClick = () => {
        setIsDrawerOpen(true);
    };

    const handleHistoryClick = () => {
        console.log('History clicked');
    };

    const handleSettingsClick = () => {
        setIsModalOpen(true);
    };

    const footerIcons = [
        {
            icon: '/svgs/pricing.svg',
            altText: 'Pricing',
            onClick: handlePricingClick,
        },
        {
            icon: '/svgs/message.svg',
            altText: 'Message',
            onClick: handleMessageClick,
        },
        {
            icon: '/svgs/wallet.svg',
            altText: 'Wallet',
            onClick: handleWalletClick,
        },
        {
            icon: '/svgs/history.svg',
            altText: 'History',
            onClick: handleHistoryClick,
        },
    ];

    return (
        <div className="flex flex-col min-h-screen bg-[#1F1F1F]">
            <div className="h-12">
                <HeaderAtom
                    title="Proxima OS"
                    backgroundColor="#1F1F1F"
                    titleColor="#FFF"
                    iconColor="#FFF"
                    onClickLeftIcon={() => router.push('/sample/home')}
                    onClickRightIcon={handleSettingsClick}
                />
            </div>

            <main className="flex-grow flex flex-col p-6">
                <h1 className="text-[28px] font-semibold text-[#FFF]">Messages</h1>
                <div className="flex flex-col mt-4">
                    <div className="flex items-center justify-center w-16 h-16 bg-[#2C2D30] rounded-full">
                        <img src="/svgs/proxima.svg" alt="Proxima" className="w-11 h-11" />
                    </div>
                    <p className="font-normal text-[#FFF] text-[16px] mt-2">Proxima</p>
                </div>
            </main>

            <div className="h-12">
                <FooterAtom
                    backgroundColor="#262626"
                    icons={footerIcons} title={''} />
            </div>

            <DrawerAtom isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen}>
                <div className="p-8 bg-[#2C2D30] h-full">
                    {walletData.map((item, index) => (
                        <div key={index} className="flex justify-between mb-4">
                            <div className='flex'>
                                <img src={item.image} alt={item.title} className="w-11 h-11" />

                                <div className="ml-4 text-left">
                                    <h3 className="font-bold text-base text-white">{item.title}</h3>
                                    <p className="text-sm text-[#BFBFBF]">{item.content}</p>
                                </div>
                            </div>

                            <span className="text-white text-sm whitespace-nowrap">
                                {item.time}
                            </span>
                        </div>
                    ))}
                </div>
            </DrawerAtom>

            <Modal isModalOpen={isModalOpen} setModalOpen={setIsModalOpen}>
                <div className="flex flex-col p-4 bg-[#2C2D30] max-w-[340px] mx-auto justify-center items-center text-center">
                    <h2 className="text-2xl font-bold mb-3 text-white w-1/2">Transaction processing</h2>
                    <img src="/svgs/transaction.svg" alt="Proxima" className="w-full h-full" />
                    <p className="text-white text-base font-normal mt-3">Uploading your transaction to the node. please wait for a moment...</p>
                    <p className='text-white text-base font-normal'>This may take up to 2 minutes.</p>
                </div>
            </Modal>
        </div>
    );
}