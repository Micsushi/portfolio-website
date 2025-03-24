import React from "react";
import "../assets/styles/Toast.scss";

interface ToastProps {
  visible: boolean;
  message: string;
}

const Toast = ({ visible, message }: ToastProps) => {
  return (
    <div className={`toast ${visible ? 'visible' : ''}`}>
      {message}
    </div>
  );
};

export default Toast;