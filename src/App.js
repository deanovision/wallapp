import { useAuthorizer } from "@authorizerdev/authorizer-react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import "./App.css";
import Wall from "./pages/Wall/Wall";

function App() {
  const { user, token, loading } = useAuthorizer();
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Wall />} path="/wall" />
        <Route element={<Login />} path="/login" />
      </Routes>
    </div>
  );
}

export default App;
