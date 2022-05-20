// Créer la classe todolist
class ToDoList {
  constructor(_list) {
    this.toDoListText = _list;
    this.arrayText = [{ text: "Je suis un todo", done: true, editMode: false }];
    this.idCompleted = false;
  }

  updateToDoList(text) {
    // displayTodo
    console.log(text);
    // for (const [index, value] of this.arrayText.entries()) {
    //   console.log(index, value);
    // }

    const todoArray = this.arrayText.map((todo, index) => {
      console.log(todo, index, text);
      if (todo.editMode) {
        return this.modifierToDoElement(todo, index);
      } else {
        return this.creerToDoElement(todo, index);
      }
    });

    toDoListText.innerHTML = "";
    returntoDoListText.append(...todoArray);
  }

  //   static creerToDoElement(text) {
  //     const li = document.createElement("li");
  //     const p = document.createElement("p");
  //     const deleteButton = document.createElement("button");
  //     const modifcationButton = document.createElement("button");
  //     deleteButton.innerText = "Supprimer";
  //     modifcationButton.innerText = "Modifier";
  //     deleteButton.classList.add("danger");
  //     deleteButton.classList.add("modification");

  //     li.innerHTML = `
  //     <span class="todo"></span>
  //     `;
  //     p.innerHTML = `${
  //       text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()
  //     }`;

  //     li.style.cursor = "pointer";

  //     li.append(p, modifcationButton, deleteButton);

  //     return li;
  //   }
  //   createToDo(text) {
  //     console.log(this.arrayText.push(text));
  //     this.toDoListText.append(ToDoList.creerToDoElement(text));
  //     this.updateToDoList();
  //   }

  //   effacerToDo() {
  //     this.updateToDoList();
  //   }

  //   modifierToDoElement() {
  //     updateToDoList();
  //   }
}

// Export
export { ToDoList };
