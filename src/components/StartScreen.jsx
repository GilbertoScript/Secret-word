import styles from './StartScreen.module.css'

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
			<img 
				className={styles.cloud} 
				src="/urban-cloud.png" 
				alt="Imagem de uma nuvem para o cenário" 
			/>
			<img 
				className={styles.cloud2} 
				src="/urban-cloud.png" 
				alt="Imagem de uma nuvem para o cenário" 
			/>
		</div>
	)
}

export default StartScreen;