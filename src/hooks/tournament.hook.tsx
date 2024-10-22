import { useState } from "react";
import { Button, Input } from "../components";

const Tournament = () => {
    const [teams, setTeams] = useState<string[]>([])
    const [newTeam, setNewTeam] = useState("")
    const [bracket, setBracket] = useState<string[][][]>([])

    const addTeam = (e: React.FormEvent) => {
        e.preventDefault()
        if (newTeam.trim() !== "") {
            setTeams([...teams, newTeam.trim()])
            setNewTeam("")
        }
    }

    const removeTeam = (index: number) => {
        setTeams(teams.filter((_, i) => i !== index))
    }

    const randomizeBracket = () => {
        if (teams.length < 2) {
            alert("Please add at least 2 teams to create a bracket.")
            return
        }

        const shuffled = [...teams].sort(() => Math.random() - 0.5)
        const rounds = Math.ceil(Math.log2(shuffled.length))
        const totalSlots = Math.pow(2, rounds)
        const byes = totalSlots - shuffled.length

        // Add byes to the shuffled array
        for (let i = 0; i < byes; i++) {
            shuffled.push("BYE")
        }

        const newBracket: string[][][] = []
        for (let round = 0; round < rounds; round++) {
            const roundMatches: string[][] = []
            const matchesInRound = totalSlots / Math.pow(2, round + 1)
            for (let match = 0; match < matchesInRound; match++) {
                if (round === 0) {
                    roundMatches.push([shuffled[match * 2], shuffled[match * 2 + 1]])
                } else {
                    roundMatches.push(["TBD", "TBD"])
                }
            }
            newBracket.push(roundMatches)
        }

        setBracket(newBracket)
    }

    const selectWinner = (roundIndex: number, matchIndex: number, winnerIndex: number) => {
        const newBracket = [...bracket]
        const winner = newBracket[roundIndex][matchIndex][winnerIndex]

        // Update the current match with the winner
        newBracket[roundIndex][matchIndex] = [winner, winner]

        // If there's a next round, update the next match
        if (roundIndex + 1 < newBracket.length) {
            const nextMatchIndex = Math.floor(matchIndex / 2)
            const nextMatchPosition = matchIndex % 2
            newBracket[roundIndex + 1][nextMatchIndex][nextMatchPosition] = winner
        }

        setBracket(newBracket)
    }

    const isMatchDecided = (match: string[]) => match[0] === match[1] && match[0] !== "TBD"

    return (
        <div className="container mx-auto p-4">
            <form onSubmit={addTeam} className="mb-4">
                <label htmlFor="newTeam">Add Team</label>
                <div className="flex gap-2">
                    <Input
                        id="newTeam"
                        className="text-black"
                        type="text"
                        value={newTeam}
                        onChange={(e) => setNewTeam(e.target.value)}
                        placeholder="Enter team name"
                    />
                    <Button type="submit" variant="outline">Add</Button>
                </div>
            </form>
            <div className="mb-4">
                <h2 className="text-xl font-semibold mb-2">Teams:</h2>
                <ul className="list-disc pl-5 flex flex-wrap gap-[16px]">
                    {teams.map((team, index) => (
                        <li key={index} className="flex justify-between items-center mb-1 w-[140px]">
                            {team}
                            <Button
                                variant="outline"
                                onClick={() => removeTeam(index)}
                            >
                                Remove
                            </Button>
                        </li>
                    ))}
                </ul>
            </div>
            <Button onClick={randomizeBracket} className="mb-4" variant="outline">
                Randomize Bracket
            </Button>
            {bracket.length > 0 && (
                <div className="overflow-x-auto">
                    <div className="flex">
                        {bracket.map((round, roundIndex) => (
                            <div key={roundIndex} className="flex flex-col mr-4">
                                <h3 className="text-lg font-semibold mb-2">
                                    Round {roundIndex + 1}
                                </h3>
                                {round.map((match, matchIndex) => (
                                    <div key={matchIndex} className="mb-2 w-64">
                                        <div className="p-4">
                                            <div className="text-center font-semibold mb-2">
                                                Match {matchIndex + 1}
                                            </div>
                                            <div className="space-y-2">
                                                {match.map((team, teamIndex) => (
                                                    <div key={teamIndex} className="flex items-center space-x-2">
                                                        <input
                                                            type="radio"
                                                            id={`${roundIndex}-${matchIndex}-${teamIndex}`}
                                                            name={`match-${roundIndex}-${matchIndex}`}
                                                            value={teamIndex.toString()}
                                                            onChange={() => selectWinner(roundIndex, matchIndex, teamIndex)}
                                                            disabled={isMatchDecided(match)||match.includes("TBD")}
                                                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                                                        />
                                                        <label htmlFor={`${roundIndex}-${matchIndex}-${teamIndex}`} className="cursor-pointer">
                                                            {team}
                                                        </label>
                                                    </div>
                                                ))}
                                            </div>
                                            {isMatchDecided(match) && (
                                                <div className="mt-2 text-center text-green-600 font-semibold">
                                                    Winner: {match[0]}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Tournament;