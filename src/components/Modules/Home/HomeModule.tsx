import { TextInput } from "~/components/Components/TextInput/TextInput";

// todo: will push props up
// during page dev
type Props = {
  foo: string;
};

export function HomeModule(props: Props) {
  return (
    <>
      {/* todo: push props up */}
      <div className='flex flex-col justify-center gap-4 border border-black p-4'>
        <TextInput foo='bar' placeholder='Hint' />
      </div>
    </>
  );
}
