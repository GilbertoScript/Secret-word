import styles from './CloudImage.module.css'

const CloudImage = () => {

	return (
		<>
			<img 
				className={`${styles.cloud}  ${styles.slideInDown}`} 
				src="/urban-cloud.png" 
				alt="Imagem de uma nuvem para o cenário" 
			/>
			<img 
				className={`${styles.cloud2} ${styles.slideInDown}`} 
				src="/urban-cloud.png" 
				alt="Imagem de uma nuvem para o cenário" 
			/>
		</>
	)
}

export default CloudImage;