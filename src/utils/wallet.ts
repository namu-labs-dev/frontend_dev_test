export interface WalletItem {
    image: string;
    title: string;
    content: string;
    time: string;
}

export const walletData: WalletItem[] = [
    {
        image: "/svgs/eth.svg",
        title: "ETH",
        content: "User: namulabs is a fantastic company...",
        time: "08:43 PM"
    },
    {
        image: "/svgs/nvir.svg",
        title: "Nvir",
        content: "User: namulabs is a fantastic company...",
        time: "08:42 AM"
    }
];
