import Heading from '../components/Heading'
import Player from '../components/Player'

// import motion
import { motion } from "framer-motion"

const LandingPage = () => {
  return (
    <motion.div className="w-[80%] md:w-[60%] min-h-screen mx-auto" initial={{opacity: 0, y: 24}}
    animate={{opacity: 1, y:0}}
    transition={{duration:0.75}}>
        <div className="flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1 px-6 pb-10">
            <Heading />
        </div>
        <Player />
    </motion.div>
  )
}

export default LandingPage