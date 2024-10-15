"use client";

import { RootStyleRegistry } from "./RootStyleRegistry";


export default function GlobalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="">
        <RootStyleRegistry>{children}</RootStyleRegistry>
      </div>

    </>
  );
}
