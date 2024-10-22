import { choices } from "../../models/rps.model";
import Button from "../Button.component";
import RPSIcon from "./RPSIcons.component";

interface PlayerButtonProps{
    playerChoice:string | null,
    action: (e:string)=>void
}

const RPSPlayerChoiceButtons = ({action, playerChoice}:PlayerButtonProps) => {
    return ( 
        <div className="flex flex-col rounded-lg border border-input col-span-3 md:col-span-2 text-accent-foreground p-4 gap-[12px]">
            <h2 className="font-bold text-[18px] flex justify-center">Choose your move:</h2>
            <div className="flex justify-around">
              {choices.map((choice) => (
                <Button
                  key={choice}
                  onClick={() => action(choice)}
                  variant={playerChoice === choice ? "default" : "outline"}
                  className="flex flex-col items-center"
                >
                  <RPSIcon choice={choice}/>
                  <span className="mt-1 capitalize">{choice}</span>
                </Button>
              ))}
            </div>
          </div>
     );
}
 
export default RPSPlayerChoiceButtons;