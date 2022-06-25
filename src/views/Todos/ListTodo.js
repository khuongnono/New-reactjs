import React from "react";
import AddTodo from "./AddTodo";
import "./ListTodo.scss";
import { toast } from "react-toastify";
import Color from "../HOC/Color";

class ListTodo extends React.Component {
  state = {
    listTodos: [
      { id: "todo1", title: "Doing homework" },
      { id: "todo2", title: "Making video" },
      { id: "todo3", title: "fixing bug" },
    ],
    Editodo: {},
  };

  AddNewTodo = (Todo) => {
    //let currentListTodo = this.state.ListTodos;
    //currentListTodos.push(todo);
    this.setState({
      listTodos: [...this.state.listTodos, Todo],
      //listTodos: currentListTodos
    });
    toast.success("Wow so easy");
  };

  handleDeleteTodo = (todo) => {
    let currentTodo = this.state.listTodos;
    currentTodo = currentTodo.filter((item) => item.id !== todo.id);

    this.setState({
      listTodos: currentTodo,
    });
  };
  handleEditTodo = (todo) => {
    let { Editodo, listTodos } = this.state;

    let isEmptyObj = Object.keys(Editodo).length === 0;

    if (isEmptyObj === false && Editodo.id === todo.id) {
      let listTodosCopy = [...listTodos];

      let objIndex = listTodosCopy.findIndex((item) => item.id === todo.id);

      listTodosCopy[objIndex].title = Editodo.title;

      this.setState({
        listTodos: listTodosCopy,
        Editodo: {},
      });
      toast.success("Update todo succeed!");
      return;
    }

    this.setState({
      Editodo: todo,
    });
  };

  handleOnchangeEditTodo = (event) => {
    let EditTodoCopy = { ...this.state.Editodo };
    EditTodoCopy.title = event.target.value;

    this.setState({
      Editodo: EditTodoCopy,
    });
  };
  render() {
    let { listTodos, Editodo } = this.state;
    // let listTodos = this.state.listTodos
    let isEmptyObj = Object.keys(Editodo).length === 0;
    return (
      <>
        <p>SIMPLE TODO APP - FOREVER LOVE</p>

        <div className="list-todo-component">
          <AddTodo AddNewTodo={this.AddNewTodo} />

          <div className="list-todo-content">
            {listTodos && listTodos.length > 0 &&
              listTodos.map((item, index) => {
                return (
                  <div className="todo-child" key={item.id}>
                    {isEmptyObj === true ? (
                      <span>
                        {" "}
                        {index + 1} - {item.title}{" "}
                      </span>
                    ) : (
                      <>
                        {Editodo.id === item.id ? (
                          <span>
                            {index + 1} -
                            <input
                              value={Editodo.title}
                              onChange={(event) =>
                                this.handleOnchangeEditTodo(event)
                              }
                            />
                          </span>
                        ) : (
                          <span>
                            {" "}
                            {index + 1} - {item.title}{" "}
                          </span>
                        )}
                      </>
                    )}

                    <button
                      className="Edit"
                      onClick={() => this.handleEditTodo(item)}
                    >
                      {isEmptyObj === false && Editodo.id === item.id
                        ? "Save"
                        : "Edit"}
                    </button>
                    <button
                      className="Delete"
                      onClick={() => this.handleDeleteTodo(item)}
                    >
                      Delete
                    </button>
                  </div>
                );
              })}
          </div>
        </div>
      </>
    );
  }
}

export default Color(ListTodo);
