import Navigation from '../components/Navigation'
import Heading from '../components/Heading'
import Player from '../components/Player'

const LandingPage = () => {
  return (
    <div className="sm:w-[80%] md:w-[60%] min-h-screen mx-auto">
        {/* <Navigation /> */}
        <div className="flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1 px-6 pb-10">
            <Heading />
        </div>
        <Player />
    </div>
  )
}

export default LandingPage