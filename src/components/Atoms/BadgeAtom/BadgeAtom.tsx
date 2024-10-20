type Props = {
  type: "ranking" | "raffle" | "alarm" | "ended";
  innerText: string;
};

export const BadgeAtom = (props: Props) => {
  const className = `
      ${
        props.type === "ranking"
          ? "bg-primaryBlue text-white border border-[#0C0D0F]"
          : props.type === "raffle"
            ? "bg-primaryGreen text-black border-2 border-[#0C0D0F]"
            : props.type === "alarm"
              ? "bg-white text-black rounded-full"
              : props.type === "ended"
                ? "bg-[#F0F0F0] text-[#5C5C5C] border-2 border-[#8C8C8C]"
                : ""
      }
      py-1 px-2 inline-block rounded-lg
    `;

  return <div className={className}>{props.innerText}</div>;
};
