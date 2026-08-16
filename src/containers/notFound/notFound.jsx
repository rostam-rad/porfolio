import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/");
  };
  return (
    <div>
      <h1>Sorry the page you are looking for was not found</h1>
      <button onClick={goHome}>Go home</button>
    </div>
  );
};

export default NotFound;
