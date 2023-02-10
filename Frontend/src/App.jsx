import { Avatar, Card } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import Forms from "./Forms";

const { Meta } = Card;

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    console.log("Connecting");
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

  return (
    <section>
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
      <Forms />

    </section>
  );
};
export default App;
