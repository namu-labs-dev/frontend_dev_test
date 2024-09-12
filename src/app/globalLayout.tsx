"use client";

import SnapshotModal from "~/components/Atoms/Modal/SnapshotModal";
import { RootStyleRegistry } from "./RootStyleRegistry";
import SnapshotDrawerAtom from "~/components/Atoms/DrawerAtom/SnapshotDrawerAtom";
import { SnapshotToastAtom } from "~/components/Atoms/ToastAtom/SnapshotToastAtom";

export default function GlobalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="h-screen overflow-auto bg-[#1F1F1F]">
        <RootStyleRegistry>{children}</RootStyleRegistry>
      </div>
      <SnapshotDrawerAtom />
      <SnapshotModal />
      <SnapshotToastAtom />
    </>
  );
}
