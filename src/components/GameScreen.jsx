// import styles from './GameScreen.module.css'

const GameScreen = ({ verifyLetter }) => {

	return (
		<div className="game">
			<p className="points">
				<span>Pontuação: 000</span>
			</p>
			<h1>Secret Word</h1>
			<h2 className="tip">
				Adivinhe a palavra <br />
				<br />
				Dica: .......
			</h2>

			<div className="wordContainer">
				<span className="letter">A</span>
				<span className="blankSquare"></span>
			</div>

			<div className="letterContainer">
				<p>Tente adivinhar uma letra da palavra:</p>

				<form>
					<input type="text" maxLength="1" required />
					<button className="btn-primary">Jogar</button>
				</form>
			</div>

			<div className="wrongLettersContainer">
				<p>Letras já utilizadas: </p>
				<span>a,</span>
				<span>b,</span>
			</div>
		</div>
	)
}

export default GameScreen;