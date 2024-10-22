import RPSIcon from "./RPSIcons.component";

interface ResultDisplaProps {
    playerChoice: string | null,
    computerChoice: string | null,
    result: string | null
}
const RPSResultDisplay = ({ computerChoice, playerChoice, result }: ResultDisplaProps) => {
    const SelectedArea = ({choice}:{choice:string}) => {
        return (
            <div className="mt-2 flex flex-col items-center">
                <RPSIcon choice={choice} />
                <p className="capitalize">{choice}</p>
            </div>
        )
    }
    return (
        <>
            <div className="col-span-3 bg-muted text-muted-foreground rounded-lg p-4 flex justify-around items-center">
                <div className="text-center rounded-lg border border-input p-[12px] min-w-[145px] min-h-[115px]">
                    <p className="font-semibold">You chose</p>
                    {playerChoice && <SelectedArea choice={playerChoice}/>}
                </div>
                <div className="text-center rounded-lg border border-input p-[12px] min-w-[145px] min-h-[115px]">
                    <p className="font-semibold">Computer chose</p>
                    {computerChoice && <SelectedArea choice={computerChoice}/>}
                </div>
            </div>
            <div className="col-span-3 text-center">
                <p className="text-lg font-semibold">{result || "Make your choice and click Play!"}</p>
            </div>
        </>
    );
}

export default RPSResultDisplay;