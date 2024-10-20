import React from "react";

type Props = {
  iconLinks: { icon: React.ReactNode; href: string }[];
};

// had to use react-icons cause icons are extractable from the design for SVGAtom standard based on convention for icons

const SocialLinkList = (props: Props) => {
  return (
    <div className='ml-4'>
      <div className=' flex gap-x-5 pt-3 md:pt-0'>
        {props.iconLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className='text-black  hover:text-gray-600'
          >
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialLinkList;
