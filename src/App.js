import React from "react";
import "bootswatch/dist/cyborg/bootstrap.min.css";
import "./App.css";
import Header from "components/Header";
import Routes from "Routes";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes />
    </div>
  );
}

export default App;
