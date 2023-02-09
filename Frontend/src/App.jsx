import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";
import { Button, Space } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";

const { Meta } = Card;

const App = () => {
  const [posts, setPosts] = useState([]);
  const [getPost, setGetPost] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:8080/user", () => {
        params: {
          email: "doe@gmail.com";
        }
      })
      .then((response) => {
        setPosts(response.data);
        console.log(posts[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const submitBtn = () => {
    // axios.post("", {
    //   name: "Jane Doe",
    //   email: "doe@gmail.com"
    // })
  };
  return (
    <>
      {posts.map((postContent) => {
        return (
          <section className="cards">
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
                avatar={
                  <Avatar src="https://ui-avatars.com/api/?name=John+Doe" />
                }
                title={postContent.name}
                description={postContent.email}
              />
            </Card>
          </section>
        );
      })}
    </>
  );
};
export default App;
