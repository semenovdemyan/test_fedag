import React, { useState, useEffect } from 'react';

export const TodoList = () => {
  // Добавляем состояния для хранения данных, ошибки и статуса загрузки
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Функция получения данных:
    const fetchTodos = async () => {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/todos'
        );
        if (!response.ok) {
          throw new Error(
            'Не удалось загрузить список задач, попробуйте обновить страницу'
          );
        }
        const result = await response.json();
        setTodos(result); // Сохраняем полученные данные
        setLoading(false); // Останавливаем индикатор загрузки
      } catch (error) {
        setError(error.message); // При ошибке фиксируем её в сообщении
        setLoading(false); // Останавливаем индикатор загрузки
      }
    };

    fetchTodos(); // Вызываем функцию
  }, []); // Добавляем пустой массив зависимостей для вызова

  // Если идёт загрузка:
  if (loading) {
    return <p>Идёт загрузка</p>;
  }

  // Если произошла ошибка при загрузке:
  if (error) {
    return <p>Ошибка: {error}</p>;
  }
  // Возвращаем jsx разметку компонента (списка):
  return (
    <>
      <h1>Список задач</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input type="checkbox" checked={todo.completed} readOnly />
            {todo.title}
          </li>
        ))}
      </ul>
    </>
  );
};
