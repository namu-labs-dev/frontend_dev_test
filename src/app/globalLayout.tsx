"use client";

import SnapshotDrawerAtom from "~/components/Atoms/DrawerAtom/SnapshotDrawerAtom";
import SnapshotModal from "~/components/Atoms/Modal/SnapshotModal";
import { SnapshotToastAtom } from "~/components/Atoms/ToastAtom/SnapshotToastAtom";
import { RootStyleRegistry } from "./RootStyleRegistry";

export default function GlobalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div
        className='
          m-auto h-screen w-full overflow-auto 
          bg-white md:max-w-[500px]
          '
        // Use responsive breakpoints for better flexibility on different screen sizes
      >
        <RootStyleRegistry>{children}</RootStyleRegistry>
      </div>
      <SnapshotDrawerAtom />
      <SnapshotModal />
      <SnapshotToastAtom />
    </>
  );
}
