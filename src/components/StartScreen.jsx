// Css
import styles from './StartScreen.module.css'

// Components
import CloudImage from './CloudImage'

const StartScreen = ({ startGame }) => {

	return (
		<div className={styles.startContainer}>
			<div>
				<h2>Secret</h2> 
				<h1>Word</h1>
			</div>
			<button onClick={startGame} className={`${styles.playBtn} btn-primary`}>
				<img 
					src="/play.svg" 
					alt="Botão de jogar"
					height="22" 
				/> Play
			</button>
			<CloudImage />
		</div>
	)
}

export default StartScreen;