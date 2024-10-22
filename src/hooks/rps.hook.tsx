import { useState } from "react"
import {choices, outcomes} from "../models/rps.model"


const RPS = () => {
    const [playerScore, setPlayerScore] = useState(0)
    const [computerScore, setComputerScore] = useState(0)
    const [playerChoice, setPlayerChoice] = useState<string | null>(null)
    const [computerChoice, setComputerChoice] = useState<string | null>(null)
    const [result, setResult] = useState<string | null>(null)

    const playRockPaperScissors = () => {
        if (!playerChoice) return

        const computerSelection = choices[Math.floor(Math.random() * choices.length)]
        setComputerChoice(computerSelection)
        let result = ""
        if (playerChoice === computerSelection) {
            result = "It's a tie!";
        } else if (outcomes[playerChoice] === computerSelection) {
            result = 'You win!';
            setPlayerScore((prevScore) => prevScore + 1);
        } else {
            result = 'Computer wins!';
            setComputerScore((prevScore) => prevScore + 1);
        }
        setResult(result);
    }

    return {
        playRockPaperScissors,
        playerScore, computerScore, 
        setPlayerChoice, playerChoice, computerChoice,
        result
    };
}

export default RPS;