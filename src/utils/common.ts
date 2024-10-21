import { Props, Reward } from "~/components/Components/RewardOps/RewardOps";

import { type ErrorStates } from "~/components/Components/TextInput/TextInput";

import ToastStore from "~/store/ToastStore";

export function generateRandomString(length: number) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export function isEmailValid(email: string): boolean {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailRegex.test(email);
}

export function formatWalletAddress(
  address: string,
  prefixLength = 5,
  suffixLength = 3
) {
  return `${address.slice(0, prefixLength)}...${address.slice(-suffixLength)}`;
}

export function decodeUTF8(str: string) {
  const decoded = unescape(encodeURIComponent(str));
  const result = new Uint8Array(decoded.length);

  for (let i = 0; i < decoded.length; i++) {
    result[i] = decoded.charCodeAt(i);
  }

  return result;
}

export async function copyToClipboard(text: string, message?: string) {
  try {
    await navigator.clipboard.writeText(text);
    ToastStore.info(message ?? "Text copied to clipboard");
  } catch (err) {
    ToastStore.info("Failed to copy text to clipboard");
  }
}

export const getPasskeyCustomName = (accountLength: number) => {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const alphabetLength = alphabet.length;
  const firstIndex = Math.floor(accountLength / alphabetLength);
  const secondIndex = accountLength % alphabetLength;
  return `Passkey ${firstIndex ? alphabet[firstIndex - 1] : ""}${
    alphabet[secondIndex]
  }`;
};

export const getNetworkNameByProtocol = (protocol: string) => {
  const networkName: Record<string, string> = {
    EVM: "Ethereum",
    SOLANA: "Solana",
  };

  return networkName[protocol];
};

export const getTxScanUrl = (targetChainId: number, txHash: string) => {
  targetChainId = Number(targetChainId);

  switch (targetChainId) {
    case 1:
      return `https://etherscan.io/tx/${txHash}`;
    case 11155111:
      return `https://sepolia.etherscan.io/tx/${txHash}`;
    case 11155420:
      return `https://sepolia-optimism.etherscan.io/tx/${txHash}`;
    case 1110:
      return `https://blockscout.nuralchain.org/tx/${txHash}`;
    default:
      return "/";
  }
};

export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
};

export const colorMap = {
  green: "bg-base-green",
  blue: "bg-base-blue",
};

export const rewardMap: Record<Props["type"], Reward> = {
  nft: {
    label: "NFT",
    icon: "nft",
    color: "#8FFFFF",
  },
  point: {
    label: "Point",
    icon: "point",
    color: "#F9FF3C",
  },
  sbt: {
    label: "SBT",
    icon: "sbt",
    color: "#99B9FF",
  },
  token: {
    label: "Token",
    icon: "point",
    color: "#DA00F9",
  },
};

export const errorMap: Record<ErrorStates, string> = {
  warning: "#DD270E",
  hint: "#1838E0",
};

// for tailwindcss
const cls = "text-[#DD270E] text-[#1838E0] border-[#DD270E] border-[#1838E0]";

export const creatorAvatarProps = [
  {
    title: "[$2500+ in rewards] Fullhouse.gg Official Airdrop Quests",
    listPoint: 1000,
    description:
      "Quest description Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    author: "Fractal Visions",
    cover: "/images/cover1.png",
    bannerColor: "green",
    status: 1, // 0 - Ended, 1 - Ranking
    avatar: "/images/avatar.png",
    useShadow: false,
  },
  {
    title: "[$2500+ in rewards] Fullhouse.gg Official Airdrop Quests",
    listPoint: 1000,
    description:
      "Quest description Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    author: "Fractal Visions",
    cover: "/images/cover1.png",
    bannerColor: "green",
    status: 1, // 0 - Ended, 1 - Ranking
    avatar: "/images/avatar.png",
    useShadow: false,
  },
  {
    title: "[$2500+ in rewards] Fullhouse.gg Official Airdrop Quests",
    listPoint: 1000,
    description:
      "Quest description Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    author: "Fractal Visions",
    cover: "/images/cover1.png",
    bannerColor: "green",
    status: 1, // 0 - Ended, 1 - Ranking
    avatar: "/images/avatar.png",
    useShadow: false,
  },
  {
    title: "[$2500+ in rewards] Fullhouse.gg Official Airdrop Quests",
    listPoint: 1000,
    description:
      "Quest description Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    author: "Fractal Visions",
    cover: "/images/cover1.png",
    bannerColor: "green",
    status: 1, // 0 - Ended, 1 - Ranking
    avatar: "/images/avatar.png",
    useShadow: false,
  },
  {
    title: "[$2500+ in rewards] Fullhouse.gg Official Airdrop Quests",
    listPoint: 1000,
    description:
      "Quest description Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    author: "Fractal Visions",
    cover: "/images/cover1.png",
    bannerColor: "green",
    status: 1, // 0 - Ended, 1 - Ranking
    avatar: "/images/avatar.png",
    useShadow: false,
  },
];

export const creatorsData = [
  {
    name: "Creator Name",
    width: 175,
    icon: "/svgs/avatar2.svg",
  },
  {
    name: "Creator Name",
    width: 175,
    icon: "/svgs/createQuest.svg",
  },
  {
    name: "Creator Name",
    width: 100,
    icon: "/svgs/createQuest.svg",
  },
  {
    name: "Creator Name",
    width: 100,
    icon: "/svgs/createQuest.svg",
  },
  {
    name: "Creator Name",
    width: 100,
    icon: "/svgs/createQuest.svg",
  },
];
