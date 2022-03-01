import { Fragment, useReducer, useState } from "react";
import TodoList from "./TodoList";
import TodosContext from "./TodosContext";

export default function TodoForm() {
    const [todoItemText, setTodoItemText] = useState("");
    const TodoReducer = (state, action) => {
        if (action.type === "add") {
            return {
                todos: [
                    ...state.todos,
                    {
                        id: Date.now(),
                        todoText: todoItemText,
                    },
                ],
            };
        }
        if (action.type === "delete") {
            let updatedTodos = [];
            state.todos.filter((todo) => {
                if (action.todoid !== todo.id) {
                    updatedTodos.push(todo);
                }
            });
            return { todos: updatedTodos };
        }
        if (action.type === "clear") {
            return { todos: [] };
        }
    };

    const [state, dispatch] = useReducer(TodoReducer, { todos: [] });

    return (
        <Fragment>
            <input
                type="text"
                className="todoItemInput"
                placeholder="Enter Todo Item"
                value={todoItemText}
                onChange={(e) => {
                    setTodoItemText(e.target.value);
                }}
            />
            <div className="todoFormButtons">
                <button
                    className="clearAll"
                    onClick={() => {
                        dispatch({ type: "clear" });
                    }}
                >
                    Clear All
                </button>
                <button
                    className="addItem"
                    onClick={() => {
                        if (todoItemText.length > 0) {
                            dispatch({ type: "add" });
                        } else {
                            alert("Please Enter something to add ToDo");
                        }
                    }}
                >
                    Add
                </button>
            </div>
            <TodosContext.Provider value={{ state, dispatch }}>
                <TodoList />
            </TodosContext.Provider>
        </Fragment>
    );
}
