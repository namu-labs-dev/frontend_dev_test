import React from "react";
import SVGAtom from "~/components/Atoms/SVGAtom/SVGAtom";

type Props = {
  iconLinks: { icon: React.ReactNode; href: string }[];
};

// had to use react-icons cause icons are extractable from the design for SVGAtom standard based on convention for icons

const SocialLinkList = (props: Props) => {
  return (
    <div className='flex space-x-4'>
      {props.iconLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          className='text-black hover:text-gray-600'
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinkList;
