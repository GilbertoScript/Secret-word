// import styles from './EndScreen.module.css'

const EndScreen = ({ retryGame, score }) => {

	return (
		<>
			<h1>Fim do jogo</h1>
			<h2>A sua pontuação foi: <span>{score}</span></h2>
			<button onClick={retryGame}>Reiniciar o game</button>
		</>
	)
}

export default EndScreen;