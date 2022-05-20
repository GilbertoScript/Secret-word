// import styles from './StartScreen.module.css'

const StartScreen = ({ startGame }) => {

	return (
		<div>
			<h1>Secret Word</h1>
			<h2>Clique no botão abaixo para começar a jogar</h2>
			<button onClick={startGame} className="btn-primary">
				Começar o jogo
			</button>
		</div>
	)
}

export default StartScreen;