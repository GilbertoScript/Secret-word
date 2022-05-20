// Css
import './App.css';

// React
import { useCallback, useEffect, useState } from 'react'

// Data
import { wordsList } from './data/words'

// Componentes
import StartScreen from './components/StartScreen'
import GameScreen from './components/GameScreen'
import EndScreen from './components/EndScreen'

const stages = [
    {id: 1, name: 'start'},
    {id: 2, name: 'game'},
    {id: 3, name: 'end'}
]

function App() {

    const [gameStage, setGameStage] = useState(stages[0].name)
    const [words] = useState(wordsList)

    const [pickedWord, setPickedWord] = useState('')
    const [pickedCategory, setPickedCategory] = useState('')
    const [letters, setLetters] = useState([])

    const pickWordAndCategory = () => {

        // Pick a random category
        const categories = Object.keys(words)
        const category = categories[Math.floor(Math.random() * categories.length)]

        // Pick a random word
        const word = words[category][Math.floor(Math.random() * words[category].length)]

        return {word, category}
    }
    
    // Função para iniciar o jogo
    const startGame = () => {

        // Escolher a palavra e categoria
        const {word, category} = pickWordAndCategory()

        // Criando um array de letras da palavra escolhida 
        let wordLetters = word.split('')
        wordLetters = wordLetters.map((l) => l.toLowerCase())

        // Setar os states
        setPickedWord(word)
        setPickedCategory(category)
        setLetters(wordLetters)

        console.log(pickedWord, pickedCategory, letters)

        setGameStage(stages[1].name)
    }

    // Processar as letras no jogo
    const verifyLetter = () => {

        setGameStage(stages[2].name)
    }

    // Função para reiiniciar o jogo
    const retryGame = () => {

        setGameStage(stages[0].name)
    }

    return (
        <div className="App">
            
            {gameStage === 'start' && <StartScreen startGame={startGame} />}
            {gameStage === 'game' && <GameScreen verifyLetter={verifyLetter} />}
            {gameStage === 'end' && <EndScreen retryGame={retryGame} />}
        </div>
    );
}

export default App;
