import { useState } from 'react';
import { Todo } from './index';

interface Props {
	todos: Todo[];
	onDelete: (id: number) => void;
	onEdit: (id: number, text: string) => void;
}

export default function TodoList({ todos, onDelete, onEdit }: Props) {
	const [editId, setEditId] = useState<number | null>(null);
	const [editText, setEditText] = useState('');

	const startEdit = (todo: Todo) => {
		setEditId(todo.id);
		setEditText(todo.text);
	};

	const saveEdit = (id: number) => {
		onEdit(id, editText);
		setEditId(null);
		setEditText('');
	};

	return (
		<ul>
			{todos.map((todo) => (
				<li key={todo.id}>
					{editId === todo.id ? (
						<>
							<input value={editText} onChange={(e) => setEditText(e.target.value)} />
							<button onClick={() => saveEdit(todo.id)}>Lưu</button>
						</>
					) : (
						<>
							<span>{todo.text}</span>
							<button onClick={() => startEdit(todo)}>Sửa</button>
							<button onClick={() => onDelete(todo.id)}>Xóa</button>
						</>
					)}
				</li>
			))}
		</ul>
	);
}
