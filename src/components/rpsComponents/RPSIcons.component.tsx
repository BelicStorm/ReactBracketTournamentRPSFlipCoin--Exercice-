import { Hand, Scroll, Scissors } from "lucide-react"
const RPSIcon = ({choice}: {choice:string}) => {
    switch (choice) {
      case 'rock':
        return <Hand className="h-8 w-8" />
      case 'paper':
        return <Scroll className="h-8 w-8" />
      case 'scissors':
        return <Scissors className="h-8 w-8" />
      default:
        return null
    }
}

export default RPSIcon