"use client";

import SnapshotModal from "~/components/Atoms/Modal/SnapshotModal";
import { RootStyleRegistry } from "./RootStyleRegistry";
import SnapshotDrawerAtom from "~/components/Atoms/DrawerAtom/SnapshotDrawerAtom";
import { SnapshotToastAtom } from "~/components/Atoms/ToastAtom/SnapshotToastAtom";
import Modal from "~/components/Atoms/Modal/Modal";
import { useState } from "react";

export default function GlobalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <>
      <div className='m-auto h-screen max-w-[500px] overflow-auto bg-white'>
        <RootStyleRegistry>{children}</RootStyleRegistry>
      </div>
      <SnapshotDrawerAtom />
      <Modal isModalOpen={isModalOpen} setModalOpen={setModalOpen} />
      <SnapshotToastAtom />
    </>
  );
}
