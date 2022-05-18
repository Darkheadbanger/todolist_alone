import "./style/scss/_custom.scss";
import "./todo.js";
import { ToDoList } from "./todo.js";
// You can specify which plugins you need
import * as all from "bootstrap";
import { createPopper } from "@popperjs/core";
// import { Tooltip, Toast, Popover } from "bootstrap";

// DOM
const ul = document.querySelector("ul");
const form = document.querySelector("form");
const input_article = document.querySelector("#input-article");
const input_categorie = document.querySelector("#input-categorie");
console.log(form);

if (document.readyState === "loading") {
  window.addEventListener("DOMContentLoaded", pageReady);
} else {
  const pageReady = () => {
    const todolist = new ToDoList(ul);
    console.log(todolist);

    // EventListener
    const addWork = () => {
      form.addEventListener("submit", (event) => {
        event.preventDefault();
        if (input_article.value || input_categorie.value) {
          input_article.value = "";
          input_categorie.value = "";
        } else {
          if (input_article.value === "" || input_categorie.value === "") {
            alert("Veuillez ajouter un article et catégorie s'il vous plait");
          }
        }
      });
    };
    addWork();
  };
  pageReady();
}
