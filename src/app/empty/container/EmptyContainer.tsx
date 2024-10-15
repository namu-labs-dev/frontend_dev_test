"use client";
import { useRouter } from "next/navigation";
// import { EmptyTemplate } from "~/components/Templates/Empty/EmptyTemplate";

export const EmptyContainer = () => {
  const router = useRouter();


  // return <EmptyTemplate {...emptyTemplateProps} />;
  return <>world</>
};
