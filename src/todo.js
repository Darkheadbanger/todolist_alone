// Créer la classe todolist
class ToDoList {
  constructor(_text) {
    this.toDoListText = _text;
    this.arrayText = [];
    this.idCompleted = false;
  }

  showText() {
    console.log(this.arrayText, this.toDoListText);
  }
}

// Export
export { ToDoList };
