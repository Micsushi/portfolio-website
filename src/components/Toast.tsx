import { useState, useEffect } from "react";
import "../assets/styles/Toast.scss";

const Toast = ({ message }: { message: string }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);

    return () => clearTimeout(timer); 
  }, []);

  if (!visible) return null;

  return (
    <div className="toast">
      {message}
    </div>
  );
};

export default Toast;