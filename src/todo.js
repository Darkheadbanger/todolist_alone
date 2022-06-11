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
const buttonSubmit = document.querySelector("#buttonAdd");

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

  renderingTodo(
    inputArticleValue,
    inputDescriptionValue,
    inputCategorieValue,
    inputQuantityValue
  ) {
    this.list.innerHTML = "";

    arrayText.forEach((item, index) => {
      if (!item.edit) {
        this.createToDoElementDom(
          item,
          index,
          inputArticleValue,
          inputDescriptionValue,
          inputCategorieValue,
          inputQuantityValue
        );
      } else {
        this.editToDoElement(item, index);
      }

      this.toDoDone(item);

      this.list.appendChild(this.li);
    });
  }

  createToDoElementDom(
    item,
    index,
    inputArticleValue,
    inputDescriptionValue,
    inputCategorieValue,
    inputQuantityValue
  ) {
    this.li = document.createElement("li");
    this.li.classList.add("list");
    // const dates = item.date;
    // const date =
    //   ("0" + dates.getDate()).slice(-2) +
    //   "/" +
    //   ("0" + dates.getMonth()).slice(-2) +
    //   "/" +
    //   dates.getFullYear();
    // const heure = dates.getHours() + ":" + dates.getMinutes();
    // <div class="col ms-custom-date mt-custom-date">
    //   <p class="fw-bold card-title text-light h-custom-date">${date}</p>
    //   <p class="fw-bold card-title text-light ms-3">${heure}</p>
    // </div>;

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
                  ${inputArticleValue}
                </p>
              </div>
              <!-- ici date -->>
            </div>
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
                ${inputDescriptionValue}
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
                Catégorie: ${inputCategorieValue}
              </p>
            </div>
            <div class="col ms-custom-categorie mt-3">
              <p
                class="fw-bold card-title text-custom-title w-custom-quantité"
              >
                Quantité: ${inputQuantityValue}
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
    const inputArticleValue = inputAddValue[0];
    const inputDescriptionValue = inputAddValue[1];
    const inputCategorieValue = inputAddValue[2];
    const inputQuantityValue = inputAddValue[3];

    this.creerToDo(
      inputArticleValue,
      inputDescriptionValue,
      inputCategorieValue,
      inputQuantityValue
    ); // Ou updateToDoList à voir

    this.filledInputAddToZero(inputAddValue, event);
    this.errorInputAdd(inputAddValue, event);
    this.renderingTodo(
      inputAddValue[0],
      inputAddValue[1],
      inputAddValue[2],
      inputAddValue[3]
    );
  }

  creerToDo(
    item,
    inputArticleValue,
    inputDescriptionValue,
    inputCategorieValue,
    inputQuantityValue
  ) {
    if (
      !inputArticleValue &&
      !inputDescriptionValue &&
      !inputCategorieValue &&
      !inputQuantityValue
    ) {
      this.errorInputAdd();
    } else {
      this.createdAndPushedToDo(
        inputArticleValue,
        inputDescriptionValue,
        inputCategorieValue,
        inputQuantityValue
      );
    }
  }

  createdAndPushedToDo(
    inputArticleValue,
    inputDescriptionValue,
    inputCategorieValue,
    inputQuantityValue
  ) {
    const newTodo = {
      textArticle: inputArticleValue,
      textDescription: inputDescriptionValue,
      textCategorie: inputCategorieValue,
      textQuantity: inputQuantityValue,
      done: false,
      date: new Date(),
      edit: false,
    };
    console.log(newTodo);
    arrayText.push(newTodo);
  }
  errorInputAdd() {
    addArticleError.classList.remove("add-article-error");
    addCategorieError.classList.remove("add-categorie-error");
    addquantityError.classList.remove("add-quantity-error");
    return;
  }

  filledInputAddToZero(inputAddValue, event) {
    if (inputAddValue) {
      inputArticle.value = "";
      inputdescription.value = "";
      inputCategorie.value = "";
      inputQuantity.value = "";
      event.preventDefault();
    }
  }
}
export default Todo;
