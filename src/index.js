import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById('root'));
// import Board from './pages/lab/Board';
// import { observe } from "./pages/lab/Game";
// observe(knightPosition =>
//   ReactDOM.render(
//     <Board knightPosition={knightPosition} />,
//     document.getElementById("root")
//   )
// );
registerServiceWorker();
