import { Button } from "antd";
import { PageWithModalContentCustomModal } from "~/components/Components/PageWithModalContentCustomModal/PageWithModalContentCustomModal";

type Props = {
  modalProps: React.ComponentProps<typeof PageWithModalContentCustomModal>;
};

export const PageWithModalContentModule = (props: Props) => {
  return (
    <div className='flex h-full w-full justify-around'>
      <div>
        <PageWithModalContentCustomModal {...props.modalProps} />
      </div>
    </div>
  );
};
