import { Typography } from "antd";

const { Title } = Typography;

type Props = {
  title: string;
};

export const VoteHeaderAtom = (props: Props) => {
  return (
    <Title style={{ fontSize: "19px", textAlign: "center" }}>
      {props.title}
    </Title>
  );
};
