import { useState } from 'react';
import GameInput from './GameInput';
import GameResult from './GameResult';

const Bai1 = () => {
	// Sinh số ngẫu nhiên 1–100
	const [randomNumber] = useState<number>(Math.floor(Math.random() * 100) + 1);

	const [message, setMessage] = useState<string>('');
	const [remaining, setRemaining] = useState<number>(10);
	const [isFinished, setIsFinished] = useState<boolean>(false);

	// Hàm xử lý đoán số
	const handleGuess = (guess: number) => {
		if (isFinished) return;

		const newRemaining = remaining - 1;
		setRemaining(newRemaining);

		if (guess === randomNumber) {
			setMessage('🎉 Chúc mừng! Bạn đã đoán đúng!');
			setIsFinished(true);
		} else if (guess < randomNumber) {
			setMessage('📉 Bạn đoán quá thấp!');
		} else {
			setMessage('📈 Bạn đoán quá cao!');
		}

		if (newRemaining === 0 && guess !== randomNumber) {
			setMessage(`❌ Hết lượt! Số đúng là ${randomNumber}`);
			setIsFinished(true);
		}
	};

	return (
		<div style={styles.container}>
			<h2>🎯 Game Đoán Số</h2>
			<p>Đoán số từ 1 đến 100</p>

			<GameInput onGuess={handleGuess} disabled={isFinished} />
			<GameResult message={message} remaining={remaining} />
		</div>
	);
};

const styles = {
	container: {
		width: 350,
		padding: 20,
		borderRadius: 10,
		background: '#fff',
		margin: '50px auto',
		textAlign: 'center' as const,
		boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
	},
};

export default Bai1;
