import { Collapse } from "antd";

export const BestEpisodesPage = () => {
  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  return <Collapse defaultActiveKey={["1"]} onChange={onChange} />;
};
