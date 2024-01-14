import { useState } from 'react';

const FormInput = props => {
  const { addTodo } = props;
  const [value, setValue] = useState('');
  const handlesubmit = e => {
    e.preventDefault();
    if (value) {
      addTodo(value);
    }
    setValue('');
  };

  return (
    <form className="flex gap-3 mb-10" onSubmit={handlesubmit}>
      <input
        type="text"
        className="w-full p-3 rounded-lg sm:text-xl bg-slate-300 dark:bg-gray-300 dark:text-gray-100 font-semibold"
        placeholder="Your Task"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <button
        type="submit"
        className="px-8 py-3 font-semibold border  dark:border-gray-100 dark:text-gray-100 bg-blue-700 rounded-md "
      >
        Add Task
      </button>
    </form>
  );
};

export default FormInput;
