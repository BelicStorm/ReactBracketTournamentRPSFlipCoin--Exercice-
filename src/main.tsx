import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Button, RPSScore } from './components'
import RPS from './hooks/rps.hook'
import RPSPlayerChoiceButtons from './components/rpsComponents/PlayerChoiceButtons.component'
import RPSResultDisplay from './components/rpsComponents/RPSResult.component'
import COIN from './hooks/coin.hook'
import Coin from './components/coinComponents/coin.component'
import Tournament from './hooks/tournament.hook'


export default function GameComponent() {
  const { computerChoice, computerScore, playerChoice, playerScore, result, setPlayerChoice, playRockPaperScissors } = RPS()
  const { flipCoin, isFlipping, side } = COIN()


  return (
    <div className="p-[32px] flex flex-col justify-center items-center">
      <div className="relative flex flex-wrap justify-center items-center max-w-[720px] mx-auto p-4">
        <details className="js-details-item | contents group" name="details-center" open>
          <summary className="js-details-tab | flex justify-center items-center gap-4 order-0 p-2 me-4 font-bold select-none cursor-pointer rounded-md bg-gray-100 group-open:bg-gray-200">
            <span>Tournament Bracket</span>
          </summary>
          <div className="pt-4 w-full order-1">
            <div className="bg-white col-span-2 sm:col-span-1 md:col-span-5 rounded-xl overflow-hidden border border-input">
              <div className="flex flex-col gap-4 p-6">
                {/* Header */}
                <div className="col-span-3 bg-primary text-primary-foreground rounded-lg p-4 text-center">
                  <h1 className="text-2xl font-bold mb-4">Tournament Bracket Randomizer</h1>
                </div>
                <Tournament />
              </div>
            </div>
          </div>
        </details>

        <details className="js-details-item | contents group" name="details-center">
          <summary className="js-details-tab | flex justify-center items-center gap-4 order-0 p-2 me-4 font-bold select-none cursor-pointer rounded-md bg-gray-100 group-open:bg-gray-200">
            <span>RPS</span>
          </summary>
          <div className="pt-4 w-full order-1">
            <div className="bg-white col-span-2 sm:col-span-1 md:col-span-4 rounded-xl  overflow-hidden border border-input">
              <div className="grid grid-cols-3 gap-4 p-6">
                {/* Header */}
                <div className="col-span-3 bg-primary text-primary-foreground rounded-lg p-4 text-center">
                  <h1 className="text-2xl font-bold">R-P-S</h1>
                </div>

                {/* Score Display */}
                <RPSScore computerScore={computerScore} playerScore={playerScore} />

                {/* Player Choice */}
                <RPSPlayerChoiceButtons action={(e) => setPlayerChoice(e)} playerChoice={playerChoice} />

                {/* Results Display */}
                <RPSResultDisplay computerChoice={computerChoice} playerChoice={playerChoice} result={result} />
                <div className="col-span-3">
                  <Button onClick={playRockPaperScissors} disabled={!playerChoice} className="w-full">
                    Play Rock Paper Scissors
                  </Button>
                </div>

              </div>
            </div>
          </div>
        </details>

        <details className="js-details-item | contents group" name="details-center">
          <summary className="js-details-tab | flex justify-center items-center gap-4 order-0 p-2 me-4 font-bold select-none cursor-pointer rounded-md bg-gray-100 group-open:bg-gray-200">
            <span>Flip a coin</span>
          </summary>
          <div className="pt-4 w-full order-1">
            <div className="bg-black col-span-2 sm:col-span-1 md:col-span-1 rounded-xl  overflow-hidden text-white">
              <div className="flex flex-col justify-between h-full gap-4 p-6">
                {/* Header */}
                <div className="col-span-3 bg-primary text-primary-foreground rounded-lg text-center">
                  <h1 className="text-3xl font-bold">FlipCoin</h1>
                </div>
                <Coin isFlipping={isFlipping} side={side} />
                <Button onClick={flipCoin} className="w-full" variant='outline'>
                  Flip a Coin
                </Button>
              </div>
            </div>
          </div>
        </details>
      </div>
    </div>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GameComponent />
  </StrictMode>,
)