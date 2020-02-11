import React from "react";
import "./Messages.css";

const Messages = ({ author, date, message }) => (
  <div className="col-12 col-sm-10 col-md-8 col-lg-6 mx-auto">
    <div className="Toast">
      <div className="toast-header">
        <strong className="mr-auto">{author}</strong>
        <small>{date}</small>
      </div>
      <div className="toast-body">{message}</div>
    </div>
  </div>
);

export default Messages;
