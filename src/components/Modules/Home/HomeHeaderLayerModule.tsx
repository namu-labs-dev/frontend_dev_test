import FooterAtom from "~/components/Atoms/FooterAtom/FooterAtom";
import { FaRegCopyright } from "react-icons/fa";
import NavigationAtom from "~/components/Atoms/NavigationAtom/NavigationAtom";

export const HomeHeaderLayerModule = () => {
  return (
    <div className='grid min-h-screen'>
      <div className='self-start'>
        <NavigationAtom creators={""} notifications={""} />;
      </div>

      <div className='self-end'>
        <FooterAtom
          title={
            <>
              <FaRegCopyright className='mr-3' /> {new Date().getFullYear()}{" "}
              FandomKorea. All rights reserved.
            </>
          }
        />
      </div>
    </div>
  );
};
