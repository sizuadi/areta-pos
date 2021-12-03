import Loader from "react-loader-spinner";
import { Navigate } from "react-router-dom";

export const authorized = (component, authenticated) => {
  if (authenticated === true) {    
    return component;
  } else if (authenticated === false) {
    return <Navigate to="/login" replace />;
  } else {    
    return (
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000}
        />
      </div>
    );
  }
};

export const guest = (component, authenticated) => {
  if (authenticated === true) {
    return <Navigate to="/" replace />;
  } else if (authenticated === false) {
    return component;
  } else {
    return (
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000}
        />
      </div>
    );
  }
};
