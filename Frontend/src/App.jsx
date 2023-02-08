import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";
import { Button, Space } from "antd";
import axios from "axios";

const { Meta } = Card;

const App = () => {
  const submitBtn = () => {
    axios.post("", {
      name: "Jane Doe",
      email: "doe@gmail.com"
    })
  };
  return (
    <>
      <Card
        style={{
          width: 300,
        }}
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Meta
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title="Card title"
          description="This is the description"
        />
      </Card>
      <Space>
        {" "}
        <Button type="primary" onClick={submitBtn}>
          Primary Button
        </Button>
      </Space>
    </>
  );
};
export default App;
