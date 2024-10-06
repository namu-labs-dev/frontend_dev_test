type Props = {
  title: string;
  images?: string[]; // Optional array of image URLs
};

export const FooterAtom = (props: Props) => {
  return (
    <div className="flex h-full items-center justify-center bg-[#262626]">
      {props.images && props.images.length > 0 ? (
        <div className="flex justify-around w-full h-full items-center">
          {props.images.map((image, index) => (
            <div key={index} className={`h-full w-full flex justify-center items-center ${index === 2 ? 'border-t-2 border-[#00EC97]' : ''}`}>
            <img  src={image} alt={`Footer image ${index + 1}`} className={`w-[21px] h-[21px] text-[#8C8C8C]`} />
            </div>
          ))}
        </div>
      ) : (
        <div>{props.title}</div>
      )}
    </div>
  );
};
