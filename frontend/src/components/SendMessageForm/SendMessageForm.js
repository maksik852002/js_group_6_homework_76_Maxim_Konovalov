import React, { Component, Fragment } from "react";
import { MdSend } from "react-icons/md";
import { FaRegSmile } from 'react-icons/fa';
import Button from "../UI/Button/Button";
import Picker from 'emoji-picker-react';
import './SendMessageForm.css';

class SendMessageForm extends Component {
  state = {
    message: "",
    author: "",
    open: false,

  };

  submitFormHandler = e => {
    e.preventDefault();
    const data = {author: this.state.author, message: this.state.message}
    this.props.onSubmit(data);
    this.setState({ message: "" });
  };

  inputChangeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value, open: false
    });
  };

  emojiHandler = (e, emoji) => {
    // e.preventDefault();
    this.setState({message: this.state.message + emoji.emoji})
  }

  render() {
    const { author, message, open } = this.state;
    let addclass = 'Picker';
    open && (addclass += ' d-block')
    return (
      <Fragment>
        <div className={addclass}>
          <Picker onEmojiClick={this.emojiHandler}/>
        </div>
        <form onSubmit={this.submitFormHandler}>
          <div
            className="input-group align-items-center"
            style={{ width: "95%", margin: "1.5em auto" }}
          >
            <div className="mr-2">
              <Button
                type="button"
                addClass="close"
                label={<FaRegSmile style={{ fontSize: "40px", opacity: "0.5" }} />}
                click= {() => this.setState({open: !open})}
              />
            </div>
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
      </Fragment>
    );
  }
}

export default SendMessageForm;
