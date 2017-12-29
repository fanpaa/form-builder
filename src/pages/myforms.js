import React from "react";
import { Link } from "react-router-dom";

const MyForms = () => (
  <div>
    <Link to="/build">创建表单</Link>
    <h2>编辑表单</h2>
    <ul>
      <li>
        <Link to="/build/1">表单1</Link>
      </li>
    </ul>
  </div>
);

export default MyForms;
