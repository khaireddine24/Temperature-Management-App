import React from 'react';
import { Alert } from 'react-bootstrap';

const MessageAlert = ({ message }) => {
  if (!message) return null;
  
  return (
    <Alert variant={message.type}>
      {message.text}
    </Alert>
  );
};

export default MessageAlert;