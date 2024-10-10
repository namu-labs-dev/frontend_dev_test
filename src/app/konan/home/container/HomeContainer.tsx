import React from "react";
import Header from "../../components/Atoms/HeaderAtom/Header";
import MessageSection from "../../components/Messages/MessageSection";
import MessageList from "../../components/Messages/MessageList";
import BottomNavigation from "../../components/Atoms/FooterAtom/BottomNavigation";

export const HomeContainer: React.FC = () => {
  return (
    <div className='flex h-screen flex-col bg-[#1C1C1E] text-white'>
      <Header />
      <MessageSection />
      <MessageList />
      <BottomNavigation />
    </div>
  );
};
