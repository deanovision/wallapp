import { lazy, Suspense } from "react";
import { useAuthorizer } from "@authorizerdev/authorizer-react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Loading from "./components/Loading";
import "./App.css";
const Wall = lazy(() => import("./pages/Wall/Wall"));

function App() {
  const { loading } = useAuthorizer();
  return loading ? (
    <>
      <Nav />
      <div className="container">
        <Loading />
      </div>
    </>
  ) : (
    <>
      <Nav />
      <div className="container">
        <Routes>
          <Route element={<Home />} path="/" />
          <Route
            element={
              <>
                <Suspense fallback={<Loading />}>
                  <Wall />
                </Suspense>
              </>
            }
            path="/wall"
          ></Route>
          <Route element={<Login />} path="/login" />
        </Routes>
      </div>
    </>
  );
}

export default App;
