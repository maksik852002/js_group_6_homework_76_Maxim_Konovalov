import React, { Component } from "react";
import { connect } from "react-redux";
import { getMessages, sendMessages, closeModal } from "../store/actions";
import SendMessageForm from "../components/SendMessageForm/SendMessageForm";
import Messages from "../components/Messages/Messages";
import Spinner from '../components/UI/Spinner/Spinner';
import Modal from '../components/UI/Modal/Modal';

import './Chat.css'

let interval = null;

class Chat extends Component {
  componentDidMount() {
    interval = setInterval(
      () => this.props.getMessages(this.props.datetime, this.props.messages),
      2000
    );
  }

  componentDidUpdate(prevProps) {
    this.props.datetime !== prevProps.datetime && this.scrollToBottom();
  }

  componentWillUnmount() {
    clearInterval(interval);
  }

  scrollToBottom() {
    this.el.scrollIntoView({ behavior: "smooth" });
  }

  render = () => {
    const { messages, loading, error, show, sendMessages, closeModal } = this.props;
    return (
      <div className="backWrap">
        {error && <Modal show={show} close={closeModal} error={error}/>}
        {loading ? (
          <Spinner />
        ) : (
          <div className='wrap'>
            <div className="messageWrap">
              {messages.map(el => (
                <Messages
                  key={el.id}
                  author={el.author}
                  date={el.datetime}
                  message={el.message}
                />
              ))}
              <div ref={el => { this.el = el }}/>
            </div>
            <div className="formWrap">
              <SendMessageForm onSubmit={sendMessages} />
            </div>
          </div>
        )}
      </div>
    );
  };
};

const mapStateToProps = state => ({
  messages: state.messages,
  datetime: state.datetime,
  loading: state.loading,
  error: state.error,
  show: state.show,
});

const mapDispatchToProps = dispatch => ({
  getMessages: (date, data) => dispatch(getMessages(date, data)),
  sendMessages: data => dispatch(sendMessages(data)),
  closeModal: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
