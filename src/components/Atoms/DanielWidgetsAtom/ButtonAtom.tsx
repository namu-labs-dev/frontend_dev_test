import { Button, Flex } from "antd";
import React from "react";

const ButtonAtom: React.FC = () => (
  <Flex vertical gap='small'>
    <Button
      onClick={() => alert("Vote created successfully")}
      type='primary'
      block
    >
      Create Vote
    </Button>
  </Flex>
);

export default ButtonAtom;
