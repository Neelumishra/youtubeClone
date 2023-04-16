import React from "react";
import "./App.css";
import Sidebar from "./component/Sidebar";
import Header from "./component/Header";

function App(){
  const [sidebarOpen,setSidebarOpen] = React.useState(false)
  const handleSidebar = () =>{
    setSidebarOpen(!sidebarOpen)
  } 
  return <div className="App">
    <Header handleSidebar={handleSidebar}/>
    <Sidebar sidebarOpen={sidebarOpen}/>
  </div>;
}

export default App;
