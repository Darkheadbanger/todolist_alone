const arrayText = [
  {
    // textArticle: "Article",
    // textDescription: "Description",
    // textCategorie: "Activiter",
    // textQuantity: 5,
    // done: false,
    // date: new Date(),
    // edit: false,
  },
];

// DOM
const ul = document.querySelector(".list-itmes");
const formAdd = document.querySelector("#formAdd");
const inputArticle = document.querySelector("#input-article");
const inputdescription = document.querySelector("#input-description");
const inputCategorie = document.querySelector("#input-categorie");
const inputQuantity = document.querySelector("#input-quantity");
const addArticleError = document.querySelector(".add-article-error");
const addCategorieError = document.querySelector(".add-categorie-error");
const addquantityError = document.querySelector(".add-quantity-error");
// const buttonSubmit = document.querySelector("#buttonAdd");

// Créer la classe todolist
class Todo {
  constructor() {
    this.list = ul;
    this.renderingTodo();

    // EventListener

    formAdd.addEventListener("submit", (event) => {
      event.preventDefault();
      this.inputValue();
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
        event.target;
      },
      true
    );

    formAdd.addEventListener(
      "click",
      (event) => {
        event.target;
      },
      true
    );
  }

  renderingTodo() {
    arrayText.forEach((item, index) => {
      if (!item.edit) {
        this.createToDoElementDom(item, index);
      } else {
        this.editToDoElement(item, index);
      }

      this.toDoDone(item);

      // this.list.appendChild(this.li);
    });
    this.list.innerHTML = "";
    this.list.appendChild(this.li);
    // Ici la méthode push
    // this.createdAndPushedToDo(
    //   inputArticleValue,
    //   inputDescriptionValue,
    //   inputCategorieValue,
    //   inputQuantityValue
    // );
  }

  createToDoElementDom(item, index) {
    this.li = document.createElement("li");
    this.li.classList.add("list");
    console.log(item.date);
    // const date =
    //   ("0" + new Date().getDate()).slice(-2) +
    //   "/" +
    //   ("0" + new Date().getMonth()).slice(-2) +
    //   "/" +
    //   new Date().getFullYear();
    // const heure = new Date().getHours() + ":" + new Date().getMinutes();
    // console.log(date);
    // console.log(heure);

    const html = `<div class="col mb-4 mt-5 pe-4">
    <div class="card card__element card--modifier rounded">
      <div
        class="card-header card-header__element card-header--modifier"
      >
        <div
          class="d-flex justify-content-between align-items-center"
        >
          <div class="d-flex align-items-center">
            <span class="todo ${item.done ? done : ""}"></span>
            <div class="row row-cols-8">
              <div class="col ms-3 mt-3"> 
                <p class="fw-bold card-title text-custom-title">
                  ${item.textArticle}
                </p>  
              </div>
            </div>
          </div>
          <div class="col ms-custom-date mt-custom-date">
            <p class="fw-bold card-title text-light h-custom-date">${
              item.date
                ? ("0" + item.date.getDate()).slice(-2) +
                  "/" +
                  "/" +
                  ("0" + item.date.getMonth()).slice(-2) +
                  "/" +
                  ("0" + item.date.getFullYear())
                : ""
            }</p>
            <p class="fw-bold card-title text-light ms-3">${
              item.date
                ? item.date.getHours() + ":" + item.date.getMinutes()
                : ""
            }</p>
          </div>
          <div class="row justify-content-md-end">
            <div class="col-6">
              <i
                class="fa-solid fa-pen-to-square fa-xl text-success modifier-article" data-id=""
              ></i>
            </div>
            <div class="col-6">
              <i
                class="fa-solid fa-trash-can fa-xl text-danger delete-article" data-id=""
              ></i>
            </div>
          </div>
        </div>
      </div>
      <div class="card-body card-body__element">
        <div
          class="d-flex justify-content-between align-items-center"
        >
          <div
            class="d-flex align-items-center mr-custom-xs-button"
          >
            <span class="todo ${item.done ? done : ""}"></span>
            <div class="col ms-3 mt-2">
              <p class="fw-bold card-title text-custom-title">
                ${item.textDescription}
              </p>
            </div>
          </div>
          <div
            class="row justify-content-md-end mr-custom-xs-button"
          >
            <div class="col-6">
              <i
                class="fa-solid fa-pen-to-square fa-xl text-success modifier-description" data-id=""
              ></i>
            </div>
            <div class="col-6">
              <i
                class="fa-solid fa-trash-can fa-xl text-danger delete-description" data-id=""
              ></i>
            </div>
          </div>
        </div>
      </div>
      <div
        class="card-footer card-footer____element card-footer--modifier border-0 bg-light"
      >
        <div
          class="d-flex justify-content-between align-items-center"
        >
          <div class="d-flex align-items-center">
            <div class="col ms-custom-categorie mt-3">
              <p
                class="fw-bold card-title text-custom-title w-custom-categorie"
              >
                Catégorie: ${item.textCategorie}
              </p>
            </div>
            <div class="col ms-custom-categorie mt-3">
              <p
                class="fw-bold card-title text-custom-title w-custom-quantité"
              >
                Quantité: ${item.textQuantity}
              </p>
            </div>
          </div>
          <div class="row justify-content-md-end">
            <div class="col-6">
              <i
                class="fa-solid fa-pen-to-square fa-xl text-success modifier-categorie data-id=""
              ></i>
            </div>
            <div class="col-6">
              <i
                class="fa-solid fa-trash-can fa-xl text-danger delete-all" data-id=""
              ></i>
            </div>
          </div>
        </div>
      </div>
      <a class="stretched-link" href="./detail.html"></a>
    </div>
  </div>`;
    this.li.insertAdjacentHTML("afterbegin", html);
  }

