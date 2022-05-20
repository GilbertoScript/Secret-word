import styles from './StartScreen.module.css'

const StartScreen = ({ startGame }) => {

	return (
		<div className={styles.startContainer}>
			<h1>Secret Word</h1>
			<h2>Clique no botão abaixo para começar a jogar</h2>
			<button onClick={startGame} className={`${styles.playBtn} btn-primary`}>
				<img 
					src="/play.svg" 
					alt="Botão de jogar"
					height="22" 
				/> Play
			</button>
		</div>
	)
}

export default StartScreen;