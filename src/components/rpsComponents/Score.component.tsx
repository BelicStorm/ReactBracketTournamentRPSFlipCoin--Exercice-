interface ScoreProps {
    playerScore:number,
    computerScore:number,
}
const RPSScore = ({playerScore, computerScore}:ScoreProps) => {
    return (
        <div className="bg-black h-[100%] text-white col-span-3 md:col-span-1 bg-secondary rounded-lg p-4 flex flex-col justify-between">
            <p className="font-bold text-[18px] flex justify-center">Score</p>
            <p className="font-semibold">Player: {playerScore}</p>
            <p className="font-semibold">Computer: {computerScore}</p>
        </div>
    );
}

export default RPSScore;