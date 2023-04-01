import { lazy } from "react";
// import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";

const AuthNav = lazy(() => import("../../pages/AuthNav"));
const RegisterPage = lazy(() => import("../../pages/RegisterPage"));
const SigninPage = lazy(() => import("../../pages/SigninPage"));
const NotFound = lazy(() => import("../../pages/NotFound"));

const App = () => {
  // const dispatch = useDispatch();

  return (
    <Routes>
      <Route path="/" element={<AuthNav />}>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/singin" element={<SigninPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
