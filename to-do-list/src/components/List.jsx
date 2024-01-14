import { useState } from 'react';
import FormInput from './FormInput';
import { v4 as uuid } from 'uuid';
import ListTodo from './ListTodo';
import EditForm from './EditForm';
const List = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = task => {
    setTodos([
      ...todos,
      {
        id: uuid(),
        task: task,
        isEditing: false,
        completed: false,
      },
    ]);
  };
  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const editTodo = id => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = (id, task) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  return (
    <div className="sm:w-1/2 mt-20 ">
      <FormInput addTodo={addTodo} />
      {todos.map(todo =>
        todo.isEditing ? (
          <EditForm editTask={editTask} task={todo} />
        ) : (
          <ListTodo
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        )
      )}
    </div>
  );
};

export default List;
