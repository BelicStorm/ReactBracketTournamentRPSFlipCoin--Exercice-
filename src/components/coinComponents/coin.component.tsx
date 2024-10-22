import { Coins, Trophy } from 'lucide-react'
import { motion } from 'framer-motion'

const CoinSide = ({ side }: { side: 'heads' | 'tails' }) => (
    <div className={`absolute w-full h-full rounded-full flex items-center justify-center backface-visibility-hidden ${side === 'heads' ? '' : 'rotate-y-180'}`}>
      <div className={`w-full h-full rounded-full border-4 ${side === 'heads' ? 'bg-black border-white-500' : 'bg-black border-white-400'} shadow-inner flex items-center justify-center`}>
      </div>
    </div>
)

const Coin = ({isFlipping, side}:any) => {
    return ( 
        <div className="flex flex-col items-center w-full">
            <div className="relative w-20 h-20 cursor-pointer">
              <motion.div
                className="w-full h-full relative preserve-3d"
                animate={{
                  rotateY: isFlipping ? 1500 : 0,
                }}
                transition={{ duration: 1.5, ease: "easeInOut", }}
              >
                <CoinSide side="heads" />
                <CoinSide side="tails" />
              </motion.div>
            </div>
            <p className="text-lg font-semibold">Coin flip result: {isFlipping ? "Is fliping" : side ? side : ""}</p>
          </div>
     );
}
 
export default Coin;