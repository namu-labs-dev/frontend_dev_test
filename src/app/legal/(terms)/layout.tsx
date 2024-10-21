import { LegalHeaderModule } from "~/components/Modules/Legal/LegalHeaderModule";

export default function TermsLayoutPage({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className='p-6'>
      <LegalHeaderModule />
      {children}
    </main>
  );
}
