import DrawerAtom from "~/components/Atoms/DrawerAtom/DrawerAtom";
import SVGAtom from "~/components/Atoms/SVGAtom/SVGAtom";
import Image from "next/image";


type Props = {
  drawerProps: React.ComponentProps<typeof DrawerAtom>;
}

export const MessagePageModule = (props: Props) => {
  return (
    <div className="flex flex-col gap-6 h-full w-full">
      <p className="font-semibold text-2xl">
        Messages
      </p>

      <div className="flex flex-col justify-center">
        <div className="flex h-[65px] w-[65px] justify-center items-center rounded-full bg-[#2C2D30]">
          <SVGAtom
            iconName="ProximaStar"
            width={46}
            height={46}
          />
        </div>
        <p className="text-lg">
          Proxima
        </p>
      </div>

      <DrawerAtom {...props.drawerProps}>
        {/*
          I am hard coding the drawer values but in essence since we would most likely be calling from a database
          We would need to input the values in a json format, but I don't think the test warrants that now
          
          Also for some reason the font here is different?? I would like team members to verify this?
        */}
        <div className="flex items-center h-fit gap-2 m-4 p-2">
          <div>
            <Image 
              src="/images/Eth.png"
              alt="Profile Picture"
              width={44}
              height={44}
            />
          </div>
          <div className="flex flex-col w-full text-[#FFFFFF]">
            <div className="flex w-full justify-between">
              <p className="font-medium text-base">ETH</p>
              <p className="font-light text-base">8:30 PM</p>
            </div>
            <div className="flex justify-between">
              <p>
                User: Namulabs is a fantastic company...
              </p>
              <div className="flex justify-center items-center text-sm font-light w-[20px] h-[20px] rounded-full bg-[red]">
                N
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center h-fit gap-2 m-4 p-2">
          <div>
            <SVGAtom
              // Important note, using images is even more tiring here since the figma file edits this with shadows
              // Since I do not have the edit access to the figma code I cannot change the shadow to give the best image display
              // I was thinking of using css but that is really messy with the filters.
              //Best solution: Change design in figma for better and consistent image quality
              //For now, SVG is used because of its customizability.
              iconName="NvirIcon"
              height={54}
              width={44}
            />
          </div>
          <div className="flex flex-col w-full text-[#FFFFFF]">
            <div className="flex w-full justify-between">
              <p className="font-medium text-base">Nvir</p>
              <p className="font-light text-base">8:42 AM</p>
            </div>
            <div className="flex justify-between">
              <p>
                User: Namulabs is a fantastic company...
              </p>
              <div className="hidden justify-center items-center text-sm font-light w-[20px] h-[20px] rounded-full bg-[red]">
                N
              </div>
            </div>
          </div>
        </div>
      </DrawerAtom>
    </div>
  );
}