import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';

const ListTodo = props => {
  const { todo, deleteTodo, editTodo } = props;
  return (
    <div className="mt-2">
      <div className="bg-slate-300  flex justify-between p-4 rounded-xl font-semibold text-xl">
        <p className="w-4/5">{todo.task}</p>
        <FontAwesomeIcon
          icon={faDeleteLeft}
          size="2x"
          className="hover:cursor-pointer"
          onClick={() => deleteTodo(todo.id)}
        />
        <FontAwesomeIcon
          icon={faPenToSquare}
          size="2x"
          className="hover:cursor-pointer"
          onClick={() => editTodo(todo.id)}
        />
      </div>
    </div>
  );
};

export default ListTodo;
