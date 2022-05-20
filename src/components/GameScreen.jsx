// import styles from './GameScreen.module.css'

const GameScreen = ({ verifyLetter }) => {

	return (
		<div>
			<h1>Game</h1>
			<button onClick={verifyLetter}>Fim de jogo</button>
		</div>
	)
}

export default GameScreen;