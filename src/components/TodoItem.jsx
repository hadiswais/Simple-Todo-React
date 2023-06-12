/* eslint-disable react/prop-types */
const TodoItem = ({ id, title, is_completed, toggleTodo, deleteTodo }) => {
  return (
    <li className="py-4">
      <div className="flex items-center">
        <input
          id={id}
          type="checkbox"
          checked={is_completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
          className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
        />
        <label htmlFor={id} className="ml-3 block text-gray-900 grow">
          <span className={`text-lg ${is_completed && "line-through"}`}>
            {title}
          </span>
        </label>
        <button
          onClick={() => deleteTodo(id)}
          className="bg-red-500 hover:bg-red-700 border-red-500 hover:border-red-700 text-sm border-4 text-white px-2 rounded"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
