import styles from './StartScreen.module.css'

const StartScreen = ({ startGame }) => {

	return (
		<div className={styles.start}>
			<h1>Secret Word</h1>
			<h2>Clique no botão abaixo para começar a jogar</h2>
			<button onClick={startGame}>COMEÇAR O JOGO</button>
		</div>
	)
}

export default StartScreen;