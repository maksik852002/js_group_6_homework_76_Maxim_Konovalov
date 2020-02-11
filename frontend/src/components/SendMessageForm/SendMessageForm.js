import React, { Component } from "react";
import { MdSend } from "react-icons/md";
import Button from "../UI/Button/Button";

class SendMessageForm extends Component {
  state = {
    message: "",
    author: ""
  };

  submitFormHandler = e => {
    e.preventDefault();
    this.props.onSubmit({ ...this.state });
    this.setState({ message: "" });
  };

  inputChangeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { author, message } = this.state;
    return (
      <form onSubmit={this.submitFormHandler}>
        <div
          className="input-group align-items-center"
          style={{ width: "95%", margin: "1.5em auto" }}
        >
          <input
            onChange={this.inputChangeHandler}
            type="text"
            name="author"
            className="form-control col-2 text-center"
            style={{
              borderRadius: "1.25em",
              borderTopRightRadius: "0",
              borderBottomRightRadius: "0",
              height: "45px"
            }}
            value={author}
            placeholder="Author"
          />
          <input
            onChange={this.inputChangeHandler}
            type="text"
            name="message"
            className="form-control col-14"
            style={{
              borderRadius: "1.25em",
              borderTopLeftRadius: "0",
              borderBottomLeftRadius: "0",
              height: "45px"
            }}
            value={message}
            placeholder=" Message"
          />
          <div className="ml-2">
            <Button
              type="submit"
              addClass="close"
              label={<MdSend style={{ fontSize: "40px", opacity: "0.5" }} />}
            />
          </div>
        </div>
      </form>
    );
  }
}

export default SendMessageForm;
