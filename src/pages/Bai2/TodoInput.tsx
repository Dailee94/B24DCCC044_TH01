import { useState } from 'react';

interface Props {
	onAdd: (text: string) => void;
}

export default function TodoInput({ onAdd }: Props) {
	const [text, setText] = useState('');

	const handleAdd = () => {
		if (!text.trim()) return;
		onAdd(text);
		setText('');
	};

	return (
		<div>
			<input value={text} onChange={(e) => setText(e.target.value)} placeholder='Nhập công việc' />
			<button onClick={handleAdd}>Thêm</button>
		</div>
	);
}
