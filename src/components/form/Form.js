import React, { useState } from "react";
import { GrSend } from "react-icons/gr";

const Form = (props) => {
  //set state for user input
  const [userInput, setUserInput] = useState("");

  //function for handling change in input
  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      //gives each user message a unique randomised id
      id: Math.floor(Math.random() * 10000),
      text: userInput,
    });

    setUserInput("");
  };

  return (
    <form className="chat-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="what would you like to know?"
        value={userInput}
        name="text"
        className="user-msg"
        onChange={handleChange}
      />
      <button className="formbtn">
        <GrSend />
      </button>
    </form>
  );
};

export default Form;
