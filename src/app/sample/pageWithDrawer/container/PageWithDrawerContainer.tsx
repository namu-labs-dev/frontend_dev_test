"use client";
import { useState } from "react";
import { PageWithDrawerTemplate } from "~/components/Templates/PageWithDrawer/PageWithDrawerTemplate";
import DrawerStore from "~/store/DrawerStore";

export const PageWithDrawerContainer = () => {
  //  Since this page uses useState(), it is now a client component and a
  //  'use client' header has been added to the top of the page.
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const pagewithdrawerTemplateProps: React.ComponentProps<
    typeof PageWithDrawerTemplate
  > = {
    pageWithDrawerHeaderModuleProps: {
      headerProps: {
        title: "PageWithDrawerHeaderModule",
      },
    },
    pageWithDrawerExamplesModuleProps: {
      onOpenSnapshotDrawer: () => {
        DrawerStore.open("TitleAndContent", {
          TitleAndContent: {
            title: "Snapshot Drawer Title",
            description: "Snapshot Drawer Description",
          },
        });
      },
      drawerProps: {
        drawerProps: {
          isDrawerOpen,
          setIsDrawerOpen,
        },
        title: "Drawer Title",
        description: "Drawer Description",
      },
    },
  };

  return <PageWithDrawerTemplate {...pagewithdrawerTemplateProps} />;
};
