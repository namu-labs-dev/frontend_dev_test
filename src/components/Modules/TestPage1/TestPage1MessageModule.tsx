import { MessageBoxAtom } from "~/components/Atoms/MessageAtoms/MessageBoxAtom";
import { SingleMessageAtom } from "~/components/Atoms/MessageAtoms/SingleMessageAtom";

type Props = {
  messages: any[];
};

export const TestPage1MessageModule = (props: Props) => {
  return (
    <>
      <MessageBoxAtom>
        <SingleMessageAtom messages={props.messages} />
      </MessageBoxAtom>
    </>
  );
};
