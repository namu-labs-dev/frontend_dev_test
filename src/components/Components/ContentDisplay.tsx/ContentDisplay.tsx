type ContentDisplayProps = {
    image: string;
    text: string;
  };
  
  export const ContentDisplay = (props: ContentDisplayProps) => {
    return (
      <div >
        <b className="text-[28px] text-white">Messages</b>
        <div className="flex flex-col justify-center items-center w-[65px] h-[93px] mt-[19px]">
        <img src={props.image} alt="Sample" className="w-[68px] h-[68px]" />
        <p className="text-[16px] mt-[9px] text-[#CACACA]">{props.text}</p>
        </div>
      </div>
    );
  };
  