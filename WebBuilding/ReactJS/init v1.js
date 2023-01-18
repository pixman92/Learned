import React, { useState } from "https://esm.sh/react@18.2.0";
import ReactDOM from "https://esm.sh/react-dom@18.2.0";
import * as reactRouter from "https://cdn.skypack.dev/react-router@6.6.2";


// =================
function Main() {
  return (
    <div>
      <Hello />
    </div>
  );
}





const rootNode = document.getElementById("root");
const root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(Main));