  toDoDone(item) {
    if (item.done) {
      this.spanTodo.classList.add("done");
      this.span.classList.add("done");
    }
  }

  inputValue() {
    const inputAddValue = [
      inputArticle.value,
      inputdescription.value,
      inputCategorie.value,
      inputQuantity.value,
    ];
    this.creerToDoInputError(inputAddValue); // Ou updateToDoList à voir
    this.createdAndPushedToDo(
      inputArticle.value,
      inputdescription.value,
      inputCategorie.value,
      inputQuantity.value
    );
    this.filledInputAddToZero(inputAddValue, event);
    this.renderingTodo(
      inputAddValue[0],
      inputAddValue[1],
      inputAddValue[2],
      inputAddValue[3]
    );
  }

  creerToDoInputError(inputAddValue) {
    switch (true) {
      case inputAddValue[0] === "" &&
        inputAddValue[1] === "" &&
        inputAddValue[2] === "" &&
        inputAddValue[3] === "":
        this.errorInputAdd();
        break;
      case inputAddValue[1] === "" &&
        inputAddValue[2] === "" &&
        inputAddValue[3] === "":
        this.errorInputArticle();
        break;
      case inputAddValue[0] === "" &&
        inputAddValue[1] === "" &&
        inputAddValue[3] === "":
        this.errorInputCategorie();
        break;
      case inputAddValue[0] === "" &&
        inputAddValue[1] === "" &&
        inputAddValue[2] === "":
        this.errorInputQuantity();
        break;
      default:
        console.log("Vous avez réussi à ajouter un article todo");
    }
  }

  errorInputAdd() {
    addArticleError.classList.remove("add-article-error");
    addCategorieError.classList.remove("add-categorie-error");
    addquantityError.classList.remove("add-quantity-error");
  }
  errorInputArticle() {
    addCategorieError.classList.remove("add-categorie-error");
    addquantityError.classList.remove("add-quantity-error");
  }
  errorInputCategorie() {
    addArticleError.classList.remove("add-article-error");
    addquantityError.classList.remove("add-quantity-error");
  }
  errorInputQuantity() {
    addArticleError.classList.remove("add-article-error");
    addCategorieError.classList.remove("add-categorie-error");
  }

  createdAndPushedToDo(
    inputArticleValue,
    inputDescriptionValue,
    inputCategorieValue,
    inputQuantityValue
  ) {
    console.log(inputArticleValue);
    // Je l'ai mis dans createToDoElement, car c'est cette fonction qui permet de pusher l'input vers l'article
    const newTodo = {
      textArticle: inputArticleValue,
      textDescription: inputDescriptionValue,
      textCategorie: inputCategorieValue,
      textQuantity: inputQuantityValue,
      done: false,
      date: new Date(),
      edit: false,
    };
    const pushedTodo = arrayText.push(newTodo);
    console.log(pushedTodo);
    console.log(arrayText);
    this.renderingTodo(
      inputArticleValue,
      inputDescriptionValue,
      inputCategorieValue,
      inputQuantityValue
    );
    // this.createToDoElementDom(newTodo.date, newTodo.done, newTodo.edit);
  }

  filledInputAddToZero(inputAddValue) {
    if (inputAddValue) {
      inputArticle.value = "";
      inputdescription.value = "";
      inputCategorie.value = "";
      inputQuantity.value = "";
    }
  }
}
export default Todo;
