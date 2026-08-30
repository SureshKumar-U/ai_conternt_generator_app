import { Button } from "./ui/button"





const Hero = () => {
    return (
        <section className="relative px-margin-mobile md:px-margin-desktop py-xl md:py-32 flex flex-col items-center justify-center text-center min-h-[80vh] overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-container/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
            <div className="max-w-4xl z-10 space-y-md">
                <h1 className="font-bold text-4xl">
                    Transform Ideas into Content in <br/> <span className="gradient-text">Seconds.</span>
                </h1>
                <p className="mt-5 font-medium text-md text-on-surface-variant max-w-2xl mx-auto">
                    The ultimate AI-forward platform for power users and enterprise teams. Experience structured intelligence that turns your vision into high-quality, scalable content instantly.
                </p>
                <div className="pt-md flex flex-col sm:flex-row gap-sm justify-center">
                    <Button  className="box-content bg-primary text-on-primary px-md py-sm rounded-md text-black  shadow-[0_0_20px_rgba(208,188,255,0.5)] hover:bg-primary transition-all active:scale-95">
                        Get Started
                    </Button>
                </div>
            </div>
        </section>
    )
}


export default Hero