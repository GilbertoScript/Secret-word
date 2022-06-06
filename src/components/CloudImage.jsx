import styles from './CloudImage.module.css'
import cloud from '../assets/urban-cloud.png'

const CloudImage = () => {

	return (
		<>
			<img 
				src={cloud}
				alt="Imagem de uma nuvem para o cenário" 
				className={`${styles.cloud}  ${styles.slideInDown}`} 
			/>
			<img 
				src={cloud}
				alt="Imagem de uma nuvem para o cenário" 
				className={`${styles.cloud2} ${styles.slideInDown}`} 
			/>
		</>
	)
}

export default CloudImage;