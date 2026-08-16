import { useRoutes } from "react-router-dom";
import { publicRoutes } from "./routes";

function App() {
  return useRoutes(publicRoutes);
}

export default App;
