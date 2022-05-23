import styles from './GameScreen.module.css'

const GameScreen = ({ 
	verifyLetter, 
	pickedWord, 
	pickedCategory, 
	letters, 
	guessedLetters, 
	wrongLetters,
	guesses,
	score
}) => {

	return (
		<div className={styles.game}>
			<p className={styles.points}>
				<span>Pontuação: {score}</span>
			</p>

			<h1>Adivinhe a palavra</h1>
			<h2 className={styles.tip}>
				Dica sobre a palavra: 
				<span> {pickedCategory} </span>
			</h2>

			<p>Você ainda tem <strong>{guesses}</strong> tentativa(s).</p>

			<div className={styles.wordContainer}>

				{/* Mapeamento das letras, se a letra já foi adivinha, exibir ela, 
				se não, exibir espaço vazio */}
				{letters.map((letter, i) => (

					guessedLetters.includes(letter) ? (

						<span key={i} className={styles.letter}>
							{letter}
						</span>
					) : (

						<span key={i} className={styles.blankSquare}></span>
					)	
				))}

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
				{wrongLetters.map((letter, i) => (

					<span key={i}>{letter}, </span>
				))}
			</div>
		</div>
	)
}

export default GameScreen;