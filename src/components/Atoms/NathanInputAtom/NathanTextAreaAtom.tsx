import React from "react";
import { Input } from "antd";

const { TextArea } = Input;

const TextAreaAtom: React.FC = () => (
  <>
    <TextArea
      rows={4}
      placeholder="Please write down a description of the event"
    />
  </>
);

export default TextAreaAtom;
