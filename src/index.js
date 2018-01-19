import "babel-polyfill";

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');
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
