import "./style/scss/_custom.scss";
import "./style/scss/_custom.css";
// import "./todo.js";

import { ToDoList } from "./todo.js";
// You can specify which plugins you need
import * as all from "bootstrap";
import { arrow, createPopper } from "@popperjs/core";
// import { Tooltip, Toast, Popover } from "bootstrap";

// DOM
const ul = document.querySelector("ul");
const formAdd = document.querySelector("#formAdd");
const inputArticle = document.querySelector("#input-article");
const inputdescription = document.querySelector("#input-description");
const inputCategorie = document.querySelector("#input-categorie");
const inputQuantity = document.querySelector("#input-quantity");
const addArticleError = document.querySelector(".add-article-error");
const addCategorieError = document.querySelector(".add-categorie-error");
const addquantityError = document.querySelector(".add-quantity-error");

if (document.readyState === "loading") {
  window.addEventListener("DOMContentLoaded", pageReady);
} else {
  const pageReady = () => {
    const eventListenerAddArticle = () => {
      // EventListener
      formAdd.addEventListener("submit", (event) => {
        event.preventDefault();
        updateToDo(); // Ou updateToDoList à voir
      });
      formAdd.addEventListener("dbclick", (event) => {
        event.preventDefault();
        updateToDo(); // Ou updateToDoList à voir
      });
      formAdd.addEventListener(
        "blur",
        (event) => {
          event.target.style.color = "white";
        },
        true
      );
      formAdd.addEventListener(
        "focus",
        (event) => {
          console.log(event.target);
        },
        true
      );
    };

    const updateToDo = () => {
      const inputAddValue = [
        inputArticle.value,
        inputdescription.value,
        inputCategorie.value,
        inputQuantity.value,
      ];
      if (inputAddValue) {
        inputArticle.value = "";
        inputdescription.value = "";
        inputCategorie.value = "";
        inputQuantity.value = "";
        addArticleError.classList.add("add-article-error");
        addCategorieError.classList.add("add-categorie-error");
        addquantityError.classList.add("add-quantity-error");
      }
      errorInputAdd(inputAddValue);
    };

    const errorInputAdd = (inputAddValue) => {
      console.log(
        inputAddValue[0],
        inputAddValue[1],
        inputAddValue[2],
        inputAddValue[3]
      );
      if (
        inputAddValue[0] === "" &&
        inputAddValue[1] === "" &&
        inputAddValue[2] === "" &&
        inputAddValue[3] === ""
      ) {
        addArticleError.classList.remove("add-article-error");
        addCategorieError.classList.remove("add-categorie-error");
        addquantityError.classList.remove("add-quantity-error");
      }
    };
    eventListenerAddArticle();
  };
  pageReady();
}
