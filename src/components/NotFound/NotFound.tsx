import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Message } from "../App/App.styles";

const NotFound = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [navigate]);

  return (
    <Message>
      404 Error. Return to <Link to="/">Main Page</Link>
    </Message>
  );
};

export default NotFound;
