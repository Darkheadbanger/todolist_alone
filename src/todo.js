const arrayText = [
  {
    textArticle: "Article",
    textDescription: "Description",
    textCategorie: "Activiter",
    textQuantity: 5,
    done: false,
    date: new Date(),
    edit: false,
  },
];

// Créer la classe todolist
class Todo {
  constructor() {
    this.list = document.querySelector(".list-itmes");
    this.renderingTodo();
  }

  renderingTodo() {
    this.list.innerHTML = "";

    arrayText.forEach((item, index) => {
      if (!item.edit) {
        this.createToDoElement(item, index);
      }else{
        this.editToDoElement(item, index);
      }

      this.toDoDone(item); 
      this.list.appendChild(this.li);
    });
  }
  createToDoElement(item, index, id) {
    this.li = document.createElement("li");
    this.li.classList.add("list");
    const date =
      ("0" + item.date.getDate()).slice(-2) +
      "/" +
      ("0" + item.date.getMonth()).slice(-2) +
      "/" +
      item.date.getFullYear();
    const heure = item.date.getHours() + ":" + item.date.getMinutes();

    this.li.insertAdjacentHTML(
      "afterbegin",
      `<div class="col mb-4 mt-5 pe-4">
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
              <div class="col ms-custom-date mt-custom-date">
                <p
                  class="fw-bold card-title text-light h-custom-date"
                >
                  ${date}

                </p>
                <p class="fw-bold card-title text-light ms-3">
                   ${heure}
                </p>
              </div>
            </div>
          </div>
          <div class="row justify-content-md-end">
            <div class="col-6">
              <i
                class="fa-solid fa-pen-to-square fa-xl text-success modifier-article"
              ></i>
            </div>
            <div class="col-6">
              <i
                class="fa-solid fa-trash-can fa-xl text-danger delete-article"
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
                class="fa-solid fa-pen-to-square fa-xl text-success modifier-description"
              ></i>
            </div>
            <div class="col-6">
              <i
                class="fa-solid fa-trash-can fa-xl text-danger delete-description"
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
                class="fa-solid fa-pen-to-square fa-xl text-success modifier-categorie"
              ></i>
            </div>
            <div class="col-6">
              <i
                class="fa-solid fa-trash-can fa-xl text-danger delete-all"
              ></i>
            </div>
          </div>
        </div>
      </div>
      <a class="stretched-link" href="./detail.html"></a>
    </div>
  </div>
`
    );
  }

  toDoDone(item) {
    if (item.done) {
      this.spanTodo.classList.add("done");
      this.span.classList.add("done");
    }
  }
}
export default Todo;
