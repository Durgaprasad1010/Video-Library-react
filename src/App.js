import React from "react";
import VideoLibrary from "./components/VideoLibrary";
import UserInfo from "./components/UserInfo";
import "./App.css";

function App() {
  return (
    <div className="App">
      <VideoLibrary></VideoLibrary>
      <UserInfo></UserInfo>
    </div>
  );
}

export default App;
