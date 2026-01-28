interface Props {
	message: string;
	remaining: number;
}

const GameResult = ({ message, remaining }: Props) => {
	return (
		<div style={{ marginTop: 15 }}>
			<p>
				Lượt còn lại: <b>{remaining}</b>
			</p>
			<p style={{ fontWeight: 'bold' }}>{message}</p>
		</div>
	);
};

export default GameResult;
