import React, { Component } from "react";
import Box from '@material-ui/core/Box';
import Headers from "./component/header/Header.js";
import ConHead from "./component/content/ContentHeader.js";
import ConCont from "./component/content/ContentCons.js";
import "./App.css";



function App () {
    return (
    <div className="App">
      <Headers />
      <ConHead />
    </div>
      // <div className="App">

      
      //   <ConHead />
      //   <ConCont />
      // </div>
    );
}

export default App;
