import { useState } from 'react';

interface Props {
	onGuess: (value: number) => void;
	disabled: boolean;
}

const GameInput = ({ onGuess, disabled }: Props) => {
	const [value, setValue] = useState<string>('');

	const handleClick = () => {
		const number = Number(value);
		if (number < 1 || number > 100) return;

		onGuess(number);
		setValue('');
	};

	return (
		<div>
			<input
				type='number'
				placeholder='Nhập số của bạn'
				value={value}
				disabled={disabled}
				onChange={(e) => setValue(e.target.value)}
				style={{ padding: 8, width: '100%' }}
			/>

			<button onClick={handleClick} disabled={disabled} style={{ marginTop: 10, padding: 8, width: '100%' }}>
				Đoán
			</button>
		</div>
	);
};

export default GameInput;
