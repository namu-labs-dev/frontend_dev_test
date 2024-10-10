import { Button, DatePicker, Form, Input, message, Select } from "antd";
import { CameraFilled } from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";
import { FormTestPageFormModule } from "./FormTestPageFormModule";

type Props = {
  setFormData: (data: any) => void;
};

export const FormTestPageContentModule = (props: Props) => {
  return (
    <div className=''>
      <div className='font-pretendard bg-[#F0F5FF] px-[21px] py-[13px] text-[16px]'>
        <span className='font-[700] text-[#2F54EB]'>10 FAO</span> will be
        deducted when voting is generated (Amount : 9 FAO)
      </div>
      <div className='p-[20px]'>
        <FormTestPageFormModule setFormData={props.setFormData} />
      </div>
    </div>
  );
};
