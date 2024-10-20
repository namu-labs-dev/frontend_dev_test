import { Card } from "antd";

type Props = {
  title?: string;
  point?: number;
  status?: number;
  useShadow?: boolean;
};

export const CheckAtom = (props: Props) => {
  const { status, useShadow } = props;

  return <Card></Card>;
};
