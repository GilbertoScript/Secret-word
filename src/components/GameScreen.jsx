// Css
import styles from './GameScreen.module.css'

// Components
import CloudImage from './CloudImage'

// Hooks
import { useState, useRef, useEffect } from 'react'

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

	// Letra enviada pelo formulário 
	const [letter, setLetter] = useState('')
	const letterInputRef = useRef(null)
	const spanScoreRef = useRef()

	const handleSubmit = (e) => {
		e.preventDefault()

		verifyLetter(letter)

		// Limpar input e aplicar foco automaticamente
		setLetter('')
		letterInputRef.current.focus()
	}

	useEffect(() => {

		if(score >= 100) {

			setTimeout(() => {
				spanScoreRef.current.style.backgroundColor = ''
				spanScoreRef.current.style.color = ''

			}, 2000)

			spanScoreRef.current.style.backgroundColor = '#FFF'
			spanScoreRef.current.style.color = '#91E7D9'
		}
		
	}, [score])

	return (
		<div className={styles.game}>
			<p className={styles.points}>
				<span 
					className={styles.spanScore} 
					ref={spanScoreRef}
				>
					Pontuação: {score}
				</span>
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

				<form onSubmit={handleSubmit}>
					<input 
						type="text" 
						maxLength="1" 
						required 
						onChange={(e) => {setLetter(e.target.value)}}
						value={letter} 
						ref={letterInputRef}
						pattern="[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$"
					/>
					<button className="btn-primary">Jogar!</button>
				</form>
			</div>

			<div className={styles.wrongLettersContainer}>
				<span>Letras já utilizadas: </span>
				{wrongLetters.map((letter, i) => (

					<span key={i}><strong>{letter}, </strong></span>
				))}
			</div>

			<CloudImage />
		</div>
	)
}

export default GameScreen;