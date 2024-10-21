import { LegalHeaderModule } from "~/components/Modules/Legal/LegalHeaderModule";

type Props = {
  foo?: string;
};

export function LegalTemplate(props: Props) {
  return (
    <div className='p-6'>
      <LegalHeaderModule />
    </div>
  );
}
