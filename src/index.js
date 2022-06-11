import "./style/scss/_custom.scss";
import "./style/scss/_custom.css";
import "./todo.js";

import ToDoList from "./todo.js";
// You can specify which plugins you need
import * as all from "bootstrap";
import { arrow, createPopper } from "@popperjs/core";
// import { Tooltip, Toast, Popover } from "bootstrap";

if (document.readyState === "loading") {
  window.addEventListener("DOMContentLoaded", pageReady);
} else {
  const pageReady = () => {
    const todolist = new ToDoList();
    console.log(todolist);
  };
  pageReady();
}

