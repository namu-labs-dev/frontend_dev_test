"use client";
import { createCache, extractStyle, StyleProvider } from "@ant-design/cssinjs";
import { useServerInsertedHTML } from "next/navigation";
import { useState, type PropsWithChildren } from "react";

export const RootStyleRegistry = ({ children }: PropsWithChildren) => {
  const [cache] = useState(() => createCache());

  useServerInsertedHTML(() => {
    // Ensure extracted styles are safely inserted as HTML to prevent XSS issues
    const extractedStyle = extractStyle(cache);
    return <style dangerouslySetInnerHTML={{ __html: extractedStyle }} />;
  });

  return <StyleProvider cache={cache}>{children}</StyleProvider>;
};
