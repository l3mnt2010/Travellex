import React, {useState} from "react";

import Button from "./components/ui/Button";
import Input from "../src/components/ui/Input";
import TodoView from './pages/table/TodoView';
import Router from "./pages/table/Router";
import ChangeTable from "./pages/table/TodoAdd";
import MenuBar from './pages/table/MenuBar';


const App: React.FC = () => {
 

  return (
    <div className="rounded transition duration-300 ease-in-out">
      <MenuBar/>
    </div>
  );
};

export default App;