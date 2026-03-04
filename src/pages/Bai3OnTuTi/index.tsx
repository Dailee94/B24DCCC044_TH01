import { useState } from 'react';

type Choice = 'Kéo' | 'Búa' | 'Bao';

const choices: Choice[] = ['Kéo', 'Búa', 'Bao'];

export default function RockPaperScissors() {
	const [result, setResult] = useState<string>('');
	const [history, setHistory] = useState<{ playerChoice: Choice; computerChoice: Choice; gameResult: string }[]>([]);

	const playGame = (playerChoice: Choice) => {
		const randomIndex = Math.floor(Math.random() * choices.length);
		const computerChoice = choices[randomIndex];

		let gameResult = '';

		// So sánh kết quả
		if (playerChoice === computerChoice) {
			gameResult = 'Hòa';
		} else if (
			(playerChoice === 'Kéo' && computerChoice === 'Bao') ||
			(playerChoice === 'Bao' && computerChoice === 'Búa') ||
			(playerChoice === 'Búa' && computerChoice === 'Kéo')
		) {
			gameResult = 'Thắng';
		} else {
			gameResult = 'Thua';
		}

		setResult(`Bạn: ${playerChoice} | Máy: ${computerChoice} → ${gameResult}`);

		setHistory([
			{
				playerChoice,
				computerChoice,
				gameResult,
			},
			...history,
		]);
	};

	return (
		<div style={{ textAlign: 'center', marginTop: 40 }}>
			<h2>Trò chơi Oẳn Tù Tì</h2>

			<div>
				{choices.map((choice) => (
					<button key={choice} onClick={() => playGame(choice)} style={{ margin: 10, padding: '8px 16px' }}>
						{choice}
					</button>
				))}
			</div>

			<h3>{result}</h3>

			<h3>Lịch sử ván đấu</h3>
			<ul style={{ listStyle: 'none', padding: 0 }}>
				{history.map((item, index) => (
					<li key={index}>
						Bạn: {item.playerChoice} | Máy: {item.computerChoice} → {item.gameResult}
					</li>
				))}
			</ul>
		</div>
	);
}
