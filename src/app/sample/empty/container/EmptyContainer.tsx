"use client";
import { useRouter } from "next/navigation";
import { useMemo } from "react";
import { EmptyTemplate } from "~/components/Templates/Empty/EmptyTemplate";

export const EmptyContainer = () => {
  const router = useRouter();

  // Memoize the template props to avoid unnecessary re-renders
  const emptyTemplateProps = useMemo(
    () => ({
      emptyHeaderModuleProps: {
        headerProps: {
          title: "Empty",
          onClickLeftIcon: () => {
            // Only log in development environment
            if (process.env.NODE_ENV === "development") {
              console.log("Left icon clicked");
            }
            router.back();
          },
          onClickRightIcon: () => {
            if (process.env.NODE_ENV === "development") {
              console.log("Right icon clicked");
            }
          },
        },
      },
      emptyContentModuleProps: {
        moduleProps: "Empty Content Module",
        componentProps: { title: "EmptyContentComponent" },
        atomProps: { title: "EmptyContentAtom" },
      },
      emptyFooterModuleProps: {
        footerProps: { title: "EmptyFooterModule" },
      },
    }),
    [router]
  ); // `router` is included in the dependency array

  return <EmptyTemplate {...emptyTemplateProps} />;
};
