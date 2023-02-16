import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Forms from "./Forms";

const App = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    console.log("Connecting");
    axios
      .get("http://localhost:8080/posts", () => {
       
      })
      .then((response) => {
        setPosts(response.data);
        console.log();
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container>
      <CardContainer>
        {posts.map((data) => {
          return (
            <div key={data.id} className="card">
              <img src={data.imageURL} alt="cover image" />
              <p>{data.title}</p>
              <p>{data.body}</p>
              <div className="author">
                <p>{data.user.name}</p>
                <p>{data.user.email}</p>
              </div>
            </div>
          );
        })}
      </CardContainer>
      <Forms />
    </Container>
  );
};
export default App;

const Container = styled.section`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-color: aliceblue;
  margin-top: 20px;
  min-height: 80vh;
  .card {
    min-height: 20em;
    width: 16em;
    background-color: #fff;
    border-radius: 8px;
    color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    img {
      height: 8em;
      width: 12em;
      background-size: contain;
      margin: 25px 0 0 0;
      border-radius: 8px;
    }
    .content {
      margin: 0 20px 20px 20px;
    }
    .author {
      text-align: center;
      p:nth-child(2) {
        color: #828282;
        font-style: italic;
        margin-top: -10px;
      }
    }
  }
`;
