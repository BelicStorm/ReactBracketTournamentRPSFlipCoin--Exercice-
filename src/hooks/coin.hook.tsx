import { useState } from "react"

const COIN = () => {
    const [isFlipping, setIsFlipping] = useState(false)
    const [side, setSide] = useState<'heads' | 'tails'>('heads')
    const [flipCount, setFlipCount] = useState(0)
    const [results, setResults] = useState({ heads: 0, tails: 0 })

    const flipCoin = () => {
        if (!isFlipping) {
            setIsFlipping(true)
            setFlipCount((prev) => prev + 1)
            const result = Math.random() < 0.5 ? 'heads' : 'tails'
            setTimeout(() => {
                setSide(result)
                setResults((prev) => ({ ...prev, [result]: prev[result] + 1 }))
                setIsFlipping(false)
            }, 1800)
        }
    }


    return { side, flipCoin, flipCount, results, isFlipping};
}

export default COIN;