import { useEffect, useState } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

export interface Todo {
	id: number;
	text: string;
}

export default function Bai2() {
	const [todos, setTodos] = useState<Todo[]>([]);

	// Đọc dữ liệu từ localStorage khi load trang
	useEffect(() => {
		const data = localStorage.getItem('todoList');
		if (data) {
			setTodos(JSON.parse(data));
		}
	}, []);

	// Lưu vào localStorage mỗi khi todos thay đổi
	useEffect(() => {
		localStorage.setItem('todoList', JSON.stringify(todos));
	}, [todos]);

	const addTodo = (text: string) => {
		const newTodo: Todo = {
			id: Date.now(),
			text,
		};
		setTodos([...todos, newTodo]);
	};

	const deleteTodo = (id: number) => {
		setTodos(todos.filter((todo) => todo.id !== id));
	};

	const editTodo = (id: number, newText: string) => {
		setTodos(todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo)));
	};

	return (
		<div style={{ padding: 24, maxWidth: 400 }}>
			<h2>Bài 2: Todo List</h2>

			<TodoInput onAdd={addTodo} />

			<TodoList todos={todos} onDelete={deleteTodo} onEdit={editTodo} />
		</div>
	);
}
