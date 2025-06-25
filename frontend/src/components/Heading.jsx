import { Button } from '@heroui/button'
import { ArrowRight, ArrowUpRight } from 'lucide-react'

const Heading = () => {
  return (
    <div className="max-w-3xl space-y-4 mt-[6rem]">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-teal-500 via-purple-500 to-red-500 text-transparent bg-clip-text">
            Real-time Renal Device Monitoring & Communication Platform
        </h1>
        {/* subheading */}
        <h3 className="sm:text-xl md:text-2xl font-medium leading-1">
            Seamless connection between healthcare professionals and patients for efficient dialysis machine tracking and emergency responsiveness.
        </h3>
        {/* CTA Buttons */}
        <div className="flex justify-center gap-4">
            <Button color="primary">Get Started <ArrowRight className="ml-2" /></Button>
            <Button color="primary" variant="bordered" className="font-semibold">Learn More <ArrowUpRight className="ml-2" /></Button>
        </div>
        
    </div>
  )
}

export default Heading