import React from "react";
import { LinkList } from "~/components/Components/LinkList/LinkList";
import MessageHero from "~/components/Components/MessagesHero/MessageHero";

type Props = {
  title: string;
  sampleLinks: string[];
};

export const HomeLogoModule = (props: Props) => {
  return (
    <div className='bg-[#1F1F1F] py-3'>
      <MessageHero />
    </div>
  );
};
