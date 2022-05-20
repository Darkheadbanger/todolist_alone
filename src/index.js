import "./style/scss/_custom.scss";
import "./todo.js";

import { ToDoList } from "./todo.js";
// You can specify which plugins you need
import * as all from "bootstrap";
import { arrow, createPopper } from "@popperjs/core";
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

    // EventListener
    const eventListener = () => {
      form.addEventListener("submit", (event) => {
        event.preventDefault();
        updateToDoList();
      });

      form.addEventListener("dblclick", (event) => {
        event.preventDefault();
        updateToDoList();
      });
    };

    const updateToDoList = () => {
      const articleValue = input_article.value;
      // L'idée est d'envoyer la valeur de l'input à update pour pouvoir faire le CRUD en updatant à chaque fois
      todolist.updateToDoList(articleValue);

      if (input_article.value) {
        console.log(input_article.value);
        input_article.value = "";
        input_categorie.value = "";
      } else {
        // Pour dire si l'article vide, on ne peut pas submitter
        if (input_article.value === "") {
          alert("Veuillez ajouter un article et catégorie s'il vous plait");
        }
      }
      // else {
      //   // Pour dire si l'article vide, on ne peut pas submitter
      //   if (input_article.value === "" || input_categorie.value === "") {
      //     alert("Veuillez ajouter un article et catégorie s'il vous plait");
      //   }
      // }
    };
    eventListener();
  };
  pageReady();
}
