// Css
import styles from './EndScreen.module.css'

// Components
import CloudImage from './CloudImage'

const EndScreen = ({ retryGame, score }) => {

	return (
		<div className={styles.endContainer}>
			<h1>Fim do jogo</h1>
			<h2>
				A sua pontuação foi: 
				<span> {score} </span>
			</h2>
			<button 
				onClick={retryGame}
				className="btn-primary"
			>
				Reiniciar o game
			</button>
			<CloudImage />
		</div>
	)
}

export default EndScreen;