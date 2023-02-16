import { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const Forms = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [img, setImg] = useState("");

  const createNewPost = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/newuser", {
        name: name,
        email: email,
        imageURL: img,
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
          maxLength="30"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          maxLength="50"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          name="Image URL"
          placeholder="Cover image URL"
          maxLength="500"
          onChange={(e) => setImage(e.target.value)}
        />
        <input
          type="text"
          name="title"
          placeholder="Title"
          maxLength="30"
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          type="text"
          name="body"
          className="bodyInput"
          placeholder="Content"
          maxLength="300"
          rows="4"
          cols="50"
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
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
    .bodyInput {
      height: 80px;
      word-wrap: break-word;
      word-break: break-all;
    }
  }
`;

export default Forms;
