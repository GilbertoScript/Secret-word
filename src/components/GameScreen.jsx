import styles from './GameScreen.module.css'

const GameScreen = ({ verifyLetter }) => {

	return (
		<div className={styles.game}>
			<p className={styles.points}>
				<span>Pontuação: 000</span>
			</p>
			<h1>Adivinhe a palavra</h1>
			<h2 className={styles.tip}>
				Dica sobre a palavra: 
				<span> Dica </span>
			</h2>

			<div className={styles.wordContainer}>
				<span className={styles.letter}>A</span>
				<span className={styles.blankSquare}></span>
			</div>

			<div className={styles.letterContainer}>
				<p>Tente adivinhar uma letra da palavra:</p>

				<form>
					<input type="text" maxLength="1" required />
					<button className="btn-primary">Jogar!</button>
				</form>
			</div>

			<div className={styles.wrongLettersContainer}>
				<p>Letras já utilizadas: </p>
				<span>a, </span>
				<span>b, </span>
			</div>
		</div>
	)
}

export default GameScreen;