import SVGAtom from "../SVGAtom/SVGAtom";

type Props = {
  text: string;
  backgroundIcon?: boolean; //Pass as false if you don't need the background SVG
};

export const ProductAtom = ({ text, backgroundIcon = true }: Props) => {
  return (
    <div className='relative h-[150px] w-[150px] border-4 border-[#39FF14] p-10'>
      {backgroundIcon && (
        <>
          <div className='absolute left-0 top-0 h-full w-full'>
            <SVGAtom
              iconName='customStar'
              className='h-full w-full object-cover'
            />
          </div>
        </>
      )}
      <div className='absolute left-0 top-0 h-full w-full bg-[#000000BF] bg-opacity-50'></div>

      <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center'>
        <h1 className='text-2xl font-extrabold uppercase text-[#39FF14]'>
          {/*
                Incase the text is more than one word split into two 
            */}
          {text.split(" ").length > 1 ? (
            <>
              {text.split(" ")[0]}
              <br />
              {text.split(" ")[1]}
            </>
          ) : (
            text
          )}
        </h1>
      </div>
    </div>
  );
};
