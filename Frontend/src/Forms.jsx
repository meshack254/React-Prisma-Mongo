import { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const Forms = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const createNewPost = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/newuser", {
        name: name,
        email: email,
        title: title,
        body: body,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <FormContainer>
      <p>If your email exists, a new user will not be created</p>
      <form>
        <input
          type="text"
          name="name"
          placeholder="Your name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          name="title"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          name="body"
          placeholder="Content"
          onChange={(e) => setBody(e.target.value)}
        />
        <button
          className="submitBtn"
          type="button"
          onClick={createNewPost}
          value="Submit"
        >
          Submit
        </button>
      </form>
    </FormContainer>
  );
};

const FormContainer = styled.section`
  height: 30em;
  width: 30em;
  background-color: #5e5f60;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    input {
      height: 3em;
      width: 27.5em;
      margin: 10px;
      background-color: #ffffff;
      border: 2px solid #2f2f2f;
      border-radius: 8px;
      color: #000;
    }
    .submitBtn {
      padding: 1em 10em;
    }
  }
`;

export default Forms;
