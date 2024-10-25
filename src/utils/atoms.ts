import { atom } from "recoil";

export const showLoaderOverlayAtom = atom<boolean | number>({
  key: "showLoaderOverlayAtom",
  default: false
});

export const isSessionInitializedAtom = atom<boolean>({
  key: "isSessionInitializedAtom",
  default: false
});
