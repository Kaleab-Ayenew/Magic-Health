import React from "react";
import { useRouteError } from "react-router";
import { Link } from "react-router-dom";
import "./error.css";
function ErrorElement(props) {
  const error = useRouteError();
  const errMsg = error.error.message;
  console.error(error);
  return (
    <div className="error-container">
      <h1>
        Error {error.status} | {error.statusText}
      </h1>
      <p>{error.data}</p>
      <p>
        Go back to <Link to="/">Home</Link>
      </p>
    </div>
  );
}

export default ErrorElement;
