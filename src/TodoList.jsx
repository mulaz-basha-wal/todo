import { useContext } from "react";
import TodoItem from "./TodoItem";
import TodosContext from "./TodosContext";

export default function TodoList() {
    const reducerValue = useContext(TodosContext);
    return (
        <div>
            {reducerValue.state.todos.length > 0 ? (
                reducerValue.state.todos.map((todo) => {
                    return (
                        <TodoItem
                            key={todo.id}
                            todo={todo}
                            dispatch={reducerValue.dispatch}
                        />
                    );
                })
            ) : (
                <h1 className="title">No ToDos available</h1>
            )}
        </div>
    );
}
