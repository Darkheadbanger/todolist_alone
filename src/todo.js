const arrayText = [
  {
    textArticle: "Article",
    textDescription: "Description",
    textCategorie: "Categorie",
    textQuantity: "Quantity",
    done: false,
    date: new Date(),
    edit: false,
  },
];

// Créer la classe todolist
class Todo {
  constructor() {
    this.list = document.querySelector(".list-itmes");
    this.render();
  }

  render() {
    const todoList = arrayText.map((item, index) => {
      if (!arrayText.edit) {
        return this.createToDoElement(item, index);
      }
      // else {
      //   return this.editToDoItem(item, index);
      // }
    });
    // On met toujours à zero
    this.list.innerHTML = "";
    console.log(todoList);
    const todoLists = this.list.appendChild(todoList);
    console.log(todoLists);
  }

  createToDoElement(item, index) {
    this.li = document.createElement("li");
    this.li.classList.add("list");

    this.divCol = document.createElement("div");
    const colDiv = ["col", "mb-4", "mt-5", "pe-4"];
    this.divCol.classList.add(...colDiv);

    this.divCard = document.createElement("div");
    const cardDiv = ["card", "card__element", "card--modifier", "rounded"];
    this.divCard.classList.add(...cardDiv);

    // Card header
    this.headerDiv = document.createElement("div");
    const divHeader = [
      "card-header",
      "card-header__element",
      "card-header--modifier",
    ];
    this.headerDiv.classList.add(...divHeader);

    this.divFlexBetween = document.createElement("div");
    const flexDiv = ["d-flex", "justify-content-between", "align-items-center"];
    this.divFlexBetween.classList.add(...flexDiv);

    this.divFlexCenter = document.createElement("div");
    const centerFlexDiv = ["d-flex", "align-items-center"];
    this.divFlexCenter.classList.add(...centerFlexDiv);

    this.span = document.createElement("span");
    this.span.classList.add("todo");

    // Row 1

    this.divRow = document.createElement("div");
    const rowDiv = ["row", "row-cols-8"];
    this.divRow.classList.add(...rowDiv);

    this.divColArticle = document.createElement("div");
    const articleColDiv = ["col", "ms-3", "mt-3"];
    this.divColArticle.classList.add(...articleColDiv);

    this.pArticle = document.createElement("p");
    const articleP = ["fw-bold", "card-title", "text-custom-title"];
    this.pArticle.classList.add(...articleP);

    this.divColDate = document.createElement("div");
    const dateColDiv = ["col", "ms-custom-date", "mt-custom-date"];
    this.divColDate.classList.add(...dateColDiv);

    this.pDate = document.createElement("p");
    const dateP = ["fw-bold", "card-title", "text-light", "h-custom-date"];
    this.pDate.classList.add(...dateP);

    this.pHeure = document.createElement("p");
    const heureP = ["fw-bold", "card-title", "text-light", "ms-3"];
    this.pHeure.classList.add(...heureP);

    // Fin row 1

    // Row 2
    // col 1
    this.divRowPenToSquare = document.createElement("div");
    const penToSquareDivRow = ["row", "justify-content-md-end"];
    this.divRow.classList.add(...penToSquareDivRow);

    this.divPenToSquare = document.createElement("div");
    this.divPenToSquare.classList.add("col-6");

    // Fin col 1
    // col2

    this.modified = document.createElement("i");
    const modification = [
      "fa-solid",
      "fa-pen-to-square",
      "fa-xl",
      "text-success",
    ];
    this.modified.classList.add(...modification);

    this.thrashCan = document.createElement("i");
    const deleted = ["fa-solid", "fa-trash-can", "fa-xl", "text-danger"];
    this.thrashCan.classList.add(...deleted);

    // Fin card header

    // Card body
    this.divBody = document.createElement("div");
    const bodyDiv = ["card-body", "card-body__element"];
    this.divBody.classList.add(...bodyDiv);

    this.divFlexBetween = document.createElement("div");
    const flexBody = [
      "d-flex", 
      "justify-content-between",
      "align-items-center",
    ];
    this.divFlexBetween.classList.add(...flexBody);

    this.divFlexCenter = document.createElement("div");
    const flexCenterDiv = [
      "d-flex",
      "align-items-center",
      "mr-custom-xs-button",
    ];
    this.divFlexCenter.classList.add(...flexCenterDiv);

    this.spanTodo = document.createElement("span");
    this.spanTodo.classList.add("todo");

    this.divColDescription = document.createElement("div");
    const descriptionColDiv = ["col", "ms-3", "mt-2"];
    this.divColDescription.classList.add(...descriptionColDiv);

    this.pDescription = document.createElement("div");
    const descriptionP = ["fw-bold", "card-title", "text-custom-title"];
    this.pDescription.classList.add(...descriptionP);

    // Modifier et supprimer fontawesome
    this.divRowFontAwesome = document.createElement("div");
    const fontAwesimeDivRow = [
      "row",
      "justify-content-md-end",
      "mr-custom-xs-button",
    ];
    this.divRowFontAwesome.classList.add(...fontAwesimeDivRow);

    this.divColFontAwesome = document.createElement("div");
    this.divColFontAwesome.classList.add("col-6");

    this.modified2 = document.createElement("i");
    const modification2 = [
      "fa-solid",
      "fa-pen-to-square",
      "fa-xl",
      "text-success",
    ];
    this.modified2.classList.add(...modification2);

    this.divColFontAwesome = document.createElement("div");
    this.divColFontAwesome.classList.add("col-6");

    this.thrashCan2 = document.createElement("i");
    const deleted2 = ["fa-solid", "fa-trash-can", "fa-xl", "text-danger"];
    this.thrashCan2.classList.add(...deleted2);

    // Fin card body
    // card-footer

    this.divFooter = document.createElement("div");
    const footerDiv = [
      "card-footer",
      "card-footer____element",
      "card-footer--modifier",
      "border-0",
      "bg-light",
    ];
    this.divFooter.classList.add(...footerDiv);

    this.divFlexBetweenFooter = document.createElement("div");
    const flexBetweenFooter = [
      "d-flex",
      "justify-content-between",
      "align-items-center",
    ];
    this.divFlexBetweenFooter.classList.add(...flexBetweenFooter);

    this.divFlexCenterFooter = document.createElement("div");
    const flexCenterFooter = ["d-flex", "align-items-center"];
    this.divFlexCenterFooter.classList.add(...flexCenterFooter);

    this.divColFooter = document.createElement("div");
    const colFooterDiv = ["col", "ms-custom-categorie", "mt-3"];
    this.divColFooter.classList.add(...colFooterDiv);

    this.pColFooter = document.createElement("p");
    const colFooterP = [
      "fw-bold",
      "card-title",
      "text-custom-title",
      "w-custom-categorie",
    ];
    this.pColFooter.classList.add(...colFooterP);

    this.divColFooter2 = document.createElement("div");
    const colFooterDiv2 = ["col", "ms-custom-categorie", "mt-3"];
    this.divColFooter2.classList.add(...colFooterDiv2);

    this.pColFooter2 = document.createElement("p");
    const colFooterP2 = [
      "fw-bold",
      "card-title",
      "text-custom-title",
      "w-custom-quantité",
    ];
    this.pColFooter2.classList.add(...colFooterP2);

    this.footerLogoDiv = document.createElement("div");
    const divFooterLogo = ["row", "justify-content-md-end"];
    this.footerLogoDiv.classList.add(...divFooterLogo);

    this.footerLogoColDiv = document.createElement("div");
    this.footerLogoDiv.classList.add("col-6");

    this.modified3 = document.createElement("i");
    const modification3 = [
      "fa-solid",
      "fa-pen-to-square",
      "fa-xl",
      "text-success",
    ];
    this.modified3.classList.add(...modification3);

    this.footerLogoColDiv = document.createElement("div");

    this.footerLogoColDiv.classList.add("col-6");

    this.thrashCan3 = document.createElement("i");
    const deleted3 = ["fa-solid", "fa-trash-can", "fa-xl", "text-danger"];
    this.thrashCan3.classList.add(...deleted3);

    this.stretchedLink = document.createElement("a");
    this.stretchedLink.classList.add("stretched-link");

    this.thrashCan.setAttribute("data-id", index);
    this.thrashCan2.setAttribute("data-id", index);
    this.thrashCan3.setAttribute("data-id", index);

    this.modified.setAttribute("data-id", index);
    this.modified.setAttribute("data-id", index);
    this.modified.setAttribute("data-id", index);

    console.log(this.thrashCan, this.modified, this.li);

    this.li.appendChild(this.divCol);
    this.li.appendChild(this.divCard);
    this.li.appendChild(this.headerDiv);
    this.li.appendChild(this.headerDiv);
    this.li.appendChild(this.divFlexBetween);
    this.li.appendChild(this.divFlexCenter);
    this.li.appendChild(this.span);
    this.li.appendChild(this.divRow);
    this.li.appendChild(this.divColArticle);
    this.li.appendChild(this.pArticle);
    this.li.appendChild(this.divColDate);
    this.li.appendChild(this.pDate);
    this.li.appendChild(this.pHeure);
    this.li.appendChild(this.divRowPenToSquare);
    this.li.appendChild(this.divPenToSquare);
    this.li.appendChild(this.modified);
    this.li.appendChild(this.thrashCan);
    this.li.appendChild(this.divBody);
    this.li.appendChild(this.divFlexBetween);
    this.li.appendChild(this.divFlexCenter);
    this.li.appendChild(this.spanTodo);
    this.li.appendChild(this.divColDescription);
    this.li.appendChild(this.pDescription);
    this.li.appendChild(this.divRowFontAwesome);
    this.li.appendChild(this.divColFontAwesome);
    this.li.appendChild(this.modified2);
    this.li.appendChild(this.divColFontAwesome);
    this.li.appendChild(this.thrashCan2);
    this.li.appendChild(this.divFooter);
    this.li.appendChild(this.divFlexBetweenFooter);
    this.li.appendChild(this.divFlexCenterFooter);
    this.li.appendChild(this.divColFooter);
    this.li.appendChild(this.pColFooter);
    this.li.appendChild(this.divColFooter2);
    this.li.appendChild(this.pColFooter2);
    this.li.appendChild(this.footerLogoDiv);
    this.li.appendChild(this.footerLogoColDiv);
    this.li.appendChild(this.modified3);
    this.li.appendChild(this.footerLogoColDiv);
    this.li.appendChild(this.thrashCan3);
    this.li.appendChild(this.stretchedLink);

    this.toDoDone(item, index);
  }

  toDoDone(item) {
    // const 
    if (item.done) {
      this.li.classList.add("done");
      // this.li.classList.add("done"); 
    } else {
      this.li.classList.remove("done");
      // this.li.classList.remove("done");
    }
  }
}
export default Todo;

