export default function TodoItem(props) {
    return (
        <div className="todoItem">
            <span className="todoItemText">{props.todo.todoText}</span>
            <button
                className="todoDeleteButton"
                onClick={() => {
                    props.dispatch({ type: "delete", todoid: props.todo.id });
                }}
            >
                Remove
            </button>
        </div>
    );
}
