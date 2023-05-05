import { Route, Routes, BrowserRouter } from "react-router-dom";
import TodoView from "./TodoView";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={TodoView} />
        <Route path="/edit" />
        <Route path="/delete" />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
