// import styles from './EndScreen.module.css'

const EndScreen = ({retryGame}) => {

	return (
		<>
			<button onClick={retryGame}>Reiniciar o game</button>
		</>
	)
}

export default EndScreen;